document.addEventListener('DOMContentLoaded', function () {
    // Zufälliges Hero-Motiv aus Bremen-Nord
    var motive = [
        '/images/hero-hafen.jpg',
        '/images/hero-weser.jpg',
        '/images/hero-kirche.jpg',
        '/images/hero-natur.jpg'
    ];
    var motiv = motive[Math.floor(Math.random() * motive.length)];
    var hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundImage =
            'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(' + motiv + ')';
    }
    var pageHero = document.querySelector('.page-hero');
    if (pageHero) {
        var seitenBild = pageHero.dataset.image || motiv;
        pageHero.style.backgroundImage =
            'linear-gradient(rgba(0,0,0,0.38), rgba(0,0,0,0.38)), url(' + seitenBild + ')';
    }

    // Burger Menu
    var burger = document.querySelector('.burger-menu');
    var nav = document.querySelector('.nav');
    if (burger && nav) {
        burger.addEventListener('click', function () {
            nav.classList.toggle('open');
            var isOpen = nav.classList.contains('open');
            burger.setAttribute('aria-expanded', isOpen);
            burger.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
        });
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
                burger.setAttribute('aria-label', 'Menü öffnen');
            });
        });
    }

    // Stats Counter Animation
    var counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;
    var started = false;

    function animateCounter(counter) {
        var target = +counter.getAttribute('data-target');
        var current = 0;
        var increment = target / 100;
        var hasPlus = counter.dataset.plus;
        var interval = setInterval(function () {
            current += increment;
            if (current >= target) {
                counter.innerText = (hasPlus ? '>' : '') + target;
                clearInterval(interval);
            } else {
                counter.innerText = (hasPlus ? '>' : '') + Math.ceil(current);
            }
        }, 20);
    }

    function startCounters() {
        counters.forEach(function (c) { animateCounter(c); });
    }

    function isInViewport(el) {
        var rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    var statsSection = document.getElementById('stats');
    if (statsSection) {
        if (isInViewport(statsSection)) { startCounters(); started = true; }
        window.addEventListener('scroll', function () {
            if (!started && isInViewport(statsSection)) {
                startCounters();
                started = true;
            }
        });
    }
});
