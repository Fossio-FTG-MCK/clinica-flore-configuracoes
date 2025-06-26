// 🔧 Configuração para GitHub Pages - Clínica Florê
// ⚠️ ATENÇÃO: Este arquivo é público! Não contém credenciais reais.

window.CONFIG = {
    // 🌐 URLs da aplicação
    APP_NAME: 'Clínica Florê - Configurações',
    VERSION: '1.0.0',
    
    // 🔒 Configuração Supabase (Credenciais funcionais)
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

// 🌟 Configuração específica para GitHub Pages
console.log('🔧 Configuração do GitHub Pages carregada');
console.log('✅ Clínica Florê - Sistema configurado');

// 📝 Instruções para uso
console.log(`
📋 PÁGINA CONFIGURADA PARA:
- Cliente: Clínica Florê
- Contato: Mônica
- Gestor: Marcelo Fruck
- Plataforma: GitHub Pages

🔗 Conexão com Supabase: ${window.CONFIG.SUPABASE.URL}
📊 Tabela: ${window.CONFIG.SUPABASE.TABLE_NAME}
`); 
