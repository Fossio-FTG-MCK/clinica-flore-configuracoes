# 🧭 Sidebar Component - Clínica Florê

Sistema de navegação lateral responsivo e reutilizável implementado em todas as páginas do projeto.

## 📋 Visão Geral

O componente de sidebar fornece uma navegação consistente e moderna para todo o sistema, adaptando-se automaticamente entre desktop e mobile com uma experiência de usuário fluida.

## 🏗️ Estrutura dos Arquivos

```
components/
├── sidebar.js          # Lógica principal do componente
├── sidebar.css         # Estilos dedicados (opcional)
└── README.md          # Esta documentação
```

## ✨ Funcionalidades

### 🖥️ Desktop
- **Sidebar fixa** sempre visível à esquerda
- **Navegação completa** com todos os links
- **Indicador visual** da página ativa
- **Scrollbar customizada** quando necessário

### 📱 Mobile
- **Menu hamburger** no canto superior esquerdo
- **Sidebar deslizante** que sobrepõe o conteúdo
- **Overlay escuro** para focar na navegação
- **Botão de fechar** intuitivo

### 🎯 Funcionalidades Avançadas
- **Auto-detecção** do nível de profundidade da página
- **Caminhos relativos** automáticos
- **Link ativo** baseado na URL atual
- **Fechamento automático** no mobile após navegar
- **Acessibilidade completa** com foco e ARIA

## 🚀 Como Usar

### Implementação em uma Página

1. **Adicione o script** antes do fechamento do `</body>`:

```html
<!-- Sidebar Component -->
<script src="caminho/para/components/sidebar.js"></script>
<script>
    // Inicializa o sidebar
    new SidebarComponent();
</script>
```

2. **CSS opcional** (se não usar Tailwind):

```html
<!-- No <head> -->
<link rel="stylesheet" href="caminho/para/components/sidebar.css">
```

### Estrutura de Caminhos

O componente detecta automaticamente a profundidade:

- **Raiz** (`/index.html`): `./midias/logo.png`
- **Nível 2** (`/pages/cliente/`): `../../midias/logo.png`  
- **Nível 3** (`/pages/documentacao/google/`): `../../../midias/logo.png`

## 🎨 Estrutura de Navegação

```
🏠 Dashboard (index.html)
👤 Área do Cliente (pages/area-do-cliente/area-do-cliente.html)
👨‍💼 Painel Admin (pages/admin/dashboard.html)
───────────────────────────────────────────────
📖 DOCUMENTAÇÃO
🔍 Google Ads & Analytics (pages/documentacao/google/configuracoes.html)
🛠️ Ferramentas (pages/documentacao/google/ferramentas.html)
📘 Meta/Facebook Ads (pages/documentacao/facebook/configuracoes.html)
```

## 🔧 Personalização

### Modificar Links

Edite o método `generateSidebarHTML()` em `sidebar.js`:

```javascript
<!-- Adicionar novo link -->
<a href="${basePath}nova-pagina.html" class="sidebar-link" data-page="nova">
    <svg><!-- Ícone SVG --></svg>
    <span class="font-medium">Nova Página</span>
</a>
```

### Estilos

O componente usa classes CSS específicas que podem ser customizadas:

- `.sidebar-link` - Links de navegação
- `.sidebar-link.active` - Link da página atual
- `.main-content` - Conteúdo principal

### Cores e Tema

As cores seguem a identidade da Clínica Florê:

```css
:root {
    --sidebar-primary: #84a98c;      /* Verde Florê */
    --sidebar-hover: #6b7d71;        /* Verde escuro */
    --sidebar-text: #374151;         /* Cinza */
    --sidebar-bg: #ffffff;           /* Branco */
}
```

## 📱 Responsividade

### Breakpoints
- **Desktop**: `≥ 1024px` - Sidebar fixa
- **Tablet/Mobile**: `< 1024px` - Menu hamburger

### Comportamentos
- **Auto-close** no mobile após clicar em link
- **Overlay dismiss** ao clicar fora do sidebar
- **Resize handling** para mudanças de orientação

## ⚙️ API do Componente

### Constructor
```javascript
new SidebarComponent(basePath)
```

### Métodos Principais
- `detectBasePath()` - Detecta profundidade automaticamente
- `generateSidebarHTML()` - Gera HTML do sidebar
- `setupEventListeners()` - Configura eventos
- `setActiveLink()` - Marca link ativo

### Event Listeners
- Click no menu hamburger
- Click no botão fechar
- Click no overlay
- Click nos links de navegação
- Resize da janela

## 🎯 Implementação em Todas as Páginas

### ✅ Páginas Atualizadas

- [x] `index.html` - Dashboard principal
- [x] `pages/area-do-cliente/area-do-cliente.html` - Área do cliente
- [x] `pages/admin/dashboard.html` - Painel administrativo
- [x] `pages/documentacao/google/configuracoes.html` - Setup Google
- [x] `pages/documentacao/google/ferramentas.html` - Ferramentas
- [x] `pages/documentacao/facebook/configuracoes.html` - Setup Facebook

### 🔄 Botões "Voltar" Removidos

Todos os antigos botões de voltar foram substituídos pelo sidebar integrado, proporcionando uma experiência de navegação mais profissional e consistente.

## 🐛 Troubleshooting

### Sidebar não aparece
1. Verifique se o script está sendo carregado
2. Confirme o caminho para `sidebar.js`
3. Verifique console do navegador para erros

### Links não funcionam
1. Confirme os caminhos relativos
2. Verifique se os arquivos de destino existem
3. Teste a detecção automática de profundidade

### Estilo inconsistente
1. Confirme se Tailwind CSS está carregado
2. Verifique conflitos com CSS existente
3. Use o arquivo `sidebar.css` se necessário

## 🔄 Futuras Melhorias

- [ ] **Tema escuro** automático
- [ ] **Animações** mais suaves
- [ ] **Keyboard navigation** completa
- [ ] **Breadcrumbs** integrados
- [ ] **Mini sidebar** colapsado
- [ ] **Configuração** via JSON

---

<div align="center">

**🌟 Navegação Profissional para Clínica Florê 🌟**

*Desenvolvido com foco na experiência do usuário*

</div> 