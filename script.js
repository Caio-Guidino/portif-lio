function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    menu.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
}

document.getElementById('hamburger-icon').addEventListener('click', toggleMenu);

function aplicarAnimacaoSeccao() {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("visible", entry.isIntersecting);
        });
    }, options);

    sections.forEach(section => observer.observe(section));
}

function init() {
    aplicarAnimacaoSeccao();
}

init();
