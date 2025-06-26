// 🚀 Aplicação Principal - Clínica Florê
// Integração segura com Supabase e gerenciamento de estado

class ClinicaFloreApp {
    constructor() {
        this.supabase = null;
        this.state = {
            posicionamento: null,
            servicosFoco: '',
            diferencial: '',
            checklistStatus: {},
            hasChanges: false,
            lastSavedId: null,
            isLoading: false
        };
        
        this.init();
    }

    // 🔧 Inicialização da aplicação
    async init() {
        try {
            await this.initializeSupabase();
            this.setupEventListeners();
            this.initializeDefaultValues();
            this.setupChart();
            this.setupAutoSave();
            console.log('✅ Aplicação inicializada com sucesso');
        } catch (error) {
            console.error('❌ Erro na inicialização:', error);
            this.showNotification('error', 'Erro de Inicialização', 'Não foi possível conectar ao sistema. Recarregue a página.');
        }
    }

    // 📊 Configuração do gráfico de investimento
    setupChart() {
        const ctx = document.getElementById('investmentChart');
        if (!ctx) return;

        try {
            this.investmentChart = new Chart(ctx.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Meus Serviços', 'Investimento em Anúncios'],
                    datasets: [{
                        data: [300, 300],
                        backgroundColor: ['#84a98c', '#cad2c5'],
                        borderColor: '#fdfaf6',
                        borderWidth: 4,
                        hoverOffset: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.label || '';
                                    if (label) label += ': ';
                                    if (context.parsed !== null) {
                                        label += new Intl.NumberFormat('pt-BR', { 
                                            style: 'currency', 
                                            currency: 'BRL' 
                                        }).format(context.parsed);
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        } catch (error) {
            console.error('❌ Erro ao criar gráfico:', error);
        }
    }

    // 🔐 Inicialização segura do Supabase
    async initializeSupabase() {
        try {
            if (!window.AppConfig) {
                throw new Error('Configuração não encontrada. Verifique se config.js foi carregado.');
            }

            const config = window.AppConfig.getSupabaseConfig();
            
            if (!window.supabase) {
                throw new Error('Biblioteca do Supabase não foi carregada. Verifique a conexão com a internet.');
            }

            this.supabase = window.supabase.createClient(config.url, config.key);
            
            // Testar conexão
            const { error } = await this.supabase
                .from('planos_acao')
                .select('count')
                .limit(1);

            if (error) {
                throw new Error(`Erro de conexão: ${error.message}`);
            }

            console.log('🔗 Conexão com Supabase estabelecida');
        } catch (error) {
            console.error('❌ Erro ao conectar com Supabase:', error);
            throw error;
        }
    }

    // 🎯 Configuração dos event listeners
    setupEventListeners() {
        // Posicionamento de mercado
        document.getElementById('card-volume')?.addEventListener('click', () => {
            this.selectPosition('volume');
        });
        
        document.getElementById('card-exclusividade')?.addEventListener('click', () => {
            this.selectPosition('exclusividade');
        });

        // Campos de texto
        const textFields = [
            'service-focus',
            'clinic-differential'
        ];

        textFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('input', (e) => {
                    this.handleTextInput(fieldId, e.target.value);
                });
            }
        });

        // Checklist
        this.setupChecklistListeners();

        // Botão de salvar (se existir)
        const saveBtn = document.getElementById('save-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveData());
        }

        // Prevenção de perda de dados
        window.addEventListener('beforeunload', (e) => {
            if (this.state.hasChanges) {
                e.preventDefault();
                e.returnValue = 'Você tem alterações não salvas. Deseja realmente sair?';
            }
        });
    }

    // ✅ Configuração do checklist
    setupChecklistListeners() {
        const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
        
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateChecklistStatus();
                this.updateProgress();
                this.markAsChanged();
            });
        });
    }

    // 📍 Seleção de posicionamento
    selectPosition(type) {
        console.log('🎯 Selecionando posicionamento:', type);
        
        const cardVolume = document.getElementById('card-volume');
        const cardExclusividade = document.getElementById('card-exclusividade');
        const feedbackPanel = document.getElementById('posicionamento-feedback');

        console.log('🔍 Elementos encontrados:', {
            cardVolume: !!cardVolume,
            cardExclusividade: !!cardExclusividade,
            feedbackPanel: !!feedbackPanel
        });

        // Remover seleção anterior
        cardVolume?.classList.remove('selected');
        cardExclusividade?.classList.remove('selected');
        
        // Atualizar estado
        this.state.posicionamento = type;
        console.log('📝 Estado atualizado:', this.state.posicionamento);
        this.markAsChanged();

        // Mostrar feedback
        if (feedbackPanel) {
            feedbackPanel.classList.remove('hidden');
            
            if (type === 'volume') {
                cardVolume?.classList.add('selected');
                feedbackPanel.innerHTML = '<strong>Ótima escolha!</strong> Focaremos em campanhas de maior alcance, com comunicação clara e direta para atrair um grande número de clientes.';
            } else {
                cardExclusividade?.classList.add('selected');
                feedbackPanel.innerHTML = '<strong>Excelente posicionamento!</strong> Nossa comunicação será focada em exclusividade, qualidade e resultados premium para atrair clientes de alto valor.';
            }
            console.log('✅ Feedback aplicado');
        }
    }

    // ✏️ Manipulação de inputs de texto
    handleTextInput(fieldId, value) {
        switch(fieldId) {
            case 'service-focus':
                this.state.servicosFoco = value;
                break;
            case 'clinic-differential':
                this.state.diferencial = value;
                // Atualizar contador de caracteres
                const charCount = document.getElementById('char-count');
                if (charCount) {
                    charCount.textContent = value.length;
                }
                break;
        }
        this.markAsChanged();
    }

    // ✅ Atualização do status do checklist
    updateChecklistStatus() {
        const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
        
        checkboxes.forEach(checkbox => {
            const key = checkbox.id;
            if (key) {
                this.state.checklistStatus[key] = checkbox.checked;
            }
        });
    }

    // 📊 Atualização da barra de progresso
    updateProgress() {
        const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
        const checkedCount = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
        const totalCheckboxes = checkboxes.length;
        const percentage = Math.round((checkedCount / totalCheckboxes) * 100);
        
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        
        if (progressBar) progressBar.style.width = percentage + '%';
        if (progressText) progressText.textContent = percentage + '%';
    }

    // 🔄 Marcar como alterado
    markAsChanged() {
        this.state.hasChanges = true;
        this.toggleSaveButton();
        // Log reduzido para evitar spam no console
    }

    // 💾 Controle do botão de salvar
    toggleSaveButton() {
        const saveBtn = document.getElementById('save-btn');
        
        if (!saveBtn) {
            console.log('❌ Botão de salvar não encontrado');
            return;
        }
        
        if (this.state.hasChanges) {
            saveBtn.classList.remove('hidden');
            saveBtn.classList.add('pulse-animation');
        } else {
            saveBtn.classList.add('hidden');
            saveBtn.classList.remove('pulse-animation');
        }
    }

    // 💾 Salvamento automático
    setupAutoSave() {
        // Auto-save a cada 60 segundos se houver mudanças (reduzido para evitar duplicações)
        setInterval(() => {
            if (this.state.hasChanges && !this.state.isLoading) {
                console.log('🔄 Auto-save silencioso executado');
                this.saveData(true); // true = silent save
            }
        }, 60000); // Aumentado para 60 segundos
    }

    // 💾 Salvar dados no Supabase
    async saveData(silent = false) {
        if (this.state.isLoading) {
            if (!silent) {
                this.showNotification('info', 'Aguarde', 'Salvamento em andamento...');
            }
            console.log('⚠️ Salvamento já em andamento, ignorando...');
            return;
        }

        console.log('💾 Iniciando salvamento...', { silent });
        this.state.isLoading = true;
        
        try {
            // Validações básicas
            if (!this.state.posicionamento) {
                throw new Error('Por favor, selecione um posicionamento de mercado antes de salvar.');
            }

            if (!silent) {
                this.showLoadingOverlay(true);
            }

            // Preparar dados para inserção (apenas campos que existem na tabela)
            const dataToInsert = {
                nome_clinica: window.AppConfig.CONFIG.CLIENT.CLINIC_NAME,
                nome_contato: window.AppConfig.CONFIG.CLIENT.CONTACT_NAME,
                servicos_foco: this.state.servicosFoco ? this.state.servicosFoco.split('\n').filter(s => s.trim()) : [],
                posicionamento_mercado: this.state.posicionamento,
                diferencial: this.state.diferencial || null,
                investimento_gestao: 300.00,
                investimento_anuncios: 300.00,
                checklist_status: this.state.checklistStatus,
                gestor_nome: window.AppConfig.CONFIG.CLIENT.MANAGER_NAME,
                gestor_contato: window.AppConfig.CONFIG.CLIENT.MANAGER_CONTACT
            };

            // Salvar no Supabase
            const { data, error } = await this.supabase
                .from('planos_acao')
                .insert([dataToInsert])
                .select();

            if (error) {
                throw new Error(`Erro ao salvar: ${error.message}`);
            }

            // Sucesso
            this.state.hasChanges = false;
            this.state.lastSavedId = data[0]?.id;
            this.toggleSaveButton();

            if (!silent) {
                this.showNotification(
                    'success',
                    'Dados salvos com sucesso!',
                    `Plano salvo com ID: ${data[0]?.id}`
                );
            }

            console.log('✅ Dados salvos com sucesso! ID:', data[0]?.id);
            return { success: true, data };

        } catch (error) {
            console.error('❌ Erro ao salvar:', error);
            
            if (!silent) {
                this.showNotification(
                    'error',
                    'Erro ao salvar',
                    error.message || 'Ocorreu um erro inesperado. Tente novamente.'
                );
            }

            return { success: false, error: error.message };
        } finally {
            this.state.isLoading = false;
            if (!silent) {
                this.showLoadingOverlay(false);
            }
        }
    }

    // 🎯 Inicialização de valores padrão
    initializeDefaultValues() {
        // Itens do checklist que já estão prontos
        const defaultChecked = ['c5', 'c10', 'c11']; // logotipo, google meu negócio, whatsapp
        
        defaultChecked.forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.checked = true;
                this.state.checklistStatus[id] = true;
            }
        });

        this.updateProgress();
    }

    // 📱 Mostrar overlay de loading
    showLoadingOverlay(show) {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            if (show) {
                overlay.classList.remove('hidden');
            } else {
                overlay.classList.add('hidden');
            }
        }
    }

    // 🔔 Sistema de notificações
    showNotification(type, title, message) {
        // Criar notificação se não existir no HTML
        let notification = document.getElementById('notification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'notification';
            notification.className = 'fixed top-4 right-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-4 transform translate-x-full transition-transform duration-300 z-50';
            notification.innerHTML = `
                <div class="flex items-center">
                    <div id="notification-icon" class="mr-3 text-xl"></div>
                    <div class="flex-1">
                        <h4 id="notification-title" class="font-semibold text-gray-800"></h4>
                        <p id="notification-message" class="text-sm text-gray-600 mt-1"></p>
                    </div>
                    <button onclick="this.parentElement.parentElement.classList.add('translate-x-full')" class="ml-2 text-gray-400 hover:text-gray-600">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            `;
            document.body.appendChild(notification);
        }

        const icon = notification.querySelector('#notification-icon');
        const titleEl = notification.querySelector('#notification-title');
        const messageEl = notification.querySelector('#notification-message');

        // Configurar conteúdo
        if (titleEl) titleEl.textContent = title;
        if (messageEl) messageEl.textContent = message;

        // Configurar ícone e cor
        if (icon) {
            switch(type) {
                case 'success':
                    icon.innerHTML = '✅';
                    notification.className = notification.className.replace(/border-\w+-\d+/, 'border-green-200');
                    break;
                case 'error':
                    icon.innerHTML = '❌';
                    notification.className = notification.className.replace(/border-\w+-\d+/, 'border-red-200');
                    break;
                case 'info':
                    icon.innerHTML = 'ℹ️';
                    notification.className = notification.className.replace(/border-\w+-\d+/, 'border-blue-200');
                    break;
                default:
                    icon.innerHTML = '📝';
            }
        }

        // Mostrar notificação
        notification.classList.remove('translate-x-full');

        // Auto-hide após 5 segundos
        setTimeout(() => {
            notification.classList.add('translate-x-full');
        }, 5000);
    }

    // 🔍 Métodos utilitários para debug
    getState() {
        return this.state;
    }

    async testConnection() {
        try {
            const { data, error } = await this.supabase
                .from('planos_acao')
                .select('count')
                .limit(1);

            if (error) throw error;
            
            this.showNotification('success', 'Conexão OK', 'Sistema funcionando corretamente.');
            return true;
        } catch (error) {
            this.showNotification('error', 'Erro de Conexão', error.message);
            return false;
        }
    }

    // 🔧 Forçar botão a aparecer (para debug)
    forceShowSaveButton() {
        this.state.hasChanges = true;
        this.toggleSaveButton();
        console.log('🔧 Botão de salvar forçado a aparecer');
    }
}

// 🚀 Inicialização da aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    window.clinicaApp = new ClinicaFloreApp();
    
    // Disponibilizar métodos úteis no console para debug
    window.appDebug = {
        getState: () => window.clinicaApp.getState(),
        testConnection: () => window.clinicaApp.testConnection(),
        saveData: () => window.clinicaApp.saveData(),
        forceShowSaveButton: () => window.clinicaApp.forceShowSaveButton(),
        app: window.clinicaApp
    };
    
    console.log('🚀 Aplicação Clínica Florê inicializada');
    console.log('🔧 Use window.appDebug para acessar ferramentas de debug');
}); 