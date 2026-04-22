---
name: dia-impulse
description: >
  Erstellt vollständige Blog-Artikel als fertige HTML-Seite für "Digitale Impulse" auf dia-bremen.de.
  Verwende diesen Skill IMMER wenn der Nutzer einen Blogartikel, Impulse-Beitrag oder redaktionellen
  Text für die DiA Bremen-Nord Website erstellen möchte — auch wenn nur unstrukturierte Notizen,
  Stichpunkte oder rohe Gedanken vorliegen. Claude strukturiert und verfasst daraus den fertigen Artikel.
  Trigger-Wörter: "neuer Artikel", "Blog schreiben", "Digitale Impulse", "Beitrag erstellen",
  "Artikel für die Homepage", "Impulse-Artikel", "dia-bremen Blog", "neuer Beitrag",
  "Blogbeitrag", "Gedanken für einen Artikel", "mach einen Artikel draus".
metadata:
  version: "3.0"
  last_updated: "2026-04-21"
---

# DiA Bremen — Digitale Impulse Skill v3.0

Schreibt einen vollständigen Blog-Artikel im Stil von dia-bremen.de/impulse/ —
aus freiem Text, Stichpunkten oder sortierten Notizen —
und erstellt die fertige HTML-Datei inkl. Foto-Workflow und Git-Commit.

---

## EINGABEFORMAT

Wenn der Nutzer einen Artikel schreiben möchte, erwarte diese Eingabe:

```
Thema: [z.B. "Fake-Anrufe von angeblicher Microsoft-Hotline"]
Kategorie: [Alternativen | Datenschutz | Seniorenpolitik | Verbraucherschutz]
Bild: [Dateiname falls vorhanden, z.B. smartphone.jpg — sonst weglassen]

--- Deine Notizen / Gedanken ---

* Stichpunkte, Fließtext, alles erlaubt
* Schreib einfach drauf los
* Claude macht daraus einen fertigen HTML-Artikel
```

Falls das Eingabeformat fehlt, frage gezielt nach — maximal 2 Fragen, keine Liste.

---

## SCHRITT 1 — Kategorie bestimmen

Erkenne die Kategorie automatisch aus dem Inhalt, wenn nicht angegeben:

| Kategorie | Emoji | Wann |
|---|---|---|
| Alternativen | 🆓 | Kostenlose Software, Linux, Open Source, Wechsel von Produkten |
| Datenschutz | 🔒 | WhatsApp, Google, Tracking, Passwörter, Sicherheit |
| Seniorenpolitik | 💬 | Projekte, Initiativen, Berichte, Soziales |
| Verbraucherschutz | ⚠️ | Betrug, Abzocke, Fake-Anrufe, Warnungen |

**Standard-Autor:** Michael - DiA Bremen-Nord

---

## SCHRITT 2 — Artikel schreiben

### Schreibstil (immer einhalten!)

- **Zielgruppe:** Senioren 60+, unterschiedliches digitales Vorwissen
- **Ton:** Sachlich, freundlich, ermutigend — nie belehrend, keine Angst machen
- **Sprache:** Einfach, klar, kurze Sätze (max. 2 Zeilen pro Absatz)
- **Ansprache:** Immer **„Sie"** (Großschreibung)
- **Fachbegriffe:** Sofort in Klammern erklären, z.B.: „Browser (das Programm zum Surfen im Internet)"
- **Länge:** 400–700 Wörter → max. **5 Minuten Lesezeit** (Wörter ÷ 200, aufgerundet)
- **Beispiele:** Aus dem Alltag von Senioren (Enkelbild, Rente, Arzttermin, Einkauf)

### Pflicht-Struktur

1. **Einleitung** (2-3 Sätze): Alltagsproblem oder -frage aufgreifen
2. **Hauptteil**: 3-5 Abschnitte mit `<h2>` Überschriften
   - Bei Anleitungen: nummerierte Schritte `<ol>`
   - Bei Erklärungen: kurze Absätze, Schlüsselwörter `<strong>`
3. **Kernaussage-Box** ← Pflicht! Das Wichtigste in 2-3 Sätzen, visuell hervorgehoben
4. **Quellen** (wenn sinnvoll): 2-5 seriöse Links
5. **Abschluss**: Ermutigung + Hinweis auf Sprechstunden/Kontakt

---

## SCHRITT 3 — Foto suchen und kopieren

**Wenn der Nutzer bereits einen Dateinamen angegeben hat:**
Datei direkt aus `/entwuerfe/` in `/images/` kopieren → weiter mit Schritt 4.

**Sonst automatisch vorgehen:**

### 3a — Motiv aus dem Thema ableiten

