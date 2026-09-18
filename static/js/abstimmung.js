document.addEventListener('DOMContentLoaded', function () {
    var widget = document.getElementById('abstimmung-widget');
    if (!widget) return;

    var api = window.ABSTIMMUNG_API || '';
    var buttonsEl = document.getElementById('abstimmung-buttons');
    var ergebnisseEl = document.getElementById('abstimmung-ergebnisse');
    var balkenEl = document.getElementById('abstimmung-balken');
    var gesamtEl = document.getElementById('abstimmung-gesamt');
    var statusEl = document.getElementById('abstimmung-status');
    var zurueckBtn = document.getElementById('abstimmung-zurueck');
    var STORAGE_KEY = 'diaAbstimmungGewaehlt';

    var labels = {};
    var buttons = buttonsEl.querySelectorAll('.abstimmung-btn[data-topic]');
    buttons.forEach(function (btn) {
        labels[btn.dataset.topic] = btn.textContent.trim();
        btn.addEventListener('click', function () {
            stimmeAbgeben(btn.dataset.topic);
        });
    });

    function renderErgebnisse(data, gewaehltesThema) {
        var eintraege = Object.keys(labels).map(function (id) {
            return { id: id, label: labels[id], anzahl: data[id] || 0 };
        });
        eintraege.sort(function (a, b) { return b.anzahl - a.anzahl; });

        var gesamt = eintraege.reduce(function (summe, e) { return summe + e.anzahl; }, 0);
        gesamtEl.textContent = gesamt === 1 ? '1 Stimme abgegeben' : gesamt + ' Stimmen abgegeben';

        balkenEl.innerHTML = '';
        eintraege.forEach(function (e) {
            var prozent = gesamt > 0 ? Math.round((e.anzahl / gesamt) * 100) : 0;
            var zeile = document.createElement('div');
            zeile.className = 'abstimmung-zeile' + (e.id === gewaehltesThema ? ' gewaehlt' : '');

            var kopf = document.createElement('div');
            kopf.className = 'abstimmung-zeile-kopf';
            var label = document.createElement('span');
            label.textContent = e.label;
            var prozentSpan = document.createElement('span');
            prozentSpan.className = 'abstimmung-zeile-prozent';
            prozentSpan.textContent = prozent + ' %';
            kopf.appendChild(label);
            kopf.appendChild(prozentSpan);

            var grund = document.createElement('div');
            grund.className = 'abstimmung-balken-grund';
            var fuellung = document.createElement('div');
            fuellung.className = 'abstimmung-balken-fuellung';
            fuellung.style.width = prozent + '%';
            grund.appendChild(fuellung);

            var stimmenText = document.createElement('div');
            stimmenText.className = 'abstimmung-zeile-stimmen';
            stimmenText.textContent = e.anzahl === 1 ? '1 Stimme' : e.anzahl + ' Stimmen';

            zeile.appendChild(kopf);
            zeile.appendChild(grund);
            zeile.appendChild(stimmenText);
            balkenEl.appendChild(zeile);
        });
    }

    function zeigeErgebnisse(data, gewaehltesThema) {
        buttonsEl.hidden = true;
        ergebnisseEl.hidden = false;
        renderErgebnisse(data, gewaehltesThema);
    }

    function ladeFallback() {
        fetch('/data/abstimmung-ergebnisse.json')
            .then(function (res) { return res.json(); })
            .then(function (data) { zeigeErgebnisse(data.stimmen || data, localStorage.getItem(STORAGE_KEY)); })
            .catch(function () { /* keine Vorschau verfügbar, Buttons bleiben sichtbar */ });
    }

    function stimmeAbgeben(topic) {
        buttons.forEach(function (btn) { btn.disabled = true; });
        statusEl.textContent = 'Ihre Stimme wird gespeichert …';

        fetch(api + '/vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic: topic })
        })
            .then(function (res) {
                if (!res.ok) throw new Error('Serverfehler');
                return res.json();
            })
            .then(function (data) {
                localStorage.setItem(STORAGE_KEY, topic);
                statusEl.textContent = 'Danke, Ihre Stimme wurde gezählt!';
                zeigeErgebnisse(data, topic);
            })
            .catch(function () {
                buttons.forEach(function (btn) { btn.disabled = false; });
                statusEl.textContent = 'Ihre Stimme konnte gerade nicht gespeichert werden. Bitte versuchen Sie es in ein paar Minuten noch einmal.';
            });
    }

    if (zurueckBtn) {
        zurueckBtn.addEventListener('click', function () {
            localStorage.removeItem(STORAGE_KEY);
            ergebnisseEl.hidden = true;
            buttonsEl.hidden = false;
            buttons.forEach(function (btn) { btn.disabled = false; });
            statusEl.textContent = '';
        });
    }

    var bereitsGewaehlt = localStorage.getItem(STORAGE_KEY);
    if (bereitsGewaehlt) {
        fetch(api + '/results')
            .then(function (res) { if (!res.ok) throw new Error(); return res.json(); })
            .then(function (data) { zeigeErgebnisse(data, bereitsGewaehlt); })
            .catch(ladeFallback);
    }
});
