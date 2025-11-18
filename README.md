# Guia para Criar as Páginas das Outras Salas

## 📁 Estrutura de Arquivos

Você precisará criar os seguintes arquivos:

```
feira-ciencias/
├── index.html (já atualizado)
├── sala-9ano.html (modelo criado)
├── sala-1ano.html (criar)
├── sala-2ano.html (criar)
├── sala-3ano.html (criar)
├── styles.css (existente)
├── sala-styles.css (novo - estilos das salas)
├── script.js (existente)
└── sala-script.js (novo - interações das salas)
```

## 🔄 Como Criar as Outras Salas

### Para criar `sala-1ano.html`, `sala-2ano.html` e `sala-3ano.html`:

1. **Copie o arquivo `sala-9ano.html`**
2. **Altere apenas estas partes:**

#### No `<title>`:
```html
<!-- 9º Ano -->
<title>9º Ano - Feira de Ciências SESI Jacareí 2025</title>

<!-- Mude para: -->
<title>1º Ano - Feira de Ciências SESI Jacareí 2025</title>
```

#### No `<meta description>`:
```html
<meta name="description" content="Projetos do 1º Ano - Feira de Ciências SESI Jacareí">
```

#### No cabeçalho da sala:
```html
<h1 class="room-header__title">Projetos do 1º Ano</h1>
<p class="room-header__subtitle">Ensino Médio</p>
```

#### Nos links de navegação ativos:
```html
<!-- Marque o link correspondente como ativo -->
<li><a href="sala-1ano.html" class="nav__link nav__link--active">1º Ano</a></li>
```

3. **Substitua os cards de projeto** pelos projetos reais de cada turma

## 📝 Estrutura de um Card de Projeto

Cada projeto deve seguir este modelo:

```html
<article class="project-card">
    <div class="project-card__header">
        <h2 class="project-card__title">NOME DO PROJETO</h2>
        <span class="project-card__category">CATEGORIA</span>
    </div>
    
    <div class="project-card__body">
        <p class="project-card__description">
            Descrição breve do projeto (2-3 linhas)
        </p>
        
        <div class="project-card__team">
            <h3 class="project-card__team-title">Integrantes:</h3>
            <ul class="project-card__team-list">
                <li>Nome Completo 1</li>
                <li>Nome Completo 2</li>
                <li>Nome Completo 3</li>
            </ul>
        </div>
        
        <div class="project-card__pitch">
            <span class="project-card__pitch-icon">📍</span>
            <div>
                <strong>Local do Pitch:</strong>
                <p>Local específico - Horário</p>
            </div>
        </div>
    </div>
    
    <button class="project-card__btn" data-project="ID_ÚNICO">
        Ver Mais Detalhes
    </button>
</article>
```

## 🎨 Categorias Sugeridas

Use estas classes para as categorias (cores automáticas):
- `Física`
- `Química`
- `Biologia`
- `Tecnologia`
- `Matemática`
- `Robótica`
- `Sustentabilidade`
- `Saúde`

## 🔢 IDs dos Projetos

Para o modal funcionar, cada projeto precisa de um ID único no atributo `data-project`:

- 9º Ano: IDs 1-10
- 1º Ano: IDs 11-20
- 2º Ano: IDs 21-30
- 3º Ano: IDs 31-40

## 📊 Adicionando Detalhes no Modal

No arquivo `sala-script.js`, adicione os dados detalhados dos projetos:

```javascript
const projectsData = {
    11: {  // ID do projeto
        title: "Nome do Projeto",
        category: "Categoria",
        team: ["Integrante 1", "Integrante 2"],
        pitch: "Local - Horário",
        fullDescription: `
            <p><strong>Objetivo:</strong> Descrição do objetivo...</p>
            <p><strong>Metodologia:</strong> Como foi feito...</p>
            <p><strong>Resultados:</strong> O que foi alcançado...</p>
        `
    },
    // Adicione mais projetos...
};
```

## ✅ Checklist de Implementação

Para cada sala:

- [ ] Criar arquivo HTML (sala-1ano.html, sala-2ano.html, sala-3ano.html)
- [ ] Alterar título e descrição da página
- [ ] Atualizar cabeçalho (título e subtítulo)
- [ ] Marcar link de navegação correto como ativo
- [ ] Adicionar todos os cards de projeto da turma
- [ ] Definir IDs únicos para cada projeto
- [ ] Adicionar dados detalhados no sala-script.js
- [ ] Testar navegação entre salas
- [ ] Testar modais de "Ver Mais Detalhes"
- [ ] Verificar responsividade no mobile

## 🎯 Exemplo Completo de Troca

**De (9º Ano):**
```html
<h1 class="room-header__title">Projetos do 9º Ano</h1>
<p class="room-header__subtitle">Ensino Fundamental II</p>
```

**Para (1º Ano):**
```html
<h1 class="room-header__title">Projetos do 1º Ano</h1>
<p class="room-header__subtitle">Ensino Médio</p>
```

## 📱 Recursos Incluídos

✅ Layout responsivo para mobile e desktop
✅ Modal com detalhes expandidos dos projetos
✅ Navegação por dropdown entre salas
✅ Destaque visual dos integrantes e local do pitch
✅ Categorias com cores diferenciadas
✅ Animações e hover effects
✅ Acessibilidade (ARIA labels, navegação por teclado)

## 🚀 Próximos Passos

1. Colete os dados de todos os projetos (nome, integrantes, local do pitch)
2. Organize por ano/sala
3. Crie as 3 páginas restantes seguindo o modelo
4. Adicione os dados detalhados no JavaScript
5. Teste tudo!

---

**Dica:** Mantenha backup dos arquivos originais antes de fazer alterações!