#!/usr/bin/env python3
"""Bricht ab, wenn der Personenname aus NAME in ausgelieferten Dateien steht.

Der Makler von romanbecker.de hat auf den Seiten von Stark & Hoffmann nichts zu suchen - weder
im Text noch in Skripten, Daten oder PDF-Downloads. Die technische Adresse
romanbecker.de (Formular- und Adress-Endpunkt) faellt nicht darunter.
Nur Standardbibliothek, laeuft so auch im GitHub-Runner.

Aufruf: python3 scripts/pruefe-fremdnamen.py out [public]
"""
import base64, os, re, sys, zlib

NAME = re.compile(rb"roman[\s\-]+becker", re.I)
TEXT = (".html", ".htm", ".js", ".mjs", ".ts", ".tsx", ".json", ".txt", ".xml", ".css", ".webmanifest", ".rsc", ".py")


def pdf_inhalte(raw):
    yield raw
    for m in re.finditer(rb"<<((?:(?!<<).)*?)>>\s*stream\r?\n(.*?)\r?\n?endstream", raw, re.S):
        kopf, daten = m.group(1), m.group(2)
        try:
            if b"ASCII85Decode" in kopf:
                daten = daten.strip()
                daten = daten[2:] if daten.startswith(b"<~") else daten
                daten = base64.a85decode(daten[:-2] if daten.endswith(b"~>") else daten)
            if b"FlateDecode" in kopf:
                daten = zlib.decompress(daten)
            yield daten
        except Exception:
            continue


treffer = []
for wurzel in sys.argv[1:] or ["out"]:
    for ordner, _, dateien in os.walk(wurzel):
        for fn in dateien:
            pfad = os.path.join(ordner, fn)
            if fn.lower().endswith(".pdf"):
                if any(NAME.search(t) for t in pdf_inhalte(open(pfad, "rb").read())):
                    treffer.append(pfad)
            elif fn.lower().endswith(TEXT):
                if NAME.search(open(pfad, "rb").read()):
                    treffer.append(pfad)
if treffer:
    print("Fremder Personenname in ausgelieferten Dateien:", file=sys.stderr)
    for t in treffer:
        print("  " + t, file=sys.stderr)
    sys.exit(1)
print("Kein fremder Personenname in", ", ".join(sys.argv[1:] or ["out"]))
