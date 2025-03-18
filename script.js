// Lista de serviços que será inserida dinamicamente
const servicos = [
    'Consultoria em Redes de Computadores',
    'Cibersegurança: Proteção de Dados e Infraestrutura',
    'Implantação de Soluções em Cloud Computing',
    'Desenvolvimento de Sites Responsivos e Otimizados',
    'Suporte Técnico para Ambientes Corporativos',
    'Treinamento em Ferramentas e Tecnologias de TI'
];

// Função para adicionar os serviços dinamicamente na página
function exibirServicos() {
    const listaServicos = document.getElementById('lista-servicos');
    servicos.forEach(servico => {
        const li = document.createElement('li');
        li.textContent = servico;
        listaServicos.appendChild(li);
    });
}

// Função para validar o formulário antes de enviar
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Valida os campos
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Exibe um alerta de sucesso
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    // Aqui você pode adicionar lógica para enviar os dados para um servidor, por exemplo.
    document.getElementById('form-contato').reset(); // Reseta o formulário após envio
}

// Configura o formulário para validar antes de enviar
document.getElementById('form-contato').addEventListener('submit', validarFormulario);

// Exibe os serviços assim que a página for carregada
document.addEventListener('DOMContentLoaded', exibirServicos);
