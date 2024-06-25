const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
})


const contactForm = document.getElementById('contactForm');
const messageText = document.getElementById('messageText');
const closeMessage = document.getElementById('closeMessage');
const messageArea = document.getElementById('messageArea');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    
    messageText.textContent = `Olá ${name}, seu formulário foi enviado com sucesso!`;
    messageText.style.color = 'green';
    messageArea.style.display = 'block';

    // Adicionar evento de click para fechar a mensagem
    closeMessage.addEventListener('click', () => {
        messageArea.style.display = 'none';
    });

    // Limpar os campos do formulário após o envio
    contactForm.reset();
});