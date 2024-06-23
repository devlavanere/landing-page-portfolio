const contactForm = document.getElementById('contactForm');
const messageText = document.getElementById('messageText');
const closeMessage = document.getElementById('closeMessage');
const messageArea = document.getElementById('messageArea');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    messageText.textContent = 'Formulário enviado com sucesso!';
    messageText.style.color = 'green';
    messageArea.style.display = 'block';

    // Adicionar evento de click para fechar a mensagem
    closeMessage.addEventListener('click', () => {
        messageArea.style.display = 'none';
    });

    // Limpar os campos do formulário após o envio
    contactForm.reset();
});