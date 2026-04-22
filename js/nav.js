document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.burger-menu');
    var nav = document.querySelector('.nav');

    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('open');
            var isOpen = nav.classList.contains('open');
            burger.setAttribute('aria-expanded', isOpen);
            burger.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
        });

        // Menü schließen wenn ein Link geklickt wird
        nav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                nav.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
                burger.setAttribute('aria-label', 'Menü öffnen');
            });
        });
    }
});