| Thema | Passendes Motiv |
|---|---|
| Passwörter / Sicherheit | Schloss, Smartphone mit Eingabe, Hand auf Tastatur |
| Fake-Anrufe / Betrug | Telefon, besorgte Person, Warnsymbol |
| WhatsApp / Messenger | Smartphone auf Tisch, ältere Person schreibt |
| Linux / Software | Laptop, entspannte Person am Computer |
| Datenschutz | Schlüssel, digitale Symbole, nachdenkliche Person |

### 3b — Ordner `/entwuerfe/` durchsuchen

```bash
ls {projektpfad}/entwuerfe/
```

Alle gefundenen Bilddateien auflisten, das am besten passende auswählen
und dem Nutzer zur Bestätigung zeigen:

```
📷 Gefundene Fotos in /entwuerfe/:
  1. foto-senioren-smartphone.jpg  ← empfohlen
  2. laptop-tisch.jpg
  3. haende-tastatur.jpg

Ich nehme: foto-senioren-smartphone.jpg
Neuer Name: {thema-stichwort}.jpg
```

### 3c — Foto kopieren mit neuem Namen

```bash
cp {projektpfad}/entwuerfe/{gefundenes-foto} \
   {projektpfad}/images/{neuer-dateiname}.jpg
```

**Dateinamen-Regeln:** Kleinbuchstaben, Bindestriche, thematisch sprechend —
z.B. `fake-anrufe-warnung.jpg`, `whatsapp-datenschutz.jpg`

> Falls `/entwuerfe/` leer oder kein passendes Foto vorhanden:
> Nutzer informieren und `<img>`-Tag im HTML weglassen.

---

## SCHRITT 4 — Entwurf zur Korrektur ausgeben

**Vor der HTML-Erstellung immer Genehmigung einholen!**

Artikel zunächst als lesbaren Entwurf ausgeben:

```
---
✏️ ENTWURF ZUR PRÜFUNG
---

# {Titel}
Kategorie: {Kategorie} | Lesezeit: ca. {X} Minuten

{Vollständiger Artikeltext}

💡 Kernaussage: {Text}
🔗 Quellen: {falls vorhanden}
📷 Foto: {gewählter Dateiname}

Bitte prüfen — dann bestätigen mit „Freigabe" oder Korrekturen mitteilen.
```

**Warten auf Antwort:**
- „Freigabe" / „Ok" / „Passt" → weiter mit Schritt 5
- Korrekturen → anpassen und erneut ausgeben

---

## SCHRITT 5 — HTML-Datei erstellen

Erst nach Freigabe die vollständige HTML-Datei generieren.

**Dateiname** aus dem Titel ableiten — Kleinbuchstaben, Bindestriche:
`sicher-einkaufen-internet.html`, `fake-anrufe-erkennen.html`

