// Animação para mostrar as seções quando o usuário rola a página
const sections = document.querySelectorAll("section");

const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Validação de formulário com feedback em tempo real
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verificação simples de preenchimento
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Simulação de envio do formulário com feedback
    const formFeedback = document.createElement('div');
    formFeedback.classList.add('form-feedback');
    formFeedback.innerHTML = `
        <p><strong>Obrigado, ${nome}!</strong></p>
        <p>Recebemos sua mensagem. Em breve entraremos em contato.</p>
    `;
    document.querySelector('#contato').appendChild(formFeedback);

    // Limpar o formulário
    document.getElementById('form-contato').reset();

    setTimeout(() => {
        formFeedback.remove();
    }, 5000);
});

// Adicionar experiência dinâmica
const addExperienciaBtn = document.createElement("button");
addExperienciaBtn.textContent = "Adicionar Experiência";
document.querySelector('#experiencia').appendChild(addExperienciaBtn);

addExperienciaBtn.addEventListener('click', function() {
    const experienciaContainer = document.querySelector('.experiencia-cards');
    
    const novaExperiencia = document.createElement('div');
    novaExperiencia.classList.add('experiencia-card');
    
    const novaExperienciaHTML = `
        <h3>Nova Experiência</h3>
        <p><i class="fas fa-calendar-day"></i> Ago 2023 - Presente</p>
        <p>Descrição da experiência aqui.</p>
    `;
    
    novaExperiencia.innerHTML = novaExperienciaHTML;
    experienciaContainer.appendChild(novaExperiencia);
});

// Adicionar habilidades dinamicamente
const addHabilidadeBtn = document.createElement("button");
addHabilidadeBtn.textContent = "Adicionar Habilidade";
document.querySelector('#habilidades').appendChild(addHabilidadeBtn);

addHabilidadeBtn.addEventListener('click', function() {
    const habilidadeInput = prompt('Digite a nova habilidade:');
    if (habilidadeInput && habilidadeInput.trim() !== "") {
        const novaHabilidade = document.createElement('li');
        novaHabilidade.textContent = habilidadeInput;
        document.querySelector('.habilidades-lista').appendChild(novaHabilidade);
    }
});

// Efeito de animação para as seções (já configurado com IntersectionObserver)
// Adicionamos a classe 'visible' quando a seção entra na tela
document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
});

// Aplicar animações de fade-in nas seções
const style = document.createElement('style');
style.textContent = `
    section.hidden {
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
