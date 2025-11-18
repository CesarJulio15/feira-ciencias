/* ========================================
   SCRIPT.JS - Feira de Ciências SESI Jacareí
   JavaScript modular com IIFE (escopo isolado)
   Event delegation e boas práticas
   ======================================== */

(function() {
    'use strict';
    
    /* ========================================
       1. CONSTANTES DE IMAGENS
       ======================================== */
    const IMAGES = {
        logo: 'images/geral/logo.png',
        hero: 'images/geral/hero.jpg',
        favicon: 'images/geral/favicon.ico',
        social: {
            facebook: 'images/geral/facebook.svg',
            instagram: 'images/geral/instagram.svg',
            youtube: 'images/geral/youtube.svg'
        },
        background: 'images/geral/background.jpg'
    };
    
    /* ========================================
       2. DADOS DOS PROJETOS (JSON)
       ======================================== */
    const projectsData = [
        {
            id: 1,
            title: 'Energia Solar em Miniatura',
            description: 'Sistema fotovoltaico funcional que demonstra conversão de energia solar em elétrica para pequenos dispositivos.',
            fullDescription: 'Este projeto apresenta um painel solar em escala reduzida capaz de alimentar LEDs e carregar baterias. Os estudantes exploraram conceitos de física aplicada, circuitos elétricos e sustentabilidade, demonstrando como a energia renovável pode ser acessível e educativa.',
            category: 'Física e Sustentabilidade',
            sala: 'sala-3ano.html',
            images: [
                {
                    url: 'images/energia-solar/painel-1.jpg',
                    caption: 'Painel solar em miniatura montado'
                },
                {
                    url: 'images/energia-solar/circuito-2.jpg',
                    caption: 'Diagrama do circuito elétrico'
                },
                {
                    url: 'images/energia-solar/demo-3.jpg',
                    caption: 'Demonstração de funcionamento com LEDs'
                }
            ],
            detailedDescription: {
                objetivo: 'Demonstrar a viabilidade e eficiência da energia solar em escala reduzida, tornando o conceito mais tangível para estudantes.',
                metodologia: 'Construção de um painel solar em miniatura usando células fotovoltaicas de 5V, montagem de circuito com controlador de carga, bateria e LEDs.',
                resultados: 'O sistema consegue gerar energia suficiente para carregar uma bateria de 3.7V em 2 horas de exposição solar, alimentando LEDs por até 8 horas.',
                conclusao: 'O projeto comprova que sistemas solares em pequena escala são viáveis e podem ser usados em aplicações educacionais e projetos maker.'
            }
        },
        {
            id: 2,
            title: 'Cultivo Hidropônico Inteligente',
            description: 'Sistema automatizado de cultivo sem solo com monitoramento por sensores e controle de nutrientes.',
            fullDescription: 'Utilizando sensores de umidade, pH e temperatura, este projeto automatiza o cultivo hidropônico de hortaliças. O sistema coleta dados em tempo real e ajusta automaticamente a irrigação e nutrientes, promovendo agricultura urbana sustentável e eficiente.',
            category: 'Biologia e Tecnologia',
            sala: 'sala-2ano.html',
            images: [
                {
                    url: 'images/hidroponico/sistema-1.jpg',
                    caption: 'Sistema hidropônico completo'
                },
                {
                    url: 'images/hidroponico/sensores-2.jpg',
                    caption: 'Conjunto de sensores instalados'
                },
                {
                    url: 'images/hidroponico/plantas-3.jpg',
                    caption: 'Crescimento das hortaliças'
                },
                {
                    url: 'images/hidroponico/interface-4.jpg',
                    caption: 'Interface de monitoramento'
                }
            ],
            detailedDescription: {
                objetivo: 'Desenvolver um sistema hidropônico automatizado e acessível para cultivo urbano de hortaliças.',
                metodologia: 'Implementação de sistema NFT com Arduino, sensores de pH, condutividade elétrica, temperatura e bomba dosadora automática.',
                resultados: 'Produção de alface, rúcula e agrião com crescimento 30% mais rápido que métodos tradicionais e economia de 70% de água.',
                conclusao: 'O sistema provou ser eficiente e economicamente viável para agricultura urbana em pequena escala.'
            }
        },
        {
            id: 3,
            title: 'Robô Seguidor de Linha',
            description: 'Robô autônomo programado em Arduino que utiliza sensores infravermelhos para navegar por trajetos marcados.',
            fullDescription: 'Este robô foi desenvolvido com Arduino e sensores infravermelhos, capaz de seguir linhas pretas sobre superfícies claras. O projeto envolve programação, eletrônica e mecânica, demonstrando princípios de robótica móvel e automação.',
            category: 'Robótica e Programação',
            sala: 'sala-3ano.html',
            images: [
                {
                    url: 'images/robo/montagem-1.jpg',
                    caption: 'Montagem do chassi do robô'
                },
                {
                    url: 'images/robo/circuito-2.jpg',
                    caption: 'Placa de circuito e sensores'
                },
                {
                    url: 'images/robo/teste-3.jpg',
                    caption: 'Teste em pista com curvas'
                },
                {
                    url: 'images/robo/codigo-4.jpg',
                    caption: 'Código de controle no Arduino'
                }
            ],
            detailedDescription: {
                objetivo: 'Criar um robô autônomo capaz de seguir trajetos predefinidos usando sensores infravermelhos.',
                metodologia: 'Construção com Arduino Nano, 3 sensores IR, ponte H L298N, motores DC e chassis impresso em 3D.',
                resultados: 'O robô consegue seguir linhas com precisão de 95% e navegar curvas de até 90 graus a 0.5 m/s.',
                conclusao: 'Projeto demonstra conceitos de robótica móvel e controle PID de forma prática e educativa.'
            }
        },
        {
            id: 4,
            title: 'Purificador de Água Caseiro',
            description: 'Sistema de filtragem em camadas usando materiais acessíveis para tratamento básico de água.',
            fullDescription: 'Utilizando areia, carvão ativado, pedras e algodão em camadas, este purificador demonstra métodos físicos e químicos de filtragem. O projeto aborda a importância do acesso à água potável e técnicas de purificação de baixo custo para comunidades carentes.',
            category: 'Química e Sustentabilidade',
            sala: 'sala-9ano.html',
            images: [
                {
                    url: 'images/purificador/sistema-1.jpg',
                    caption: 'Sistema completo montado'
                },
                {
                    url: 'images/purificador/camadas-2.jpg',
                    caption: 'Camadas de filtragem'
                },
                {
                    url: 'images/purificador/teste-3.jpg',
                    caption: 'Teste com água contaminada'
                },
                {
                    url: 'images/purificador/resultado-4.jpg',
                    caption: 'Resultado da purificação'
                }
            ],
            detailedDescription: {
                objetivo: 'Desenvolver um sistema de purificação de água de baixo custo usando materiais acessíveis.',
                metodologia: 'Construção de filtro multicamadas com areia grossa e fina, carvão ativado, pedras e algodão, com testes de qualidade da água.',
                resultados: 'Redução de 95% da turbidez, 85% de material orgânico e 99% de coliformes totais na água tratada.',
                conclusao: 'Sistema eficiente e viável para comunidades sem acesso a água tratada, com custo aproximado de R$ 50,00.'
            }
        }
    ];
    
    /* ========================================
       2. ELEMENTOS DO DOM
       ======================================== */
    const elements = {
        header: document.getElementById('header'),
        menuToggle: document.getElementById('menu-toggle'),
        navMenu: document.getElementById('nav-menu'),
        navLinks: document.querySelectorAll('.nav__link'),
        projectsGrid: document.getElementById('projects-grid'),
        copyEmailBtn: document.getElementById('copy-email-btn'),
        copyFeedback: document.getElementById('copy-feedback'),
        emailLink: document.getElementById('email-link'),
        modal: document.getElementById('project-modal'),
        modalOverlay: document.getElementById('modal-overlay'),
        modalClose: document.getElementById('modal-close'),
        modalTitle: document.getElementById('modal-title'),
        modalBody: document.getElementById('modal-body')
    };
    
    /* ========================================
       3. MENU HAMBURGER (Mobile)
       ======================================== */
    function toggleMenu() {
        const isExpanded = elements.menuToggle.getAttribute('aria-expanded') === 'true';
        elements.menuToggle.setAttribute('aria-expanded', !isExpanded);
        elements.navMenu.classList.toggle('nav--active');
        
        // Prevenir scroll do body quando menu aberto (mobile)
        if (!isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // Event listener para o botão hamburger
    if (elements.menuToggle) {
        elements.menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Fechar menu ao clicar em um link (mobile)
    elements.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                toggleMenu();
            }
        });
    });
    
    /* ========================================
       4. HIGHLIGHT DO MENU ATIVO (Scroll Spy)
       ======================================== */
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                elements.navLinks.forEach(link => link.classList.remove('nav__link--active'));
                if (navLink) {
                    navLink.classList.add('nav__link--active');
                }
            }
        });
        
        // Adicionar sombra ao header quando rolar
        if (scrollY > 50) {
            elements.header.classList.add('header--scrolled');
        } else {
            elements.header.classList.remove('header--scrolled');
        }
    }
    
    // Throttle para otimizar performance do scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                updateActiveNav();
                scrollTimeout = null;
            }, 100);
        }
    });
    
    /* ========================================
       5. RENDERIZAR PROJETOS DINAMICAMENTE
       ======================================== */
    function renderProjects() {
        if (!elements.projectsGrid) return;
        
        const projectsHTML = projectsData.map(project => {
            const thumb = (project.images && project.images[0] && project.images[0].url) ? project.images[0].url : 'estudantescapa.jpeg';
            const salaHref = project.sala ? project.sala : '#';
            return `
            <article class="project-card" data-project-id="${project.id}" role="listitem">
                <a class="project-card__link" href="${salaHref}" aria-label="Abrir página da sala para ${project.title}">
                    <div class="project-card__image" 
                         role="img" 
                         aria-label="Ilustração do projeto ${project.title}"
                         style="background-image: url('${thumb}'); background-size: cover; background-position: center;">
                    </div>
                    <div class="project-card__content">
                        <h3 class="project-card__title">${project.title}</h3>
                        <p class="project-card__description">${project.description}</p>
                    </div>
                </a>
                <div class="project-card__actions">
                    <button class="project-card__btn" 
                            data-project-id="${project.id}"
                            aria-label="Ver mais detalhes sobre ${project.title}">
                        Ver Mais
                    </button>
                </div>
            </article>
        `}).join('');
        
        elements.projectsGrid.innerHTML = projectsHTML;
    }
    
    /* ========================================
       6. MODAL ACESSÍVEL (Ver Mais)
       ======================================== */
    let focusedElementBeforeModal;
    
    function openModal(projectId) {
        const project = projectsData.find(p => p.id === parseInt(projectId));
        if (!project) return;
        
        // Salvar elemento com foco atual
        focusedElementBeforeModal = document.activeElement;
        
        // Preencher conteúdo do modal
        elements.modalTitle.textContent = project.title;
        
        // Criar carrossel de imagens se houver imagens
        let imagesHTML = '';
        if (project.images && project.images.length > 0) {
            imagesHTML = `
                <div class="modal__carousel">
                    <div class="modal__carousel-container" id="carousel-container">
                        ${project.images.map((image, index) => `
                            <figure class="modal__carousel-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                                <img src="${image.url}" alt="${image.caption}" class="modal__carousel-img">
                                <figcaption class="modal__carousel-caption">${image.caption}</figcaption>
                            </figure>
                        `).join('')}
                    </div>
                    ${project.images.length > 1 ? `
                        <button class="modal__carousel-btn modal__carousel-btn--prev" aria-label="Imagem anterior">‹</button>
                        <button class="modal__carousel-btn modal__carousel-btn--next" aria-label="Próxima imagem">›</button>
                        <div class="modal__carousel-dots">
                            ${project.images.map((_, index) => `
                                <button class="modal__carousel-dot ${index === 0 ? 'active' : ''}" 
                                        data-index="${index}" 
                                        aria-label="Ir para imagem ${index + 1}">
                                </button>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            `;
        }
        
        // Criar descrição detalhada
        let detailedDescriptionHTML = '';
        if (project.detailedDescription) {
            detailedDescriptionHTML = `
                <div class="modal__details">
                    <div class="modal__detail-section">
                        <h4 class="modal__detail-title">Objetivo</h4>
                        <p class="modal__detail-text">${project.detailedDescription.objetivo}</p>
                    </div>
                    <div class="modal__detail-section">
                        <h4 class="modal__detail-title">Metodologia</h4>
                        <p class="modal__detail-text">${project.detailedDescription.metodologia}</p>
                    </div>
                    <div class="modal__detail-section">
                        <h4 class="modal__detail-title">Resultados</h4>
                        <p class="modal__detail-text">${project.detailedDescription.resultados}</p>
                    </div>
                    <div class="modal__detail-section">
                        <h4 class="modal__detail-title">Conclusão</h4>
                        <p class="modal__detail-text">${project.detailedDescription.conclusao}</p>
                    </div>
                </div>
            `;
        }
        
        // Montar conteúdo completo do modal
        elements.modalBody.innerHTML = `
            <div class="modal__content-wrapper">
                ${imagesHTML}
                <div class="modal__text-content">
                    <p class="modal__category"><strong>Categoria:</strong> ${project.category}</p>
                    <p class="modal__description">${project.fullDescription}</p>
                    ${detailedDescriptionHTML}
                </div>
            </div>
        `;
        
        // Inicializar carrossel se houver imagens
        if (project.images && project.images.length > 1) {
            initCarousel();
        }
        
        // Mostrar modal
        elements.modal.removeAttribute('hidden');
        
        // Prevenir scroll do body
        document.body.style.overflow = 'hidden';
        
        // Focar no botão de fechar
        elements.modalClose.focus();
        
        // Trap focus dentro do modal
        trapFocus(elements.modal);
    }
    
    function closeModal() {
        elements.modal.setAttribute('hidden', '');
        document.body.style.overflow = '';
        
        // Restaurar foco ao elemento anterior
        if (focusedElementBeforeModal) {
            focusedElementBeforeModal.focus();
        }
    }
    
    // Trap focus (acessibilidade)
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
    
    // Event delegation para botões "Ver Mais"
    if (elements.projectsGrid) {
        elements.projectsGrid.addEventListener('click', (e) => {
            // Se clicou no botão 'Ver Mais', prevenir navegação e abrir modal
            if (e.target.classList.contains('project-card__btn')) {
                e.preventDefault();
                e.stopPropagation();
                const projectId = e.target.getAttribute('data-project-id');
                openModal(projectId);
            }
        });
    }
    
    // Fechar modal
    if (elements.modalClose) {
        elements.modalClose.addEventListener('click', closeModal);
    }
    
    if (elements.modalOverlay) {
        elements.modalOverlay.addEventListener('click', closeModal);
    }
    
    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !elements.modal.hasAttribute('hidden')) {
            closeModal();
        }
    });
    
    /* ========================================
       7. COPIAR E-MAIL PARA CLIPBOARD
       ======================================== */
    function copyEmailToClipboard() {
        const email = 'contato@sesisjacarei.edu.br';
        
        // Tentar usar Clipboard API (moderno)
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email)
                .then(() => {
                    showCopyFeedback('✓ E-mail copiado com sucesso!');
                })
                .catch((err) => {
                    console.error('Erro ao copiar:', err);
                    showCopyFeedback('✗ Erro ao copiar. Tente selecionar manualmente.');
                });
        } else {
            // Fallback para navegadores antigos
            const textArea = document.createElement('textarea');
            textArea.value = email;
            textArea.style.position = 'fixed';
            textArea.style.left = '-9999px';
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    showCopyFeedback('✓ E-mail copiado com sucesso!');
                } else {
                    showCopyFeedback('✗ Erro ao copiar. Tente selecionar manualmente.');
                }
            } catch (err) {
                console.error('Erro ao copiar:', err);
                showCopyFeedback('✗ Erro ao copiar. Tente selecionar manualmente.');
            }
            
            document.body.removeChild(textArea);
        }
    }
    
    function showCopyFeedback(message) {
        if (!elements.copyFeedback) return;
        
        elements.copyFeedback.textContent = message;
        
        // Remover feedback após 3 segundos
        setTimeout(() => {
            elements.copyFeedback.textContent = '';
        }, 3000);
    }
    
    // Event listener para botão de copiar
    if (elements.copyEmailBtn) {
        elements.copyEmailBtn.addEventListener('click', copyEmailToClipboard);
    }
    
    // Atalho de teclado (Ctrl/Cmd + C) no link de e-mail
    if (elements.emailLink) {
        elements.emailLink.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
                copyEmailToClipboard();
                e.preventDefault();
            }
        });
    }
    
    /* ========================================
       8. CARROSSEL DE IMAGENS DO MODAL
       ======================================== */
    function initCarousel() {
        const container = document.getElementById('carousel-container');
        const items = container.querySelectorAll('.modal__carousel-item');
        const prevBtn = container.parentElement.querySelector('.modal__carousel-btn--prev');
        const nextBtn = container.parentElement.querySelector('.modal__carousel-btn--next');
        const dots = container.parentElement.querySelectorAll('.modal__carousel-dot');
        let currentIndex = 0;
        
        function showSlide(index) {
            // Atualizar índice atual
            currentIndex = index;
            
            // Atualizar classes ativas
            items.forEach(item => item.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            items[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
            
            // Animar transição
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        function nextSlide() {
            const newIndex = (currentIndex + 1) % items.length;
            showSlide(newIndex);
        }
        
        function prevSlide() {
            const newIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(newIndex);
        }
        
        // Event listeners
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });
        
        // Swipe support para touch
        let touchStartX = 0;
        let touchEndX = 0;
        
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchEndX - touchStartX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
            }
        }
        
        // Navegação por teclado
        container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });
        
        // Auto-play (opcional)
        let autoplayInterval;
        
        function startAutoplay() {
            autoplayInterval = setInterval(nextSlide, 5000);
        }
        
        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }
        
        // Parar autoplay ao interagir
        container.addEventListener('mouseenter', stopAutoplay);
        container.addEventListener('mouseleave', startAutoplay);
        container.addEventListener('touchstart', stopAutoplay);
        
        // Iniciar autoplay
        startAutoplay();
    }

    /* ========================================
       9. INICIALIZAÇÃO
       ======================================== */
    function init() {
        // Renderizar projetos na inicialização
        renderProjects();
        
        // Atualizar navegação ativa na carga
        updateActiveNav();
        
        console.log('✓ Landing Page da Feira de Ciências SESI Jacareí carregada com sucesso!');
    }
    
    // Executar quando DOM estiver completamente carregado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();