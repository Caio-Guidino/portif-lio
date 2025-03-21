document.addEventListener("DOMContentLoaded", function () {
    init();
});

// Função para adicionar animação nas seções ao rolar a página
function aplicarAnimacaoSeccao() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
}

// Função para adicionar animações de fade-in
function aplicarAnimacoesFadeIn() {
    const style = document.createElement('style');
    style.textContent = `
        section {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Função de validação de formulário com feedback em tempo real
function validarFormulario() {
    const form = document.getElementById('form-contato');

    if (!form) return; // Garante que o formulário existe antes de adicionar eventos

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = form['nome'].value.trim();
        const email = form['email'].value.trim();
        const mensagem = form['mensagem'].value.trim();

        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!validarEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        exibirFeedback(nome);
        form.reset();
    });
}

// Função para validar o email
function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para exibir feedback após o envio do formulário
function exibirFeedback(nome) {
    const formFeedback = document.createElement('div');
    formFeedback.classList.add('form-feedback');
    formFeedback.innerHTML = `
        <p><strong>Obrigado, ${nome}!</strong></p>
        <p>Recebemos sua mensagem. Em breve entraremos em contato.</p>
    `;

    document.querySelector('#contato').appendChild(formFeedback);

    setTimeout(() => {
        formFeedback.remove();
    }, 5000);
