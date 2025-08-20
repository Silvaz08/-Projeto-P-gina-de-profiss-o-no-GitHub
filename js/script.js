// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Filtro de produtos
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const productItems = document.querySelectorAll('.produto-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe active de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adiciona a classe active ao botão clicado
                this.classList.add('active');
                
                // Obtém o filtro selecionado
                const filter = this.getAttribute('data-filter');
                
                // Filtra os produtos
                productItems.forEach(item => {
                    if (filter === 'todos' || item.getAttribute('data-categoria') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Filtro da galeria
    const galleryFilters = document.querySelectorAll('.galeria-filtro');
    const galleryItems = document.querySelectorAll('.galeria-item');
    
    if (galleryFilters.length > 0) {
        galleryFilters.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe active de todos os botões
                galleryFilters.forEach(btn => btn.classList.remove('active'));
                
                // Adiciona a classe active ao botão clicado
                this.classList.add('active');
                
                // Obtém o filtro selecionado
                const filter = this.getAttribute('data-categoria');
                
                // Filtra os itens da galeria
                galleryItems.forEach(item => {
                    if (filter === 'todos' || item.getAttribute('data-categoria') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Modal da galeria
    const galleryImages = document.querySelectorAll('.galeria-item');
    const modal = document.querySelector('.modal-galeria');
    const modalImg = document.getElementById('img-ampliada');
    const captionText = document.querySelector('.modal-legenda');
    const closeModal = document.querySelector('.fechar-modal');
    
    if (galleryImages.length > 0) {
        galleryImages.forEach(image => {
            image.addEventListener('click', function() {
                modal.style.display = 'block';
                modalImg.src = this.querySelector('img').src;
                captionText.innerHTML = this.querySelector('.galeria-overlay').innerHTML;
            });
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Fechar modal clicando fora da imagem
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Animação de scroll suave para links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulação de envio
            alert(`Obrigado por assinar nossa newsletter com o email: ${email}`);
            this.reset();
        });
    }
    
    // Adiciona classe de scroll no header para efeito de sombra
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
