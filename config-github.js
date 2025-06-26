// 🔧 Configuração para GitHub Pages - Clínica Florê
// ⚠️ ATENÇÃO: Este arquivo é público! Não contém credenciais reais.

window.CONFIG = {
    // 🌐 URLs da aplicação
    APP_NAME: 'Clínica Florê - Configurações',
    VERSION: '1.0.0',
    
    // 🔒 Configuração Supabase (DEMO - substitua pelas suas credenciais)
    SUPABASE: {
        URL: 'SEU_SUPABASE_URL_AQUI',
        ANON_KEY: 'SUA_ANON_KEY_AQUI',
        TABLE_NAME: 'clinicas_configuracoes'
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