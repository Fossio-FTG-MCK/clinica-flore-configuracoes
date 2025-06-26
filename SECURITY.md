# 🔐 Guia de Segurança - Clínica Florê

## 🚨 Implementação de Segurança

### ⚠️ **IMPORTANTE - LEIA ANTES DE USAR**

Este projeto implementa um sistema de segurança em camadas para proteger as credenciais do Supabase e dados sensíveis. **NUNCA exponha chaves secretas no frontend.**

## 🎯 O Que Foi Implementado

### ✅ Sistema de Configuração Segura
- **Arquivo `config.js` separado** (não versionado)
- **Detecção automática de ambiente** (desenvolvimento/produção)
- **Suporte a variáveis de ambiente**
- **Proteção via `.gitignore`**

### ✅ Segurança no Frontend
- Apenas **ANON_KEY** exposta no cliente
- **JWT Secret e senha do banco** nunca expostas
- Validação de dados antes do envio
- Sistema de notificações seguro

### ✅ Funcionalidades de Proteção
- Auto-save seguro a cada 30 segundos
- Prevenção de perda de dados (beforeunload)
- Loading states para operações assíncronas
- Sistema robusto de tratamento de erros

## 🛠️ Configuração por Ambiente

### 🏠 **Desenvolvimento Local**

1. **Criar arquivo `config.js`**:
```javascript
const CONFIG = {
    SUPABASE: {
        URL: 'https://vrvxzcnlpugupwjzbjcq.supabase.co',
        ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZydnh6Y25scHVndXB3anpiamNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NjkxOTEsImV4cCI6MjA2NjU0NTE5MX0.0KxrWMKD7fupTzZ2muNRKgdrswcNJxJz7CHLMBMPPh4'
    },
    APP: {
        NAME: 'Plano de Ação Digital - Clínica Florê',
        VERSION: '1.0.0',
        ENVIRONMENT: 'development'
    },
    CLIENT: {
        CLINIC_NAME: 'Clínica Florê',
        CONTACT_NAME: 'Mônica',
        MANAGER_NAME: 'Marcelo Fruck',
        MANAGER_CONTACT: '(51) 99305-3612'
    }
};

function isDevelopment() {
    return CONFIG.APP.ENVIRONMENT === 'development' || 
           window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1';
}

function getSupabaseConfig() {
    if (isDevelopment()) {
        return {
            url: CONFIG.SUPABASE.URL,
            key: CONFIG.SUPABASE.ANON_KEY
        };
    } else {
        throw new Error('Configuração de produção não implementada. Use variáveis de ambiente.');
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getSupabaseConfig, isDevelopment };
} else {
    window.AppConfig = { CONFIG, getSupabaseConfig, isDevelopment };
}

if (isDevelopment()) {
    console.log('🔧 Configuração de desenvolvimento carregada');
}
```

2. **Verificar `.gitignore`**:
```
config.js
.env*
```

### 🌐 **Produção**

#### Opção 1: Variáveis de Ambiente (Recomendado)
```bash
# No seu hosting/servidor
export SUPABASE_URL="https://vrvxzcnlpugupwjzbjcq.supabase.co"
export SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
export NODE_ENV="production"
```

#### Opção 2: Arquivo `.env` (Não versionado)
```bash
SUPABASE_URL=https://vrvxzcnlpugupwjzbjcq.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NODE_ENV=production
```

## 🔑 Credenciais do Projeto

### ✅ **Seguras para Frontend**
```
Project URL: https://vrvxzcnlpugupwjzbjcq.supabase.co
ANON Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZydnh6Y25scHVndXB3anpiamNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NjkxOTEsImV4cCI6MjA2NjU0NTE5MX0.0KxrWMKD7fupTzZ2muNRKgdrswcNJxJz7CHLMBMPPh4
```

### 🚫 **NUNCA EXPOR NO FRONTEND**
```
Database Password: 0dBq0DNVVzC0uv4m
JWT Secret: J7DrFoZUtAbY/EcjsdLogB/TCZI83IhW2PmgauaQ0afAM3daMpfP+yW+POEl4Mx4FXhCLfoyFUtR4eTRgPV2lA==
```

## 🔍 Testando a Segurança

### ✅ **Verificações Obrigatórias**

1. **Arquivo `config.js` não deve estar no Git**:
```bash
git status
# config.js não deve aparecer na lista
```

2. **Teste de ambiente**:
```javascript
// No console do navegador
console.log(window.AppConfig.isDevelopment());
console.log(window.AppConfig.CONFIG);
```

3. **Teste de conexão**:
```javascript
// No console do navegador
window.appDebug.testConnection();
```

### 🚨 **Red Flags - Problemas de Segurança**
- ❌ `config.js` aparece no `git status`
- ❌ JWT Secret visível no código fonte
- ❌ Senha do banco em arquivos JavaScript
- ❌ Chaves hardcoded no HTML/JS
- ❌ Credenciais em console.log em produção

## 🏗️ Estrutura de Arquivos Segura

```
flore/
├── index.html              # ✅ Público
├── app-secure.js           # ✅ Público (sem credenciais)
├── config.js               # 🔒 NÃO VERSIONADO
├── .env                    # 🔒 NÃO VERSIONADO
├── .gitignore              # ✅ Protege arquivos sensíveis
├── env.example             # ✅ Template público
├── SECURITY.md             # ✅ Este arquivo
└── midias/                 # ✅ Assets públicos
```

## 🆘 Problemas Comuns

### ❓ **Erro: "Configuração não encontrada"**
**Solução**: Criar arquivo `config.js` no diretório raiz

### ❓ **Erro: "Conexão com Supabase falhou"**
**Soluções**:
1. Verificar se as credenciais estão corretas
2. Verificar conexão com internet
3. Confirmar se o projeto Supabase está ativo

### ❓ **Dados não salvam**
**Soluções**:
1. Verificar se posicionamento foi selecionado
2. Abrir console e verificar erros
3. Testar conexão: `window.appDebug.testConnection()`

## 📞 Suporte

Para problemas de segurança ou configuração:
- **Gestor**: Marcelo Fruck
- **WhatsApp**: (51) 99305-3612
- **Email**: [incluir se disponível]

---

> 🔐 **Lembre-se**: Segurança é responsabilidade de todos. Sempre proteja credenciais e nunca commite informações sensíveis no repositório. 