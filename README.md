# Feira de Ciências SESI Jacareí - Landing Page

Landing page profissional, moderna e totalmente responsiva desenvolvida com HTML, CSS e JavaScript puros (sem frameworks ou bibliotecas externas).

## 🚀 Como Abrir Localmente

1. **Baixe os arquivos** para uma pasta no seu computador:
   - `index.html`
   - `styles.css`
   - `script.js`

2. **Abra o arquivo** `index.html` em qualquer navegador moderno:
   - Dê um duplo clique no arquivo, ou
   - Clique com botão direito → "Abrir com" → escolha seu navegador

3. **Pronto!** A página será carregada localmente sem necessidade de servidor.

## 🎨 Personalização

### Alterar Paleta de Cores

Edite as variáveis CSS no arquivo `styles.css` (linhas 10-15):

```css
:root {
    --blue-900: #0b3d91;  /* Azul escuro principal */
    --blue-700: #1464d2;  /* Azul médio */
    --blue-500: #2a8bf7;  /* Azul principal (botões) */
    --blue-300: #86bdfc;  /* Azul claro (destaques) */
    --gray-100: #f5f7fb;  /* Fundo de seções */
    --text: #0b2140;      /* Cor do texto */
}
```

### Alterar Textos e Conteúdo

- **Textos gerais**: edite diretamente no `index.html`
- **Projetos**: modifique o array `projectsData` no `script.js` (linhas 13-46)
- **E-mail de contato**: altere em dois lugares:
  - No `index.html` (seção `#contact`)
  - No `script.js` (função `copyEmailToClipboard`, linha 273)

### Adicionar/Remover Projetos

No arquivo `script.js`, edite o array `projectsData`:

```javascript
const projectsData = [
    {
        id: 1,
        title: 'Nome do Projeto',
        description: 'Descrição curta',
        fullDescription: 'Descrição completa para o modal',
        category: 'Categoria do Projeto'
    },
    // Adicione mais objetos aqui...
];
```

## ✅ Checklist de Acessibilidade

Esta landing page implementa as seguintes práticas de acessibilidade (WCAG 2.1 AA):

- ✅ **HTML Semântico**: uso correto de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- ✅ **Navegação por Teclado**: todos os elementos interativos são acessíveis via Tab
- ✅ **Foco Visível**: outline destacado em todos os elementos focáveis
- ✅ **Atributos ARIA**: `aria-label`, `aria-expanded`, `aria-live`, `aria-modal`
- ✅ **Contraste de Cores**: todos os textos têm contraste mínimo de 4.5:1 (AA)
- ✅ **Textos Alternativos**: todas as imagens possuem atributos `alt` descritivos
- ✅ **Modal Acessível**: trap focus, fechamento com ESC, foco gerenciado
- ✅ **Respeito a `prefers-reduced-motion`**: animações desabilitadas se necessário
- ✅ **Feedback de Ações**: `aria-live` para informar cópia do e-mail
- ✅ **Skip Links**: rolagem suave entre seções

## 📱 Responsividade

A página é totalmente responsiva e foi testada em:

- **Mobile**: 360px - 767px (menu hamburger)
- **Tablet**: 768px - 1023px (menu horizontal, layout adaptado)
- **Desktop**: 1024px - 1439px (layout completo)
- **Large Desktop**: 1440px+ (grid de 3 colunas para projetos)

## 🧪 Testes Sugeridos

### Navegação por Teclado
1. Use `Tab` para navegar entre elementos
2. Use `Enter` ou `Espaço` para ativar botões/links
3. Use `Esc` para fechar o modal
4. Verifique se o foco está sempre visível

### Funcionalidade de Cópia de E-mail
1. Clique no botão "Copiar E-mail"
2. Verifique se aparece a mensagem de sucesso
3. Cole em um editor de texto para confirmar (Ctrl+V)

### Responsividade
1. Redimensione o navegador para diferentes larguras
2. Teste em 360px (mobile pequeno)
3. Teste em 768px (tablet)
4. Teste em 1440px (desktop grande)

### Modal
1. Clique em "Ver Mais" em qualquer projeto
2. Verifique se o foco vai para o botão de fechar
3. Tente usar `Tab` (foco deve ficar preso no modal)
4. Pressione `Esc` para fechar

## 🏗️ Estrutura de Arquivos

```
feira-ciencias/
│
├── index.html      # Estrutura HTML semântica
├── styles.css      # Estilos CSS com variáveis e BEM
├── script.js       # JavaScript modular (IIFE)
└── README.md       # Este arquivo
```

## 🔧 Tecnologias Utilizadas

- **HTML5**: estrutura semântica e acessível
- **CSS3**: custom properties, flexbox, grid, animações
- **JavaScript (ES6+)**: IIFE, event delegation, Clipboard API

## 📋 Principais Decisões de Design

### Metodologia CSS
- **BEM (Block Element Modifier)** para nomenclatura de classes
- **Mobile-First**: estilos base para mobile, media queries para telas maiores
- **CSS Custom Properties**: todas as cores, espaçamentos e valores reutilizáveis em variáveis

### JavaScript
- **IIFE**: todo código encapsulado para evitar poluição do escopo global
- **Event Delegation**: listeners no container pai para performance
- **Dados JSON**: projetos armazenados em array, renderizados dinamicamente

### Acessibilidade
- **Trap Focus**: foco preso dentro do modal quando aberto
- **Gerenciamento de Foco**: retorno ao elemento original após fechar modal
- **Feedback Acessível**: `aria-live` para leitores de tela

## 📞 Contato

Para dúvidas sobre a feira: **contato@sesisjacarei.edu.br**

---

**Desenvolvido para a Feira de Ciências SESI Jacareí 2025**