**Speicherpfad:** `/impulse/{dateiname}.html`

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{Artikeltitel} | Digital im Alter Bremen-Nord</title>
    <meta name="description" content="{Kurzbeschreibung 1-2 Sätze}">
    <link rel="stylesheet" href="https://dia-bremen.de/css/style.css">
    <link rel="icon" href="https://dia-bremen.de/images/favicon.ico">
    <style>
        .kernaussage-box {
            background: #e8f4fd;
            border-left: 4px solid #2980b9;
            padding: 1.2rem 1.5rem;
            margin: 2rem 0;
            border-radius: 0 8px 8px 0;
        }
        .kernaussage-box h3 { margin-top: 0; color: #2980b9; }
        .quellen-box {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 1rem 1.5rem;
            margin: 2rem 0;
            border-radius: 8px;
        }
        .quellen-box h3 { margin-top: 0; }
    </style>
</head>
<body>
    <a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>

    <header>
        <div class="header-top">
            <a href="https://dia-bremen.de/index.html">
                <img src="https://dia-bremen.de/images/dia-logo-komplett.png"
                     alt="Digital im Alter Logo" class="logo">
            </a>
            <div class="header-kontakt">
                <span>Telefonnummer: 📞 +49 178 1603960</span>
                <span>E-Mail: ✉ <a href="mailto:hallo@dia-bremen.de">hallo@dia-bremen.de</a></span>
            </div>
        </div>
        <nav aria-label="Hauptnavigation">
            <ul>
                <li><a href="https://dia-bremen.de/index.html">Start</a></li>
                <li><a href="https://dia-bremen.de/termine.html">Termine</a></li>
                <li><a href="https://dia-bremen.de/tipps.html">Digitale Tipps</a></li>
                <li><a href="https://dia-bremen.de/ueber.html">Über Uns</a></li>
                <li><a href="https://dia-bremen.de/kontakt.html">Kontakt</a></li>
                <li><a href="https://dia-bremen.de/karte.html">Standorte</a></li>
                <li><a href="https://dia-bremen.de/impulse.html" aria-current="page">Digitale Impulse</a></li>
            </ul>
        </nav>
    </header>

    <main id="main-content">
        <article class="impulse-artikel">

            <header class="artikel-header">
                <h1>{Artikeltitel}</h1>
                <div class="artikel-meta">
                    <span>📅 {Datum TT. Monat JJJJ}</span>
                    <span>⏱️ Lesezeit: {X} Minuten</span>
                    <span>✍️ {Autor}</span>
                    <span class="kategorie-badge">{Emoji} {Kategorie}</span>
                </div>
                <!-- Bild nur wenn vorhanden: -->
                <img src="https://dia-bremen.de/images/{bilddatei}"
                     alt="{Bildbeschreibung}" class="artikel-bild">
            </header>

            <div class="artikel-inhalt">
                <p class="artikel-intro">{Einleitungssatz}</p>

                {Artikelinhalt als HTML — h2, p, ul, ol, strong, a}

                <!-- KERNAUSSAGE — PFLICHT -->
                <div class="kernaussage-box">
                    <h3>💡 Das Wichtigste auf einen Blick</h3>
                    <p>{Kernaussage in 2-3 Sätzen}</p>
                </div>

                <!-- QUELLEN — nur wenn vorhanden -->
                <div class="quellen-box">
                    <h3>🔗 Quellen &amp; weiterführende Links</h3>
                    <ul>
                        <li><a href="{URL}" target="_blank" rel="noopener">{Titel}</a></li>
                    </ul>
                </div>

                <hr>
                <p>Sie haben Fragen oder brauchen Unterstützung?
                Wir helfen gerne in unseren
                <a href="https://dia-bremen.de/termine.html">Sprechstunden</a>
                oder per E-Mail an
                <a href="mailto:hallo@dia-bremen.de">hallo@dia-bremen.de</a>.</p>

                <a href="https://dia-bremen.de/impulse.html" class="btn-zurueck">
                    ← Zurück zur Artikelübersicht
                </a>
            </div>

        </article>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Digital im Alter Bremen-Nord</h3>
                <p>Ein Projekt der Seniorenvertretung Bremen in Kooperation mit der
                Abteilung "Denksport &amp; Digitales" der SG Marßel.</p>
                <p><strong>Niemand soll digital abgehängt werden!</strong></p>
            </div>
            <div class="footer-section">
                <h4>Schnellzugriff</h4>
                <ul>
                    <li><a href="https://dia-bremen.de/index.html">🏠 Startseite</a></li>
                    <li><a href="https://dia-bremen.de/termine.html">📅 Aktuelle Termine</a></li>
                    <li><a href="https://dia-bremen.de/tipps.html">💻 Digitale Tipps</a></li>
                    <li><a href="https://dia-bremen.de/ueber.html">ℹ️ Über das Projekt</a></li>
                    <li><a href="https://dia-bremen.de/kontakt.html">📞 Kontakt</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Kontakt</h4>
                <p>📞 <a href="tel:+491781603960">0178-1603960</a></p>
                <p>✉ <a href="mailto:hallo@dia-bremen.de">hallo@dia-bremen.de</a></p>
                <p>💬 <a href="https://whatsapp.com/channel/0029Vb6dx9mBVJl9rWTHLi0x">WhatsApp-Kanal</a></p>
                <p><strong>Sprechzeiten:</strong> Mittwoch 10:00 - 11:00 Uhr</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2026 Digital im Alter Bremen-Nord ·
            <a href="https://dia-bremen.de/impressum.html">Impressum</a> ·
            <a href="https://dia-bremen.de/datenschutz.html">Datenschutz</a></p>
        </div>
    </footer>
</body>
</html>
```

---

## SCHRITT 6 — Lokale Vorschau in VS Code

```
1. Datei /impulse/{dateiname}.html im Explorer öffnen
2. Rechtsklick → „Open with Live Server"
   (oder unten rechts „Go Live" klicken)
3. Browser öffnet automatisch
```

**Prüfliste:**
- ✅ Überschriften korrekt und hierarchisch (h1 → h2)?
- ✅ Kernaussage-Box blau hervorgehoben und sichtbar?
- ✅ Navigation und Footer vollständig?
- ✅ Alle Links anklickbar (Navigation, Footer, Zurück-Button)?
- ✅ Bild sichtbar — oder sauber weggelassen?
- ✅ Mobilansicht ok? (Browserfenster schmaler ziehen)
- ✅ Datum im Format „21. April 2026"?

> **Live Server nicht installiert?** VS Code → Erweiterungen (Strg+Shift+X) →
> „Live Server" suchen → Installieren

---

## SCHRITT 7 — Git Commit & Push

Nach bestandener Prüfung:

```bash
git add impulse/{dateiname}.html images/{bilddatei}.jpg
git commit -m "Neuer Artikel: {Artikeltitel} ({Kategorie})"
git push
```

**Live-URL mitteilen:** `https://dia-bremen.de/impulse/{dateiname}.html`

**Vorschau-Block** für `impulse.html` (ganz oben einfügen — neueste Artikel zuerst):

```html
<div class="impulse-card">
    <img src="https://dia-bremen.de/images/{bild}.jpg" alt="{Bildbeschreibung}">
    <span class="kategorie-badge">{Emoji} {Kategorie}</span>
    <h3>{Artikeltitel}</h3>
    <p>📅 {Datum} · ⏱️ {X} Min.</p>
    <p>{Kurzbeschreibung 1-2 Sätze}</p>
    <a href="https://dia-bremen.de/impulse/{dateiname}.html">Weiterlesen →</a>
</div>
```

---

## QUALITÄTSKRITERIEN

- **Barrierefreiheit:** Alt-Texte vorhanden, semantisches HTML, Überschriften-Hierarchie korrekt
- **Keine externen CDN-Links** — nur das vorhandene CSS + inline `<style>` für die Boxen
- **Interne Links** immer als vollständige URL `https://dia-bremen.de/...`
- **Kernaussage-Box** ist Pflicht — kein Artikel ohne sie
- **Lesezeit** = Wörter ÷ 200, aufgerundet, nie mehr als 5 Minuten

---

## BEISPIELE

### Beispiel 1 — Datenschutz (aus Stichpunkten)

**Eingabe:**
```
Thema: Warum WhatsApp eure Daten weitergibt
Kategorie: Datenschutz

- Meta gehört WhatsApp
- Daten gehen an Facebook
- Alternative: Signal ist besser
- Viele wissen das nicht, aber alle nutzen WhatsApp wegen Enkel
- 2021 großer Aufschrei wegen AGB-Änderung
```

**Ergebnis:** Artikel mit Alltagseinstieg über Enkel-Fotos, „Meta" in Klammern erklärt,
Kernaussage: „WhatsApp ist bequem — aber Ihre Nachrichten werden mit Facebook geteilt."
Quelle: Verbraucherzentrale. Foto-Vorschlag: Smartphone auf Tisch.

### Beispiel 2 — Verbraucherschutz (aus Erlebnis)

**Eingabe:**
```
Thema: Fake-Anrufe von angeblicher Microsoft-Hotline
Kategorie: Verbraucherschutz
Bild: fake-anruf.jpg

Meine Nachbarin hat angerufen — jemand hat sich als Microsoft gemeldet,
wollte Zugriff auf ihren Computer. Hat gesagt ihr Computer hat einen Virus.
Sie war verunsichert, hat aber zum Glück aufgelegt.
Microsoft ruft NIEMALS einfach so an! Die wollen Fernzugriff und dann Geld.
Vorgehen: auflegen, niemanden Fernzugriff geben, Familie anrufen.
```

**Ergebnis:** Nachbarin als anonymes Beispiel in Einleitung, „Fernzugriff" erklärt,
Handlungsplan als nummerierte Liste, Kernaussage: „Microsoft ruft Sie NIEMALS unaufgefordert an."

---

## GLOSSAR

| Begriff | Erklärung |
|---|---|
| **Kernaussage-Box** | Blauer Kasten mit der wichtigsten Botschaft des Artikels |
| **Quellen-Box** | Liste seriöser Weblinks zum Weitersuchen |
| **Lesezeit** | Geschätzte Minuten (Wörter ÷ 200, aufgerundet) |
| **Kategorie-Badge** | Farbiges Etikett mit Emoji in der Artikelkopfzeile |
| **impulse.html** | Übersichtsseite aller Blog-Artikel auf dia-bremen.de |
| **Vorschau-Block** | Kleiner HTML-Karten-Code für die impulse.html Übersicht |
| **Live Server** | VS Code-Erweiterung für lokale Browser-Vorschau |
| **entwuerfe** | Ordner mit Foto-Rohmaterial für neue Artikel |

---

## CHANGELOG

| Version | Datum | Änderungen |
|---|---|---|
| 3.0 | 21.04.2026 | Zusammenführung v1 + v2; Foto-Workflow mit cp-Befehl; Korrekturschleife; Kernaussage-Box; Quellen-Box; Glossar; 2 Beispiele |
| 2.0 | 21.04.2026 | Eingabeformat; Fotomotiv-Vorschlag; Kernaussage; Quellenliste; Verifikationsschritt |
| 1.0 | 01.01.2025 | Initiale Version |
