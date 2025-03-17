<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio - Serviços de TI</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Meu Portfólio de TI</h1>
        <nav>
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="sobre">
        <h2>Sobre Mim</h2>
        <p>Sou um profissional de TI com experiência em redes, cloud computing e desenvolvimento web. Ofereço soluções personalizadas para otimizar infraestrutura e segurança digital.</p>
    </section>
    
    <section id="servicos">
        <h2>Serviços</h2>
        <ul id="lista-servicos"></ul>
    </section>
    
    <section id="contato">
        <h2>Contato</h2>
        <form id="form-contato">
            <input type="text" id="nome" placeholder="Seu nome" required>
            <input type="email" id="email" placeholder="Seu e-mail" required>
            <textarea id="mensagem" placeholder="Sua mensagem" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    </section>
    
    <footer>
        <p>&copy; 2025 Meu Portfólio de TI. Todos os direitos reservados.</p>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>