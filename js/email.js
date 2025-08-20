// Configuração do FormSubmit para o formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('formContato');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Validação básica antes do envio
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;
            
            if (!nome || !email || !assunto || !mensagem) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Validação de email simples
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Por favor, insira um endereço de email válido.');
                return;
            }
            
            // Se tudo estiver válido, o formulário será enviado normalmente
            // O FormSubmit cuidará do processamento
        });
    }
});
