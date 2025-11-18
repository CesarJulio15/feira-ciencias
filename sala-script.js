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
            modalBody.innerHTML = `
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
            `;
            
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