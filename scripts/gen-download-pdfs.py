from pathlib import Path
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
import shutil

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
PUBLIC = ROOT / "public" / "downloads"
OUT.mkdir(parents=True, exist_ok=True)
PUBLIC.mkdir(parents=True, exist_ok=True)

BLACK = HexColor("#000000")
GOLD = HexColor("#d8b664")
GREY = HexColor("#5f6469")
LIGHT = HexColor("#f3f3f0")

styles = getSampleStyleSheet()
title = ParagraphStyle("TitleSH", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=24, leading=28, textColor=BLACK, spaceAfter=7)
intro = ParagraphStyle("IntroSH", parent=styles["BodyText"], fontName="Helvetica", fontSize=9.5, leading=14, textColor=GREY, spaceAfter=10)
heading = ParagraphStyle("HeadingSH", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=13, leading=16, textColor=BLACK, spaceBefore=8, spaceAfter=5)
body = ParagraphStyle("BodySH", parent=styles["BodyText"], fontName="Helvetica", fontSize=8.8, leading=12, textColor=BLACK)
small = ParagraphStyle("SmallSH", parent=styles["BodyText"], fontName="Helvetica", fontSize=7.5, leading=11, textColor=GREY)

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(GOLD)
    canvas.line(20*mm, 16*mm, 190*mm, 16*mm)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(GREY)
    canvas.drawString(20*mm, 10*mm, "Stark & Hoffmann Immobilien GmbH | Schloßstraße 41 | 51429 Bergisch Gladbach")
    canvas.drawRightString(190*mm, 10*mm, f"Seite {doc.page}")
    canvas.restoreState()

def checklist(items):
    rows = []
    for item in items:
        rows.append(["", Paragraph(item, body)])
    table = Table(rows, colWidths=[8*mm, 154*mm], repeatRows=0)
    table.setStyle(TableStyle([
        ("BOX", (0,0), (0,-1), .7, BLACK),
        ("INNERGRID", (0,0), (0,-1), .7, BLACK),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("TOPPADDING", (0,0), (-1,-1), 4),
        ("BOTTOMPADDING", (0,0), (-1,-1), 4),
        ("LEFTPADDING", (1,0), (1,-1), 8),
        ("BACKGROUND", (0,0), (-1,-1), LIGHT),
        ("LINEBELOW", (1,0), (1,-1), .35, HexColor("#d7d7d2")),
    ]))
    return table

def make_pdf(filename, label, headline, description, sections, sources):
    path = OUT / filename
    doc = SimpleDocTemplate(str(path), pagesize=A4, rightMargin=20*mm, leftMargin=20*mm, topMargin=15*mm, bottomMargin=21*mm, title=headline, author="Stark & Hoffmann Immobilien GmbH")
    story = [
        Paragraph("STARK &amp; HOFFMANN IMMOBILIEN", small),
        Spacer(1, 3*mm),
        Paragraph(label.upper(), ParagraphStyle("Label", parent=small, textColor=HexColor("#8d6b2e"), fontName="Helvetica-Bold", letterSpacing=1.2)),
        Paragraph(headline, title),
        Paragraph(description, intro),
    ]
    for name, items in sections:
        story.extend([Paragraph(name, heading), checklist(items)])
    story.extend([
        Spacer(1, 3*mm),
        Paragraph("Hinweis", heading),
        Paragraph("Diese Checkliste dient der Vorbereitung und ersetzt keine Rechts-, Steuer- oder Energieberatung. Welche Unterlagen im Einzelfall erforderlich sind, hängt von Immobilie, Eigentumsform und Verkaufssituation ab.", small),
        Spacer(1, 2*mm),
        Paragraph("Quellen und weiterführende Informationen", heading),
        Paragraph("<br/>".join(sources), small),
    ])
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    shutil.copy2(path, PUBLIC / filename)

