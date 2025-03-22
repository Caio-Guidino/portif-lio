// Função para adicionar a animação nas seções
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

// Função de validação de formulário com feedback em tempo real
function validarFormulario() {
    const form = document.getElementById('form-contato');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = form['nome'].value;
        const email = form['email'].value;
        const mensagem = form['mensagem'].value;

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

// Função de validação do email
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
}

// Função para adicionar nova experiência
function adicionarExperiencia() {
    const btnAdicionar = document.createElement("button");
    btnAdicionar.textContent = "Adicionar Experiência";
    document.querySelector('#experiencia').appendChild(btnAdicionar);

    btnAdicionar.addEventListener('click', () => {
        const experienciaContainer = document.querySelector('.experiencia-cards');
        const novaExperiencia = document.createElement('div');
        novaExperiencia.classList.add('experiencia-card');
        novaExperiencia.innerHTML = `
            <h3>Nova Experiência</h3>
            <p><i class="fas fa-calendar-day"></i> Ago 2023 - Presente</p>
            <p>Descrição da experiência aqui.</p>
        `;
        experienciaContainer.appendChild(novaExperiencia);
    });
}

// Função para adicionar habilidades dinamicamente
function adicionarHabilidade() {
    const btnAdicionar = document.createElement("button");
    btnAdicionar.textContent = "Adicionar Habilidade";
    document.querySelector('#habilidades').appendChild(btnAdicionar);

    btnAdicionar.addEventListener('click', () => {
        const habilidadeInput = prompt('Digite a nova habilidade:');
        if (habilidadeInput && habilidadeInput.trim() !== "") {
            const novaHabilidade = document.createElement('li');
            novaHabilidade.textContent = habilidadeInput;
            document.querySelector('.habilidades-lista').appendChild(novaHabilidade);
        }
    });
}

// Função para aplicar animações de fade-in nas seções
function aplicarAnimacoesFadeIn() {
    const style = document.createElement('style');
    style.textContent = `
        section.hidden {
            opacity: 0;
            transform: translateY(50px);
            will-change: opacity, transform;
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Inicializa a animação das seções
    document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
}

// Função para alternar o menu hambúrguer
function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    menu.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
}

// Adicionando o evento de clique no ícone do menu
document.getElementById('hamburger-icon').addEventListener('click', toggleMenu);

// Função para inicializar tudo
function init() {
    aplicarAnimacaoSeccao();
    validarFormulario();
    adicionarExperiencia();
    adicionarHabilidade();
    aplicarAnimacoesFadeIn();
}

// Iniciar o script
init();
