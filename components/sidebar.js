// Componente de Sidebar Reutilizável para Clínica Florê
class SidebarComponent {
    constructor(basePath = './') {
        this.basePath = basePath;
        this.init();
    }

    // Detecta o nível de profundidade da página atual
    detectBasePath() {
        const pathname = window.location.pathname;
        
        if (pathname.includes('/pages/')) {
            if (pathname.includes('/documentacao/')) {
                return '../../../'; // Para páginas em /pages/documentacao/google/ ou /pages/documentacao/facebook/
            } else {
                return '../../'; // Para páginas em /pages/cliente/ ou /pages/admin/
            }
        }
        return './'; // Para página raiz
    }

    generateSidebarHTML() {
        const basePath = this.detectBasePath();
        
        return `
            <!-- Sidebar -->
            <div id="sidebar" class="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0">
                <div class="flex items-center justify-between h-16 px-6 border-b border-gray-200">
                    <div class="flex items-center gap-3">
                        <img src="${basePath}midias/512x512-BK.png" alt="Clínica Florê" class="w-8 h-8">
                        <span class="text-lg font-semibold text-gray-800">Clínica Florê</span>
                    </div>
                    <button id="closeSidebar" class="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <nav class="mt-6 px-6">
                    <div class="space-y-2">
                        <!-- Dashboard -->
                        <a href="${basePath}index.html" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="dashboard">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
                            </svg>
                            <span class="font-medium">Dashboard</span>
                        </a>

                        <!-- Área do Cliente -->
                        <a href="${basePath}pages/cliente/plano-acao.html" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="cliente">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            <span class="font-medium">Área do Cliente</span>
                        </a>

                        <!-- Painel Administrativo -->
                        <a href="${basePath}pages/admin/dashboard.html" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="admin">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                            <span class="font-medium">Painel Admin</span>
                        </a>

                        <!-- Divisor -->
                        <div class="border-t border-gray-200 my-4"></div>

                        <!-- Documentação -->
                        <div class="pb-2">
                            <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Documentação</h3>
                        </div>

                        <!-- Google Ads & Analytics -->
                        <a href="${basePath}pages/documentacao/google/configuracoes.html" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="google-config">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                            <span class="font-medium">Google Ads & Analytics</span>
                        </a>

                        <!-- Ferramentas de Marketing -->
                        <a href="${basePath}pages/documentacao/google/ferramentas.html" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="ferramentas">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span class="font-medium">Ferramentas</span>
                        </a>

                        <!-- Meta/Facebook Ads -->
                        <a href="${basePath}pages/documentacao/facebook/configuracoes.html" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="facebook-config">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h3a1 1 0 110 2h-1v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6H4a1 1 0 010-2h3z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11v6m4-6v6m-7-3h10"></path>
                            </svg>
                            <span class="font-medium">Meta/Facebook Ads</span>
                        </a>
                    </div>

                    <!-- Footer do Sidebar -->
                    <div class="mt-auto pt-6 border-t border-gray-200">
                        <div class="px-3 py-2">
                            <p class="text-xs text-gray-500">Sistema de Gestão</p>
                            <p class="text-xs font-medium text-gray-700">Clínica Florê</p>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- Overlay para mobile -->
            <div id="sidebarOverlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden hidden"></div>

            <!-- Botão menu mobile -->
            <button id="menuButton" class="fixed top-4 left-4 z-50 lg:hidden p-2 bg-white rounded-lg shadow-lg border border-gray-200">
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        `;
    }

    generateSidebarCSS() {
        return `
            <style>
                /* Sidebar Styles */
                .sidebar-link.active {
                    background-color: #84a98c;
                    color: white;
                }
                
                .sidebar-link.active svg {
                    color: white;
                }

                /* Ajuste para conteúdo principal quando sidebar está visível */
                @media (min-width: 1024px) {
                    .main-content {
                        margin-left: 16rem; /* 256px = w-64 */
                    }
                }

                /* Mobile adjustments */
                @media (max-width: 1023px) {
                    .main-content {
                        margin-left: 0;
                        padding-top: 4rem; /* Espaço para o botão do menu */
                    }
                }

                /* Scrollbar customizado para o sidebar */
                #sidebar {
                    scrollbar-width: thin;
                    scrollbar-color: #d1d5db #f9fafb;
                }

                #sidebar::-webkit-scrollbar {
                    width: 6px;
                }

                #sidebar::-webkit-scrollbar-track {
                    background: #f9fafb;
                }

                #sidebar::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 3px;
                }

                #sidebar::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af;
                }
            </style>
        `;
    }

    init() {
        // Aguarda o DOM estar carregado
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.render());
        } else {
            this.render();
        }
    }

    render() {
        // Injeta o CSS
        const cssStyles = this.generateSidebarCSS();
        document.head.insertAdjacentHTML('beforeend', cssStyles);

        // Injeta o HTML do sidebar
        const sidebarHTML = this.generateSidebarHTML();
        document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

        // Adiciona classe ao main content
        const mainContent = document.querySelector('main') || document.querySelector('.container') || document.body;
        if (mainContent && mainContent !== document.body) {
            mainContent.classList.add('main-content');
        }

        // Configura event listeners
        this.setupEventListeners();
        
        // Marca o link ativo
        this.setActiveLink();
    }

    setupEventListeners() {
        const menuButton = document.getElementById('menuButton');
        const closeSidebar = document.getElementById('closeSidebar');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');

        // Abre sidebar no mobile
        menuButton?.addEventListener('click', () => {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        });

        // Fecha sidebar
        const closeSidebarFunc = () => {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        };

        closeSidebar?.addEventListener('click', closeSidebarFunc);
        overlay?.addEventListener('click', closeSidebarFunc);

        // Fecha sidebar ao clicar em um link no mobile
        const sidebarLinks = document.querySelectorAll('.sidebar-link');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 1024) {
                    closeSidebarFunc();
                }
            });
        });

        // Fecha sidebar ao redimensionar para desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.add('hidden');
            }
        });
    }

    setActiveLink() {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll('.sidebar-link');
        
        links.forEach(link => {
            link.classList.remove('active');
            
            const href = link.getAttribute('href');
            if (href && currentPath.includes(href.split('/').pop())) {
                link.classList.add('active');
            }
        });
    }
}

// Inicialização automática
window.SidebarComponent = SidebarComponent; 