make_pdf(
    "checkliste-verkaufsunterlagen.pdf",
    "Kostenlose Checkliste",
    "Unterlagen für den Immobilienverkauf",
    "Eine kompakte Übersicht für Eigentümer in Bergisch Gladbach und im Bergischen Land. Haken Sie ab, was bereits vorliegt; offene Unterlagen lassen sich anschließend gezielt beschaffen.",
    [
        ("Grundlagen für Haus und Wohnung", ["Aktueller Grundbuchauszug", "Flurkarte beziehungsweise Liegenschaftskarte", "Grundrisse und Bauzeichnungen", "Wohn- und Nutzflächenberechnung", "Energieausweis", "Nachweise über Modernisierungen und Sanierungen", "Gebäudeversicherung und Angaben zu laufenden Kosten"]),
        ("Zusätzlich bei Eigentumswohnungen", ["Teilungserklärung mit Aufteilungsplan", "Protokolle der letzten Eigentümerversammlungen", "Aktueller Wirtschaftsplan und letzte Jahresabrechnung", "Höhe der Instandhaltungsrücklage", "Verwaltervertrag und Kontaktdaten der Verwaltung"]),
        ("Bei vermieteten Immobilien", ["Mietvertrag und Nachträge", "Aktuelle Miethöhe und letzte Betriebskostenabrechnung", "Übersicht zu Kaution, Mietrückständen und vereinbarten Anpassungen"]),
    ],
    ["Gebäudeenergiegesetz (GEG), insbesondere Angaben in Immobilienanzeigen: https://www.gesetze-im-internet.de/geg/", "BORIS-NRW - amtliche Bodenrichtwerte: https://www.boris.nrw.de/"],
)

make_pdf(
    "checkliste-immobilienbewertung.pdf",
    "Kostenlose Checkliste",
    "Immobilienbewertung richtig vorbereiten",
    "Je vollständiger die Angaben, desto belastbarer lässt sich die Immobilie einordnen. Diese Übersicht hilft bei der Vorbereitung des Bewertungsgesprächs.",
    [
        ("Objektdaten", ["Vollständige Adresse und Grundstücksgröße", "Baujahr und gegebenenfalls Jahr wichtiger Anbauten", "Wohnfläche, Nutzfläche und Anzahl der Einheiten", "Stellplätze, Garagen und Nebengebäude", "Aktuelle Nutzung: selbst genutzt, frei oder vermietet"]),
        ("Zustand und Ausstattung", ["Dach, Fenster, Heizung und Elektrik mit jeweiligem Modernisierungsjahr", "Energetische Maßnahmen und Energieausweis", "Bäder, Bodenbeläge und Ausstattungsstandard", "Bekannte Schäden, Feuchtigkeit oder Instandhaltungsbedarf", "Besondere Merkmale wie Aussicht, Garten, Barrierearmut oder Photovoltaik"]),
        ("Lage und Rechte", ["Bodenrichtwertzone und Grundstückszuschnitt", "Baulasten, Wegerechte oder Erbbaurecht", "Lärm, Erreichbarkeit und unmittelbares Wohnumfeld", "Bei Wohnungen: Hausgeld, Rücklage und geplante Maßnahmen"]),
    ],
    ["Immobilienwertermittlungsverordnung (ImmoWertV): https://www.gesetze-im-internet.de/immowertv_2022/", "Gutachterausschuss Bergisch Gladbach: https://www.gars.nrw/stadt-gl"],
)

make_pdf(
    "fahrplan-immobilienverkauf.pdf",
    "Kostenloser Fahrplan",
    "Der Immobilienverkauf in sechs Schritten",
    "Von der ersten Einordnung bis zur Schlüsselübergabe: Dieser Fahrplan zeigt die typischen Etappen eines strukturierten Verkaufs.",
    [
        ("1. Bewertung und Ziel", ["Marktwert und realistische Preisspanne bestimmen", "Zeitplan, gewünschte Diskretion und persönliche Ziele festlegen"]),
        ("2. Unterlagen und Vorbereitung", ["Verkaufsunterlagen zusammenstellen und prüfen", "Energieausweis, Grundrisse, Fotografie und Exposé vorbereiten"]),
        ("3. Vermarktung", ["Zielgruppe und Vermarktungswege festlegen", "Anfragen koordinieren und Interessenten vorqualifizieren"]),
        ("4. Besichtigung und Auswahl", ["Besichtigungen strukturiert durchführen", "Bonität und Finanzierungsnachweis prüfen"]),
        ("5. Verhandlung und Notar", ["Konditionen dokumentieren und Kaufvertragsentwurf abstimmen", "Notartermin vorbereiten und offene Fragen klären"]),
        ("6. Übergabe", ["Kaufpreisfälligkeit beachten", "Zählerstände, Schlüssel und Zustand in einem Übergabeprotokoll festhalten"]),
    ],
    ["Bundesnotarkammer - Informationen zum Immobilienkaufvertrag: https://www.notar.de/themen/immobilien", "Stark & Hoffmann Immobilien - Verkaufsfahrplan: https://immobilienmakler-bergisch-gladbach.de/#fahrplan"],
)

print("3 PDFs erstellt")
