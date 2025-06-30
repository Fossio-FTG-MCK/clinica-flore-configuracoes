# 🏥 Clínica Florê - Sistema de Gestão de Tráfego Pago

> **Sistema interativo para colaboração entre gestores de tráfego e clientes**

## 📋 Visão Geral

Este projeto consiste em uma plataforma web interativa desenvolvida especificamente para a **Clínica Florê**, facilitando a colaboração entre gestores de tráfego pago e clientes na definição de estratégias de marketing digital.

### 👥 Informações do Cliente
- **Cliente**: Clínica Florê
- **Contato Principal**: Mônica
- **Gestor Responsável**: Marcelo Fruck
- **Tipo**: Clínica de estética e saúde

---

## 🏗️ Estrutura do Projeto

```
flore/
├── index.html                     # 🏠 Dashboard principal com sidebar
├── components/
│   ├── sidebar.js                 # 🧭 Componente de navegação universal
│   ├── sidebar.css                # 🎨 Estilos do sidebar (opcional)
│   └── README.md                  # 📖 Documentação do componente
├── pages/
│   ├── cliente/
│   │   └── plano-acao.html        # 📊 Área do cliente - formulário interativo
│   ├── admin/
│   │   └── dashboard.html         # 👨‍💼 Painel administrativo
│   └── documentacao/
│       ├── google/
│       │   ├── configuracoes.html # 📖 Google Ads & Analytics setup
│       │   └── ferramentas.html   # 🛠️ Ferramentas de marketing
│       └── facebook/
│           └── configuracoes.html # 📖 Meta/Facebook Ads setup
├── midias/                        # 🖼️ Logos e imagens
├── app-secure.js                  # ⚙️ Lógica do Supabase
├── config-github.js               # 🔧 Configurações públicas
└── debug.html                     # 🐛 Página de debug
```

---

## ✨ Funcionalidades

### 🏠 Dashboard Principal
- **Sidebar responsiva** com menu hamburger para mobile
- **Cards de status** do sistema
- **Navegação organizada** por seções:
  - 👤 Área do Cliente
  - 👨‍💼 Painel Administrativo
  - 📖 Documentação (Google/Facebook)

### 🧭 Componente Sidebar Universal
- **Navegação consistente** em todas as páginas
- **Auto-detecção** de caminhos relativos
- **Responsivo**: Menu hamburger no mobile, sidebar fixa no desktop
- **Link ativo** destacado automaticamente
- **Reutilizável**: Implementado em 6 páginas
- **Acessibilidade** completa com foco e ARIA

### 📊 Área do Cliente (`/pages/cliente/plano-acao.html`)
- **Definição de estratégia** interativa
- **Seleção de posicionamento** de mercado:
  - 🎯 Volume (alcance máximo)
  - 👑 Exclusividade (público premium)
- **Planejamento de investimento** com gráficos
- **Checklist dinâmico** de materiais necessários
- **Integração Supabase** para salvamento automático
- **Design responsivo** para mobile

### 👨‍💼 Painel Administrativo (`/pages/admin/dashboard.html`)
- **Visualização de todos os planos** salvos
- **Detalhamento completo** de cada cliente
- **Sistema de busca** e filtros
- **Interface limpa** e profissional

### 📖 Documentação Técnica
- **Google**: Configurações do Google Ads & Analytics + Ferramentas
- **Facebook/Meta**: Configurações do Meta Business Manager
- **Design interativo** com accordions
- **Guias passo-a-passo** detalhados

---

## 🚀 Deploy e Configuração

### Netlify (Recomendado)
1. Conecte o repositório ao Netlify
2. Configure as variáveis de ambiente do Supabase
3. O site será automaticamente deployado em: `https://clinica-flore.netlify.app`

### Configuração do Supabase
```javascript
// Edite config-github.js com suas credenciais
window.CONFIG = {
    SUPABASE: {
        URL: 'YOUR_SUPABASE_URL',
        ANON_KEY: 'YOUR_SUPABASE_ANON_KEY'
    }
};
```

