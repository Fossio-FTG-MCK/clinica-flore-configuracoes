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
                return '../../'; // Para páginas em /pages/area-do-cliente/ ou /pages/admin/
            }
        }
        return './'; // Para página raiz
    }

    generateSidebarHTML() {
        const basePath = this.detectBasePath();
        
        return `
            <!-- Sidebar -->
            <div id="sidebar">
                <div class="flex items-center justify-between h-16 px-6 border-b border-gray-200 flex-shrink-0">
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

                <nav class="flex-1 mt-6 px-6 overflow-y-auto">
                    <div class="space-y-2">
                        <!-- Início -->
                        <a href="${basePath}" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="dashboard">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
                            </svg>
                            <span class="font-medium">Início</span>
                        </a>

                        <!-- Briefing -->
                        <a href="${basePath}pages/briefing/" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="briefing">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            <span class="font-medium">Briefing Florê</span>
                        </a>

                        <!-- Área do Cliente -->
                        <a href="${basePath}pages/area-do-cliente/" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="area-do-cliente">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            <span class="font-medium">Área do Cliente</span>
                        </a>

                        <!-- Relatórios -->
                        <a href="${basePath}pages/relatorios/" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="relatorios">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                            <span class="font-medium">Relatórios</span>
                        </a>

                        <!-- Painel Administrativo - OCULTO 
                        <a href="${basePath}pages/admin/dashboard.html" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="admin">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                            <span class="font-medium">Painel Admin</span>
                        </a>
                        -->

                        <!-- Divisor -->
                        <div class="border-t border-gray-200 my-4"></div>

                        <!-- Documentação -->
                        <div class="pb-2">
                            <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Documentação</h3>
                        </div>

                        <!-- Google Ads -->
                        <a href="${basePath}pages/documentacao/google/" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="google-config">
                            <svg class="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span class="font-medium">Google Ads</span>
                        </a>

                        <!-- Meta Ads -->
                        <a href="${basePath}pages/documentacao/facebook/" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="facebook-config">
                            <svg class="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#0866ff" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span class="font-medium">Meta Ads</span>
                        </a>

                        <!-- Guia de Criativos -->
                        <a href="${basePath}pages/documentacao/guia-criativos/" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="guia-criativos">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2V3z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.2 15.9l.8-4.4-2.1-4.2-4.4-.8-4.2 2.1-.8 4.4 2.1 4.2 4.4.8 4.2-2.1z"></path>
                            </svg>
                            <span class="font-medium">Guia de Criativos</span>
                        </a>

                        <!-- Guia para Gravar -->
                        <a href="${basePath}pages/documentacao/guia-para-gravar/" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="guia-para-gravar">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                            <span class="font-medium">Guia para Gravar</span>
                        </a>

                        <!-- Divisor -->
                        <div class="border-t border-gray-200 my-4"></div>

                        <!-- Configurações -->
                        <div class="pb-2">
                            <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Configurações</h3>
                        </div>

                        <!-- Ferramentas de Marketing -->
                        <a href="${basePath}pages/ferramentas/" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors sidebar-link" data-page="ferramentas">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span class="font-medium">Ferramentas</span>
                        </a>

                        <!-- Pagamentos -->
                        <button id="perfilGestor" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors w-full text-left">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                            </svg>
                            <span class="font-medium">Pagamentos</span>
                        </button>
                    </div>

                </nav>
                
                <!-- Footer do Sidebar -->
                <div class="flex-shrink-0 pt-4 border-t border-gray-200 bg-gray-50">
                    <div class="px-6 py-4 text-center">
                        <p class="text-xs text-gray-500 mb-1">Sistema de Gestão</p>
                        <p class="text-xs font-medium text-gray-700">Clínica Florê</p>
                        <div class="mt-2 pt-2 border-t border-gray-200">
                            <p class="text-xs text-gray-500">v2.0 - 2025</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Overlay para mobile -->
            <div id="sidebarOverlay" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

            <!-- Botão menu mobile -->
            <button id="menuButton" class="fixed top-4 left-4 z-50 lg:hidden p-2 bg-white rounded-lg shadow-lg border border-gray-200" style="z-index: 1001;">
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            <!-- Sidebar do Perfil do Gestor -->
            <div id="perfilOverlay" class="fixed inset-0 bg-black bg-opacity-50 z-60 hidden transition-opacity duration-300"></div>
            <div id="perfilSidebar" class="fixed top-0 right-0 h-full w-[80%] max-w-[400px] lg:max-w-[400px] bg-white shadow-2xl z-70 transform translate-x-full transition-transform duration-300 ease-in-out overflow-y-auto">
                    <!-- Header do Sidebar -->
                    <div class="bg-[#84a98c] text-white p-6 sticky top-0 z-10">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold">Perfil do Gestor</h3>
                                    <p class="text-sm opacity-90">Informações & Pagamento</p>
                                </div>
                            </div>
                            <button id="fecharPerfil" class="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Conteúdo do Sidebar -->
                    <div class="p-6 space-y-6 pb-20">
                        <!-- Informações do Gestor -->
                        <div class="bg-gray-50 rounded-lg p-4">
                            <h4 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <svg class="w-5 h-5 text-[#84a98c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Informações do Gestor
                            </h4>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Nome:</span>
                                    <span class="font-medium">Marcelo Fruck</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Função:</span>
                                    <span class="font-medium">Gestor de Tráfego</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Telefone:</span>
                                    <span class="font-medium">(51) 99305-3612</span>
                                </div>
                            </div>
                        </div>

                        <!-- Informações do Contrato -->
                        <div class="bg-blue-50 rounded-lg p-4">
                            <h4 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                Contrato de Serviços
                            </h4>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Valor Mensal:</span>
                                    <span class="font-bold text-lg text-blue-600">R$ 300,00</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Status:</span>
                                    <span class="inline-flex px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                                        Pendente
                                    </span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Vencimento:</span>
                                    <span class="font-medium">A combinar</span>
                                </div>
                            </div>
                        </div>

                        <!-- Pagamento via PIX -->
                        <div class="bg-green-50 rounded-lg p-4">
                            <h4 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                                </svg>
                                Pagamento via PIX
                            </h4>
                            <div class="text-center space-y-3">
                                <div class="bg-white p-3 rounded-lg border-2 border-dashed border-gray-300">
                                    <p class="text-xs text-gray-600 mb-2">Código PIX - Copie e cole:</p>
                                    <div class="bg-gray-100 p-2 rounded text-xs font-mono break-all text-gray-800 max-h-24 overflow-y-auto">
                                        00020126900014BR.GOV.BCB.PIX0136af2214e4-5095-4fb8-8602-eec896ec1b5d0228Gestão de contas de anúncios5204000053039865406300.005802BR5913Marcelo Fruck6009SAO PAULO62140510rBdRg9Yv6p630440C9
                                    </div>
                                </div>
                                <button id="copiarPix" class="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                    </svg>
                                    Copiar Código PIX
                                </button>
                                <p class="text-xs text-gray-500">
                                    Após o pagamento, entre em contato para confirmação
                                </p>
                            </div>
                        </div>

                        <!-- Contato -->
                        <div class="bg-gray-50 rounded-lg p-4">
                            <h4 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <svg class="w-5 h-5 text-[#84a98c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                                Contato Direto
                            </h4>
                            <div class="flex gap-2">
                                <a href="https://wa.me/5551993053612" target="_blank" class="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                    </svg>
                                    WhatsApp
                                </a>
                                <a href="tel:+5551993053612" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    Ligar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateSidebarCSS() {
        return `
            <style>
                /* Sidebar sempre fixo */
                #sidebar {
                    position: fixed !important;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 16rem; /* 256px */
                    z-index: 1000 !important; /* Z-index alto para evitar sobreposição */
                    background-color: white;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    transform: translateX(-100%);
                    transition: transform 0.3s ease-in-out;
                    display: flex;
                    flex-direction: column;
                    border-right: 1px solid #e5e7eb; /* Borda para separar melhor */
                }

                /* Sidebar visível no desktop */
                @media (min-width: 1024px) {
                    #sidebar {
                        transform: translateX(0);
                    }
                }

                /* Sidebar Styles */
                .sidebar-link.active {
                    background-color: #84a98c;
                    color: white;
                }
                
                .sidebar-link.active svg {
                    color: white;
                }

                /* Ajuste para conteúdo principal - deixa o CSS da página controlar */
                /* Removido o !important para evitar conflitos */

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

                /* Overlay apenas no mobile */
                #sidebarOverlay {
                    display: none;
                }

                @media (max-width: 1023px) {
                    #sidebarOverlay.show {
                        display: block;
                    }
                }

                /* Sidebar do Perfil */
                #perfilSidebar {
                    z-index: 9999;
                }

                #perfilOverlay {
                    z-index: 9998;
                }

                #perfilOverlay.show {
                    opacity: 1;
                }

                #perfilSidebar.open {
                    transform: translateX(0);
                }

                /* Responsivo para o sidebar do perfil */
                @media (min-width: 1024px) {
                    #perfilSidebar {
                        width: 400px !important;
                        max-width: 400px !important;
                    }
                }
                
                @media (max-width: 1023px) and (min-width: 481px) {
                    #perfilSidebar {
                        width: 80% !important;
                        max-width: 80% !important;
                    }
                }
                
                @media (max-width: 480px) {
                    #perfilSidebar {
                        width: 80% !important;
                        max-width: 80% !important;
                    }
                }

                /* Garantir que o body não tenha overflow horizontal */
                body {
                    overflow-x: hidden;
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
            sidebar.style.transform = 'translateX(0)';
            overlay.classList.add('show');
        });

        // Fecha sidebar
        const closeSidebarFunc = () => {
            if (window.innerWidth < 1024) {
                sidebar.style.transform = 'translateX(-100%)';
                overlay.classList.remove('show');
            }
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

        // Controla sidebar no redimensionamento
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                // Desktop: sidebar sempre visível
                sidebar.style.transform = 'translateX(0)';
                overlay.classList.remove('show');
            } else {
                // Mobile: sidebar escondido por padrão
                sidebar.style.transform = 'translateX(-100%)';
                overlay.classList.remove('show');
            }
        });

        // Garantir estado inicial correto
        if (window.innerWidth >= 1024) {
            sidebar.style.transform = 'translateX(0)';
            overlay.classList.remove('show');
        } else {
            sidebar.style.transform = 'translateX(-100%)';
            overlay.classList.remove('show');
        }

        // Event listeners para o sidebar do perfil
        const perfilGestor = document.getElementById('perfilGestor');
        const perfilSidebar = document.getElementById('perfilSidebar');
        const perfilOverlay = document.getElementById('perfilOverlay');
        const fecharPerfil = document.getElementById('fecharPerfil');
        const copiarPix = document.getElementById('copiarPix');

        // Abrir sidebar do perfil
        perfilGestor?.addEventListener('click', () => {
            perfilOverlay.classList.remove('hidden');
            perfilSidebar.classList.add('open');
            perfilOverlay.classList.add('show');
            document.body.style.overflow = 'hidden'; // Impede scroll da página
        });

        // Fechar sidebar
        const fecharPerfilFunc = () => {
            perfilSidebar.classList.remove('open');
            perfilOverlay.classList.remove('show');
            
            // Aguarda a animação terminar antes de esconder o overlay
            setTimeout(() => {
                perfilOverlay.classList.add('hidden');
            }, 300);
            
            document.body.style.overflow = ''; // Restaura scroll da página
        };

        fecharPerfil?.addEventListener('click', fecharPerfilFunc);

        // Fechar sidebar clicando no overlay
        perfilOverlay?.addEventListener('click', fecharPerfilFunc);

        // Copiar código PIX
        copiarPix?.addEventListener('click', async () => {
            const pixCode = '00020126900014BR.GOV.BCB.PIX0136af2214e4-5095-4fb8-8602-eec896ec1b5d0228Gestão de contas de anúncios5204000053039865406300.005802BR5913Marcelo Fruck6009SAO PAULO62140510rBdRg9Yv6p630440C9';
            
            try {
                await navigator.clipboard.writeText(pixCode);
                
                // Feedback visual
                const originalText = copiarPix.innerHTML;
                copiarPix.innerHTML = `
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Copiado!
                `;
                copiarPix.classList.remove('bg-green-600', 'hover:bg-green-700');
                copiarPix.classList.add('bg-green-700');
                
                setTimeout(() => {
                    copiarPix.innerHTML = originalText;
                    copiarPix.classList.add('bg-green-600', 'hover:bg-green-700');
                    copiarPix.classList.remove('bg-green-700');
                }, 2000);
                
            } catch (err) {
                console.error('Erro ao copiar PIX:', err);
                alert('Código PIX copiado! Cole no seu app de pagamentos.');
            }
        });

        // Fechar sidebar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && perfilSidebar.classList.contains('open')) {
                fecharPerfilFunc();
            }
        });
    }

    setActiveLink() {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll('.sidebar-link');
        
        // Remove active de todos os links primeiro
        links.forEach(link => {
            link.classList.remove('active');
        });
        
        // Busca correspondência exata ou por caminho específico
        let activeLink = null;
        
        // Verifica se está na página inicial primeiro (prioridade máxima)
        if (currentPath === '/' || currentPath.includes('index.html') || currentPath === '/index.html') {
            links.forEach(link => {
                const dataPage = link.getAttribute('data-page');
                if (dataPage === 'dashboard') {
                    activeLink = link;
                    return;
                }
            });
            
            // Se encontrou o link do dashboard, aplica e retorna
            if (activeLink) {
                activeLink.classList.add('active');
                return;
            }
        }
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;
            
            // Normaliza os caminhos removendo './' e '../'
            const normalizedHref = href.replace(/^(\.\.\/|\.\/)+/, '');
            const normalizedCurrentPath = currentPath.replace(/^\/+/, '');
            
            // Verifica correspondência exata primeiro
            if (normalizedCurrentPath === normalizedHref) {
                activeLink = link;
                return;
            }
            
            // Verifica se o caminho atual termina com o href normalizado
            if (normalizedCurrentPath.endsWith(normalizedHref)) {
                activeLink = link;
                return;
            }
            
            // Verificações específicas para cada página
            if (currentPath.includes('/pages/documentacao/google/') && href.includes('google/')) {
                activeLink = link;
            } else if (currentPath.includes('/pages/documentacao/facebook/') && href.includes('facebook/')) {
                activeLink = link;
            } else if (currentPath.includes('/pages/documentacao/guia-criativos/') && href.includes('guia-criativos/')) {
                activeLink = link;
            } else if (currentPath.includes('/pages/documentacao/guia-para-gravar/') && href.includes('guia-para-gravar/')) {
                activeLink = link;
            } else if (currentPath.includes('/pages/ferramentas/') && href.includes('ferramentas/')) {
                activeLink = link;
            } else if (currentPath.includes('/pages/briefing/') && href.includes('briefing/')) {
                activeLink = link;
            } else if (currentPath.includes('/pages/area-do-cliente/') && href.includes('area-do-cliente/')) {
                activeLink = link;
            } else if (currentPath.includes('/pages/relatorios/') && href.includes('relatorios/')) {
                activeLink = link;
            } else if (currentPath.includes('/pages/admin/') && href.includes('admin/')) {
                activeLink = link;
            }
        });
        
        // Aplica a classe active apenas no link correto
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

// Exporta o componente apenas se não existir
if (typeof window.SidebarComponent === 'undefined') {
    window.SidebarComponent = SidebarComponent;
} 