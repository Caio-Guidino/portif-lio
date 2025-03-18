// Função de validação de formulário
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert(`Obrigado pela sua mensagem, ${nome}! Entrarei em contato em breve.`);
    document.getElementById("form-contato").reset();
});
