// ========================================
// SALA-SCRIPT.JS - Interações das páginas de sala
// ========================================

// Dados detalhados dos projetos (exemplo - você pode expandir)
const projectsData = {
    1: {
        title: "Energia Solar Sustentável",
        category: "Física",
        team: ["Ana Paula Silva", "Carlos Eduardo Santos", "Mariana Oliveira"],
        pitch: "Auditório Principal - 10h30",
        fullDescription: `
            <p><strong>Objetivo:</strong> Desenvolver um sistema acessível de captação de energia solar 
            para pequenas residências, reduzindo custos e promovendo sustentabilidade.</p>
            
            <p><strong>Metodologia:</strong> Utilizamos painéis solares de baixo custo e criamos 
            um sistema de armazenamento eficiente com baterias recicláveis.</p>
            
            <p><strong>Resultados Esperados:</strong> Redução de até 40% nos custos de energia 
            elétrica e diminuição da pegada de carbono das residências.</p>
            
            <p><strong>Materiais Utilizados:</strong> Painéis fotovoltaicos, baterias, inversores 
            de corrente, controladores de carga.</p>
        `
        ,
        images: [
            { url: 'images/9ano/energia-1.jpg', caption: 'Montagem do painel solar' },
            { url: 'images/9ano/energia-2.jpg', caption: 'Equipe apresentando o protótipo' },
            { url: 'images/9ano/energia-3.jpg', caption: 'Teste em bancada' }
        ]
    },
    2: {
        title: "Robótica e Automação",
        category: "Tecnologia",
        team: ["Pedro Henrique Costa", "Julia Fernandes", "Lucas Almeida", "Beatriz Rodrigues"],
        pitch: "Sala de Tecnologia - 14h00",
        fullDescription: `
            <p><strong>Objetivo:</strong> Criar um robô autônomo capaz de auxiliar em tarefas 
            domésticas simples, utilizando tecnologia acessível.</p>
            
            <p><strong>Tecnologias:</strong> Arduino, sensores ultrassônicos, motores servo, 
            programação em C++.</p>
            
            <p><strong>Funcionalidades:</strong> O robô pode navegar autonomamente, detectar 
            obstáculos e realizar tarefas como organização de objetos pequenos.</p>
            
            <p><strong>Inovação:</strong> Sistema de aprendizado que permite ao robô melhorar 
            suas ações com o uso contínuo.</p>
        `
        ,
        images: [
            { url: 'images/9ano/robo-1.jpg', caption: 'Robô em testes de movimentação' },
            { url: 'images/9ano/robo-2.jpg', caption: 'Equipe ajustando sensores' }
        ]
    },
    3: {
        title: "Purificação de Água",
        category: "Química",
        team: ["Rafaela Lima", "Gabriel Souza"],
        pitch: "Laboratório de Química - 11h15",
        fullDescription: `
            <p><strong>Objetivo:</strong> Desenvolver um sistema de baixo custo para purificação 
            de água utilizando materiais naturais e recicláveis.</p>
            
            <p><strong>Processo:</strong> Filtração em múltiplas camadas com areia, carvão ativado, 
            cascalho e materiais naturais antibacterianos.</p>
            
            <p><strong>Eficácia:</strong> Testes laboratoriais comprovaram remoção de 95% das 
            impurezas e 99% das bactérias nocivas.</p>
            
            <p><strong>Impacto Social:</strong> Sistema pode beneficiar comunidades sem acesso 
            à água potável, com custo de implementação inferior a R$ 50.</p>
        `
        ,
        images: [
            { url: 'images/9ano/agua-1.jpg', caption: 'Montagem do filtro em camadas' },
            { url: 'images/9ano/agua-2.jpg', caption: 'Resultado do teste de turbidez' }
        ]
    }
};

// Menu mobile toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
}

// Modal functionality
const modal = document.getElementById('project-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// Abrir modal
document.querySelectorAll('.project-card__btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const projectId = e.target.getAttribute('data-project');
        const project = projectsData[projectId];
        
        if (project) {
            modalTitle.textContent = project.title;
            // Montar galeria (se houver imagens) e conteúdo
            let galleryHTML = '';
            if (project.images && project.images.length > 0) {
                galleryHTML = `
                    <div class="modal__gallery" id="modal-gallery">
                        <div class="modal__gallery-main">
                            <button class="modal__gallery-btn modal__gallery-btn--prev" aria-label="Imagem anterior">‹</button>
                            <img src="${project.images[0].url}" alt="${project.images[0].caption}" class="modal__gallery-img" id="modal-gallery-main-img" loading="lazy">
                            <button class="modal__gallery-btn modal__gallery-btn--next" aria-label="Próxima imagem">›</button>
                        </div>
                        <div class="modal__gallery-thumbs" id="modal-gallery-thumbs">
                            ${project.images.map((img, i) => `
                                <button class="modal__gallery-thumb" data-index="${i}" aria-label="Ver imagem ${i+1}">
                                    <img src="${img.url}" alt="${img.caption}" loading="lazy">
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            modalBody.innerHTML = `
                <div class="modal__content-grid">
                    ${galleryHTML}
                    <div class="modal__info">
                        <p class="modal__category"><strong>Categoria:</strong> ${project.category}</p>
                        <div class="modal__team">
                            <p><strong>Integrantes:</strong></p>
                            <ul>
                                ${project.team.map(member => `<li>${member}</li>`).join('')}
                            </ul>
                        </div>
                        <p class="modal__pitch"><strong>📍 Local do Pitch:</strong> ${project.pitch}</p>
                    </div>
                    <div class="modal__description">
                        ${project.fullDescription}
                    </div>
                </div>
            `;

            // Inicializar comportamento da galeria
            if (project.images && project.images.length > 0) {
                initModalGallery(project.images);
            }
            
            modal.removeAttribute('hidden');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Foco no botão de fechar para acessibilidade
            modalClose.focus();
        }
    });
});

// Fechar modal
function closeModal() {
    modal.setAttribute('hidden', '');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
        closeModal();
    }
});

// Inicializar galeria dentro do modal
function initModalGallery(images) {
    const mainImg = document.getElementById('modal-gallery-main-img');
    const thumbsContainer = document.getElementById('modal-gallery-thumbs');
    const prevBtn = document.querySelector('.modal__gallery-btn--prev');
    const nextBtn = document.querySelector('.modal__gallery-btn--next');
    if (!mainImg || !thumbsContainer) return;

    let currentIndex = 0;

    function showImage(index) {
        index = (index + images.length) % images.length;
        currentIndex = index;
        mainImg.src = images[currentIndex].url;
        mainImg.alt = images[currentIndex].caption;

        // Atualizar destaque nas miniaturas
        thumbsContainer.querySelectorAll('.modal__gallery-thumb').forEach((btn, i) => {
            btn.classList.toggle('active', i === currentIndex);
        });
    }

    // Event listeners miniaturas
    thumbsContainer.querySelectorAll('.modal__gallery-thumb').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.getAttribute('data-index'), 10);
            showImage(idx);
        });
    });

    if (prevBtn) prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

    // Suporte teclado (setas)
    document.addEventListener('keydown', function handler(e) {
        if (modal.hasAttribute('hidden')) return;
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });

    // Marcar primeira miniatura como ativa
    showImage(0);
}

// Dropdown no mobile
document.querySelectorAll('.nav__item--dropdown').forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            item.classList.toggle('active');
        }
    });
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});