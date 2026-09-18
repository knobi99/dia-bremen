---
title: "Abstimmung: Digital Dabei"
h1: "Digital Dabei – worüber möchten Sie mehr erfahren?"
description: "Stimmen Sie ab: Welches digitale Thema interessiert Sie am meisten? Die Ergebnisse aller Besucher sehen Sie direkt im Anschluss."
abstimmung: true
abstimmung_api: "https://dia-bremen-abstimmung.stepwonder12.workers.dev"
---

Wir planen unsere nächsten Kurse und Sprechstunden – und möchten wissen, was Sie am meisten interessiert. Klicken Sie einfach auf das Thema, das Ihnen am wichtigsten ist. Sie sehen danach sofort, wie alle Besucherinnen und Besucher bisher abgestimmt haben.

<div class="abstimmung-widget" id="abstimmung-widget">

  <div class="abstimmung-buttons" id="abstimmung-buttons">
    <button type="button" class="abstimmung-btn" data-topic="sicher-bestellen">Sicher online bestellen und bezahlen</button>
    <button type="button" class="abstimmung-btn" data-topic="fahrplaner-oepnv">Fahrplaner ÖPNV Bremen</button>
    <button type="button" class="abstimmung-btn" data-topic="abfallkalender-behoerden">Bremer Abfallkalender und Behördenportale</button>
    <button type="button" class="abstimmung-btn" data-topic="zeitung-online">Zeitung online lesen</button>
    <button type="button" class="abstimmung-btn" data-topic="messenger-alternativen">Messengerdienste – Alternativen zu WhatsApp</button>
    <button type="button" class="abstimmung-btn" data-topic="email-sicher">E-Mail sicher nutzen</button>
    <button type="button" class="abstimmung-btn" data-topic="browser-google-alternativen">Browser und Google-Alternativen</button>
    <button type="button" class="abstimmung-btn" data-topic="fotos-verwalten">Fotos verwalten und sichern</button>
    <button type="button" class="abstimmung-btn" data-topic="libreoffice-word">LibreOffice statt Microsoft Word</button>
    <a href="/kontakt/" class="abstimmung-btn abstimmung-btn-link">Ein anderes Thema? Schreiben Sie uns!</a>
  </div>

  <div class="abstimmung-ergebnisse" id="abstimmung-ergebnisse" hidden>
    <h2>Aktuelle Ergebnisse</h2>
    <p class="abstimmung-gesamt" id="abstimmung-gesamt"></p>
    <div class="abstimmung-balken" id="abstimmung-balken"></div>
    <button type="button" class="abstimmung-zurueck" id="abstimmung-zurueck">Noch mal abstimmen</button>
  </div>

  <p class="abstimmung-status" id="abstimmung-status" aria-live="polite"></p>

</div>