### Esquema do Banco de Dados
```sql
CREATE TABLE planos_acao (
    id SERIAL PRIMARY KEY,
    nome_clinica TEXT NOT NULL,
    nome_contato TEXT,
    telefone_contato TEXT,
    email_contato TEXT,
    posicionamento_mercado TEXT,
    investimento_gestao DECIMAL(10,2),
    investimento_anuncios DECIMAL(10,2),
    gestor_nome TEXT,
    gestor_contato TEXT,
    checklist_status JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🎨 Design e UX

### 🎨 Paleta de Cores
- **Primária**: `#84a98c` (Verde Florê)
- **Secundária**: `#0d1721` (Azul escuro)
- **Acento**: `#2a7a51` (Verde escuro)
- **Fundos**: `#f8fafc`, `#ffffff`

### 📱 Responsividade
- **Desktop**: Sidebar fixa com navegação completa
- **Tablet**: Sidebar colapsível
- **Mobile**: Menu hamburger com overlay

### 🔤 Tipografia
- **Família**: Poppins (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** semântico
- **Tailwind CSS** para estilização
- **JavaScript** vanilla para interatividade
- **Chart.js** para gráficos de investimento
- **Google Fonts** (Poppins)

### Backend & Banco
- **Supabase** para backend-as-a-service
- **PostgreSQL** (via Supabase)
- **Autenticação** em tempo real

### Ferramentas
- **Git** para versionamento
- **GitHub** para repositório
- **Netlify** para deploy automático

---

## 📈 Funcionalidades Avançadas

### 📊 Gráficos Interativos
- **Distribuição de investimento** (Chart.js)
- **Comparação Volume vs Exclusividade**
- **Visualização responsiva**

### ✅ Sistema de Checklist
- **11 itens obrigatórios** para campanhas
- **Status dinâmico** (Pendente/Concluído)
- **Salvamento automático** no Supabase

### 🔄 Integração em Tempo Real
- **Auto-save** durante preenchimento
- **Notificações** de sucesso/erro
- **Recuperação** de dados em caso de falha

---

## 🚦 Como Usar

### Para Clientes
1. Acesse o **Dashboard principal**
2. Clique em **"Área do Cliente"**
3. Preencha o **formulário interativo**
4. Defina seu **posicionamento de mercado**
5. Configure **investimentos** com gráficos
6. Complete o **checklist** de materiais
7. Dados são **salvos automaticamente**

### Para Gestores
1. Acesse **"Painel Administrativo"**
2. Visualize **todos os planos** salvos
3. Clique em qualquer cliente para **detalhes completos**
4. Use para **análise** e **planejamento**

---

## 🔧 Desenvolvimento Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/flore.git

# Navegue para o diretório
cd flore

# Abra index.html em um servidor local
# Recomendado: Live Server (VS Code) ou Python SimpleHTTPServer
python -m http.server 8000
```

---

## 📝 Roadmap

### ✅ Concluído
- [x] **Dashboard principal** com sidebar responsivo
- [x] **Área do cliente** com formulário interativo
- [x] **Painel administrativo** funcional
- [x] **Documentação técnica** organizada
- [x] **Integração Supabase** completa
- [x] **Design responsivo** para mobile
- [x] **Estrutura otimizada** para deploy
- [x] **🆕 Sidebar universal** em todas as páginas
- [x] **🆕 Navegação consistente** com componente reutilizável
- [x] **🆕 Menu mobile** com hamburger e overlay

### 🚧 Próximas Funcionalidades
- [ ] Sistema de autenticação de usuários
- [ ] Notificações por email automáticas
- [ ] Exportação de relatórios em PDF
- [ ] Dashboard de métricas em tempo real
- [ ] Integração com APIs do Google Ads/Facebook

---

## 🤝 Contribuição

Este é um projeto proprietário desenvolvido especificamente para a **Clínica Florê**. Para sugestões ou melhorias, entre em contato com a equipe de desenvolvimento.

---

## 📞 Suporte

- **Email**: [seu-email@dominio.com]
- **Cliente**: Clínica Florê - Mônica
- **Gestor**: Marcelo Fruck

---

<div align="center">

**🌟 Desenvolvido com dedicação para a Clínica Florê 🌟**

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)

</div> 