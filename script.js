window.sr = ScrollReveal ({ reset: true});

sr.reveal('.apresentacao', {duration: 2000})

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav a, .lista-menu a', '.servicos__cards a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

