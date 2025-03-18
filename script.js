// Validação do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    alert(`Obrigado pelo seu contato, ${nome}! Recebemos sua mensagem.`);
    document.getElementById('form-contato').reset();
});
