// 🚀 Inicialização Rápida - Área do Cliente
// Carrega apenas o essencial primeiro, deixando dependências pesadas para depois

class QuickInit {
    constructor() {
        this.state = {
            appLoaded: false,
            chartLoaded: false,
            interactionDetected: false
        };
        
        this.init();
    }
    
    init() {
        // Configurar eventos básicos imediatamente
        this.setupBasicEvents();
        
        // Mostrar feedback visual de carregamento
        this.showReadyState();
        
        console.log('✅ Inicialização rápida concluída');
    }
    
    setupBasicEvents() {
        // Contador de caracteres (versão ultra-leve)
        const diferencialInput = document.getElementById('clinic-differential');
        const charCountElement = document.getElementById('char-count');
        
        if (diferencialInput && charCountElement) {
            diferencialInput.addEventListener('input', function() {
                const currentLength = this.value.length;
                charCountElement.textContent = currentLength;
                
                if (currentLength > 450) {
                    charCountElement.style.color = '#ef4444';
                } else if (currentLength > 400) {
                    charCountElement.style.color = '#f59e0b';
                } else {
                    charCountElement.style.color = '#6b7280';
                }
            });
        }
        
        // Detectar primeira interação para carregar app principal
        this.setupInteractionDetection();
    }
    
    setupInteractionDetection() {
        const interactiveElements = document.querySelectorAll('input, textarea, button, .position-card');
        
        const handleFirstInteraction = () => {
            if (!this.state.interactionDetected) {
                this.state.interactionDetected = true;
                this.showLoadingFeedback();
                this.loadMainApp();
            }
        };
        
        interactiveElements.forEach(element => {
            element.addEventListener('click', handleFirstInteraction, { once: true });
            element.addEventListener('focus', handleFirstInteraction, { once: true });
        });
    }
    
    showReadyState() {
        // Adicionar indicador visual de que a página está pronta
        const body = document.body;
        body.classList.add('page-ready');
        
        // Adicionar um pequeno indicador de status
        const statusBar = document.createElement('div');
        statusBar.id = 'status-bar';
        statusBar.className = 'fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 z-50 opacity-0 transition-opacity duration-500';
        document.body.appendChild(statusBar);
        
        // Mostrar por 2 segundos
        setTimeout(() => {
            statusBar.style.opacity = '1';
            setTimeout(() => {
                statusBar.style.opacity = '0';
                setTimeout(() => statusBar.remove(), 500);
            }, 1000);
        }, 100);
    }
    
    showLoadingFeedback() {
        // Mostrar feedback visual discreto
        const feedback = document.createElement('div');
        feedback.className = 'fixed bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50 transition-all duration-300';
        feedback.innerHTML = `
            <div class="flex items-center gap-2">
                <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Carregando funcionalidades...</span>
            </div>
        `;
        document.body.appendChild(feedback);
        
        // Remover após o carregamento
        setTimeout(() => {
            feedback.style.opacity = '0';
            setTimeout(() => feedback.remove(), 300);
        }, 3000);
    }
    
    async loadMainApp() {
        if (this.state.appLoaded) return;
        
        try {
            // Importar as funções do arquivo principal
            if (typeof loadMainApp === 'function') {
                await loadMainApp();
            }
            
            this.state.appLoaded = true;
            console.log('✅ App principal carregado após interação');
            
        } catch (error) {
            console.error('❌ Erro ao carregar app principal:', error);
        }
    }
}

// CSS adicional para feedback visual
const style = document.createElement('style');
style.textContent = `
    .page-ready {
        opacity: 1 !important;
    }
    
    /* Feedback para elementos interativos */
    input:focus, textarea:focus {
        box-shadow: 0 0 0 3px rgba(132, 169, 140, 0.1);
        border-color: #84a98c;
    }
    
    .position-card:hover {
        box-shadow: 0 4px 12px rgba(132, 169, 140, 0.15);
    }
    
    /* Loading states */
    .loading input, .loading textarea {
        background-color: #f9fafb;
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// Inicializar imediatamente
document.addEventListener('DOMContentLoaded', () => {
    new QuickInit();
});

// Exportar para uso global se necessário
window.QuickInit = QuickInit; 