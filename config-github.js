// 🔧 Configuração para GitHub Pages - Clínica Florê
// ⚠️ ATENÇÃO: Este arquivo é público! Não contém credenciais reais.

window.CONFIG = {
    // 🌐 URLs da aplicação
    APP_NAME: 'Clínica Florê - Configurações',
    VERSION: '1.0.0',
    
    // 🔒 Configuração Supabase (DEMO - substitua pelas suas credenciais)
    SUPABASE: {
        URL: 'https://vrvxzcnlpugupwjzbjcq.supabase.co',
        ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZydnh6Y25scHVndXB3anpiamNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NjkxOTEsImV4cCI6MjA2NjU0NTE5MX0.0KxrWMKD7fupTzZ2muNRKgdrswcNJxJz7CHLMBMPPh4',
        TABLE_NAME: 'planos_acao'
    },
    
    // 📊 Configurações da aplicação
    FEATURES: {
        AUTO_SAVE: true,
        AUTO_SAVE_INTERVAL: 60000, // 60 segundos
        SHOW_NOTIFICATIONS: true,
        ENABLE_CHART: true
    },
    
    // 🎨 Configurações de UI
    UI: {
        THEME: 'light',
        ANIMATION_DURATION: 300
    }
};

// 📝 Instruções para configuração
console.log(`
🔧 CONFIGURAÇÃO NECESSÁRIA:
1. Substitua 'SEU_SUPABASE_URL_AQUI' pela sua URL do Supabase
2. Substitua 'SUA_ANON_KEY_AQUI' pela sua chave anônima
3. Para ambiente local, use o arquivo config.js (não versionado)

📖 Veja o arquivo README.md para instruções completas
`); 
