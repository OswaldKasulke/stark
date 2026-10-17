#!/usr/bin/env python3
"""Holt die Objektfotos von images.ctfassets.net auf den eigenen Server.

Warum: Ein Foto, das der Browser bei images.ctfassets.net (Bildserver von
Evernest/Contentful) abholt, überträgt die IP-Adresse jedes Besuchers an
Dritte. Liegt das Foto unter /img/objekte/, ist es sofort sichtbar, ohne
Einwilligung und ohne Verbindung zu Dritten (DSGVO-Prüfung 17.10.2026).

Läuft im Deploy VOR `npm run build`: lädt jede Bild-URL aus app/ einmal nach
public/img/objekte/ und ersetzt sie im Quelltext der Arbeitskopie durch die
eigene Adresse (mit Domain, damit auch og:image und JSON-LD stimmen). Die
Änderung wird nicht committet – die Listings-Automatik schreibt weiter die
Original-URLs, jeder Deploy holt die Fotos neu ab.

Nach dem Build prüft --check, dass im Export nichts mehr übrig ist. (Nach dem
Build zu ersetzen geht nicht zuverlässig: Next.js zerlegt die Seitendaten in
Stücke, eine URL kann mitten im Text getrennt sein.)

  python3 scripts/fremdinhalte-lokal.py app public https://immobilienmakler-bergisch-gladbach.de
  python3 scripts/fremdinhalte-lokal.py --check out
"""
import hashlib, os, re, sys, time, urllib.error, urllib.request

UA = "Mozilla/5.0 (statischer Export; Objektfotos lokal)"
URL_RE = re.compile(r'https://images\.ctfassets\.net/[^"\'\s\\)<>`]+')
KEIN_FOTO = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 600"><rect width="960" height="600" fill="#e8e8e6"/>'
             '<text x="480" y="308" font-family="Arial,sans-serif" font-size="30" fill="#777" text-anchor="middle">Foto nicht verfügbar</text></svg>')


def check(out):
    rest = []
    for d, _, files in os.walk(out):
        for f in files:
            p = os.path.join(d, f)
            try:
                if b"images.ctfassets.net" in open(p, "rb").read():
                    rest.append(os.path.relpath(p, out))
            except OSError:
                pass
    if rest:
        print("Noch images.ctfassets.net in:", *sorted(rest)[:30], sep="\n  ")
        sys.exit(1)
    print(f"Prüfung {out}: keine Adresse von images.ctfassets.net mehr")


def lokal(url, ziel, cache):
    if url in cache:
        return cache[url]
    echt = url.replace("&amp;", "&")
    m = re.search(r"[?&]fm=(webp|jpg|png|avif)", echt)
    ext = m.group(1) if m else (os.path.splitext(echt.split("?")[0])[1].lstrip(".").lower() or "jpg")
    ext = "jpg" if ext == "jpeg" else ext
    name = hashlib.sha1(echt.encode()).hexdigest()[:16] + "." + ext
    os.makedirs(ziel, exist_ok=True)
    p = os.path.join(ziel, name)
    if not os.path.isfile(p):
        try:
            with urllib.request.urlopen(urllib.request.Request(echt, headers={"User-Agent": UA}), timeout=60) as r:
                daten = r.read()
        except urllib.error.HTTPError as e:
            if e.code not in (403, 404, 410):
                raise
            # Bei Evernest gelöscht: nie den toten Fremdlink stehen lassen.
            print(f"  Foto nicht mehr vorhanden ({e.code}): {echt}")
            open(os.path.join(ziel, "_kein-foto.svg"), "w", encoding="utf-8").write(KEIN_FOTO)
            cache[url] = "/img/objekte/_kein-foto.svg"
            return cache[url]
        open(p, "wb").write(daten)
        time.sleep(0.1)
    cache[url] = "/img/objekte/" + name
    return cache[url]


def ersetzen(quelle, public, domain):
    ziel = os.path.join(public, "img", "objekte")
    cache, dateien, n = {}, 0, 0
    for d, _, files in os.walk(quelle):
        for f in files:
            if not f.endswith((".ts", ".tsx", ".js", ".json", ".css", ".md", ".mdx")):
                continue
            p = os.path.join(d, f)
            t = open(p, encoding="utf-8").read()
            if "images.ctfassets.net" not in t:
                continue

            def ers(m):
                nonlocal n
                n += 1
                return domain.rstrip("/") + lokal(m.group(0), ziel, cache)
            neu = URL_RE.sub(ers, t)
            if neu != t:
                open(p, "w", encoding="utf-8").write(neu)
                dateien += 1
    print(f"Ersetzt: {n} Bildadressen in {dateien} Dateien, {len(set(cache.values()))} Fotos unter {ziel}")


if __name__ == "__main__":
    if sys.argv[1] == "--check":
        check(sys.argv[2])
    else:
        ersetzen(sys.argv[1], sys.argv[2], sys.argv[3])
