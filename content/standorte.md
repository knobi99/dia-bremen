---
title: "Standorte in Bremen-Nord"
description: "Alle Standorte von Digital im Alter Bremen-Nord – Sprechstunden und Kurse in Ihrer Nähe in Bremen-Nord."
leaflet: true
---

{{< section-banner
    titel="Unsere Standorte"
    beschreibung="Wir sind in fünf Stadtteilen in Bremen-Nord für Sie da – kostenlos, ohne Anmeldung."
    bild="/images/placeholder-standorte.svg"
    farbe="tuerkis"
>}}

<div class="standorte-grid">

{{< stadtteil-karte
    nummer="1"
    stadtteil="Lesum"
    link="/standorte/lesum/"
    linktext="Mehr über Lesum →"
>}}
{{< standort-venue
    typ="Sprechstunde"
    ort="Stadtbibliothek Lesum, Hindenburgstraße 31"
    zeiten="Jeden 2. und 4. Freitag · 11:00–13:00 Uhr"
/>}}
{{< standort-venue
    typ="Kurs"
    ort="Tablet-Kurs, Stadtbibliothek Lesum"
    zeiten="Ab 23. September 2026 · Mittwochs 10:30–12:00 Uhr"
/>}}
{{< standort-venue
    typ="Kurs"
    ort="Apple-Kurs, Heimatverein Lesum"
    zeiten="Jeden 1. Montag im Monat · 10:30–12:00 Uhr"
    kontakt="Anmeldung: 0421 6361262"
/>}}
{{< standort-venue
    typ="Workshop"
    ort="New Technology Guides, Nebelthau"
    zeiten="Jeden 2. Freitag im Monat · 16:00–20:00 Uhr"
/>}}
{{< /stadtteil-karte >}}

{{< stadtteil-karte
    nummer="2"
    stadtteil="Marßel"
    link="/standorte/marssel/"
    linktext="Mehr über Marßel →"
>}}
{{< standort-venue
    typ="Sprechstunde"
    ort="SG Marßel, Stader Landstraße 100"
    zeiten="Jeden 2. und 4. Montag · 10:00–11:30 Uhr"
/>}}
{{< standort-venue
    typ="Kurs"
    ort="Tablet-Kurs, SG Marßel"
    zeiten="Ab 29. September 2026 · Dienstags 15:30–17:30 Uhr"
    kontakt="Birgit Wencelides · 0157 73860418"
/>}}
{{< /stadtteil-karte >}}

{{< stadtteil-karte
    nummer="3"
    stadtteil="St. Magnus"
    link="/standorte/st-magnus/"
    linktext="Mehr über St. Magnus →"
>}}
{{< standort-venue
    typ="Sprechstunde"
    ort="Begegnungszentrum St. Magnus, Unter den Linden 24"
    zeiten="Jeden 1. und 3. Donnerstag · 15:00–17:00 Uhr"
/>}}
{{< /stadtteil-karte >}}

{{< stadtteil-karte
    nummer="4"
    stadtteil="Farge"
    link="/standorte/farge/"
    linktext="Mehr über Farge →"
>}}
{{< standort-venue
    typ="Sprechstunde"
    ort="Begegnungszentrum Farge, Rönnebecker Straße"
    zeiten="Jeden 1. und 3. Donnerstag · 10:00–12:00 Uhr"
    kontakt="Klaus Martin · 0152 34284457"
/>}}
{{< /stadtteil-karte >}}

{{< stadtteil-karte
    nummer="5"
    stadtteil="Vegesack"
    link="/standorte/vegesack/"
    linktext="Mehr über Vegesack →"
>}}
{{< standort-venue
    typ="PC-Treff"
    ort="Bürgerhaus Vegesack, Kirchheide 49"
    zeiten="Jeden 2. und 4. Donnerstag · 10:30–12:30 Uhr"
/>}}
{{< /stadtteil-karte >}}

</div>

---

## Karte

<div class="leaflet-container-wrapper">
  <div id="standorte-map" role="region" aria-label="Karte der Standorte in Bremen-Nord"></div>
</div>

<p style="font-size:15px; color:#555; margin-top:10px;">
  Tipp: Klicken Sie auf einen Marker für Adresse und Öffnungszeiten.
</p>

<script src="/js/leaflet.js"></script>
<script>
(function() {
  var map = L.map('standorte-map');

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende',
    maxZoom: 18
  }).addTo(map);

  var icon = L.divIcon({
    className: '',
    html: '<div style="background:#0369a1;color:white;border-radius:50% 50% 50% 0;width:32px;height:32px;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,0.3);"><span style="transform:rotate(45deg);font-size:15px;">📍</span></div>',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -34]
  });

  var standorte = [
    {
      lat: 53.1691, lon: 8.6942,
      name: "Stadtbibliothek Lesum",
      adresse: "Hindenburgstraße 31, 28717 Bremen",
      zeiten: "Jeden 2. + 4. Freitag · 11–13 Uhr"
    },
    {
      lat: 53.1778, lon: 8.7294,
      name: "SG Marßel",
      adresse: "Stader Landstraße 100, 28719 Bremen",
      zeiten: "Jeden 2. + 4. Montag · 10–11:30 Uhr"
    },
    {
      lat: 53.1748, lon: 8.6619,
      name: "Begegnungszentrum St. Magnus",
      adresse: "Unter den Linden 24, 28759 Bremen",
      zeiten: "Jeden 1. + 3. Donnerstag · 15–17 Uhr"
    },
    {
      lat: 53.2138, lon: 8.5219,
      name: "Begegnungszentrum Farge",
      adresse: "Rönnebecker Straße, 28779 Bremen",
      zeiten: "Jeden 1. + 3. Donnerstag · 10–12 Uhr"
    },
    {
      lat: 53.1737, lon: 8.6795,
      name: "New Technology Guides · Nebelthau",
      adresse: "Lesumer Heerstraße 38, 28717 Bremen",
      zeiten: "Jeden 2. Freitag · 16–20 Uhr (keine Ferien)"
    },
    {
      lat: 53.1746, lon: 8.6181,
      name: "Bürgerhaus Vegesack",
      adresse: "Kirchheide 49, 28757 Bremen",
      zeiten: "Jeden 2. + 4. Donnerstag · 10:30–12:30 Uhr"
    },
    {
      lat: 53.1688, lon: 8.6900,
      name: "Heimatverein Lesum",
      adresse: "Alter Schulhof 11, 28717 Bremen",
      zeiten: "Jeden 1. Montag · 10:30–12:00 Uhr (Apple-Kurs)"
    }
  ];

  var markers = standorte.map(function(s) {
    return L.marker([s.lat, s.lon], {icon: icon})
      .addTo(map)
      .bindPopup(
        '<strong style="font-size:16px;">' + s.name + '</strong>' +
        '<br>📍 ' + s.adresse +
        '<br>📅 ' + s.zeiten
      );
  });

  var bounds = L.latLngBounds(standorte.map(function(s) { return [s.lat, s.lon]; }));
  map.fitBounds(bounds, { padding: [40, 40] });
})();
</script>

---

**Sie wissen nicht, welcher Standort für Sie am nächsten liegt?**

📞 **[0178 – 1603960](tel:+491781603960)** · Mittwoch 10:00–11:00 Uhr · Wir helfen Ihnen gerne weiter.
