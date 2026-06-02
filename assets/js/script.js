// ALFTech Solar - Script Principal
// Desenvolvido com JavaScript Vanilla

// ==================== CONSTRUÇÃO DO HTML ====================

// Header/Menu
const headerHTML = `
<header class="fixed w-full top-0 z-50 bg-white shadow-md transition-all duration-300" id="header">
    <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <i class="fas fa-solar-panel text-3xl text-blue-600"></i>
                <span class="text-2xl font-bold text-gray-800">ALFTech <span class="text-amber-600">Solar</span></span>
            </div>
            
            <div class="hidden md:flex items-center space-x-8">
                <a href="#produtos" class="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">Produtos</a>
                <a href="#sobre" class="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">Sobre Nós</a>
                <a href="#projetos" class="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">Projetos</a>
                <a href="#depoimentos" class="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">Depoimentos</a>
                <a href="#faq" class="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">FAQ</a>
            </div>
            
            <div class="hidden md:flex items-center space-x-4">
                <a href="tel:+5517992218286" class="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-300">
                    <i class="fas fa-phone mr-2"></i>
                    <span class="font-semibold">(17) 99221-8286</span>
                </a>
                <a href="https://wa.me/5517992218286" target="_blank" class="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <i class="fab fa-whatsapp mr-2"></i>Fale Conosco
                </a>
            </div>
            
            <button class="md:hidden text-gray-700 text-2xl" id="mobile-menu-toggle">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        
        <div class="hidden md:hidden mt-4 pb-4 space-y-3" id="mobile-menu">
            <a href="#produtos" class="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2">Produtos</a>
            <a href="#sobre" class="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2">Sobre Nós</a>
            <a href="#projetos" class="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2">Projetos</a>
            <a href="#depoimentos" class="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2">Depoimentos</a>
            <a href="#faq" class="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2">FAQ</a>
            <a href="tel:+5517992218286" class="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2">
                <i class="fas fa-phone mr-2"></i>(17) 99221-8286
            </a>
            <a href="https://wa.me/5517992218286" target="_blank" class="block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:from-green-600 hover:to-green-700 transition-all duration-300">
                <i class="fab fa-whatsapp mr-2"></i>Fale Conosco
            </a>
        </div>
    </nav>
</header>
`;

// Hero Section
const heroHTML = `
<section class="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-yellow-50 gradient-animate">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6 fade-in">
                <h1 class="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                    Economize até <span class="text-green-600">85%</span> na sua conta de luz
                </h1>
                <p class="text-xl text-gray-600 leading-relaxed">
                    Invista em energia solar e transforme a luz do sol em economia real. Sustentabilidade e tecnologia de ponta para sua casa ou empresa.
                </p>
                
                <div class="space-y-3">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-check-circle text-green-600 text-xl"></i>
                        <span class="text-gray-700 font-medium">Instalação rápida e profissional</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-check-circle text-green-600 text-xl"></i>
                        <span class="text-gray-700 font-medium">Garantia de 25 anos nos painéis</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-check-circle text-green-600 text-xl"></i>
                        <span class="text-gray-700 font-medium">Financiamento facilitado</span>
                    </div>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href="#simulador" class="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl text-center pulse-animation">
                        <i class="fas fa-calculator mr-2"></i>Simular Economia
                    </a>
                    <a href="#projetos" class="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center border-2 border-gray-200">
                        <i class="fas fa-images mr-2"></i>Ver Projetos
                    </a>
                </div>
            </div>
            
            <div class="relative fade-in">
                <div class="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl float-animation">
                    <div class="bg-white rounded-2xl p-6 space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-gray-600 font-medium">Economia Mensal</span>
                            <i class="fas fa-chart-line text-green-600 text-2xl"></i>
                        </div>
                        <div class="text-4xl font-bold text-green-600">R$ 850,00</div>
                        <div class="flex items-center text-green-600 text-sm font-semibold">
                            <i class="fas fa-arrow-up mr-2"></i>
                            <span>85% de economia</span>
                        </div>
                        <div class="pt-4 border-t border-gray-200">
                            <div class="flex justify-between text-sm text-gray-600 mb-2">
                                <span>Antes</span>
                                <span>Depois</span>
                            </div>
                            <div class="flex gap-2">
                                <div class="flex-1 bg-red-100 h-8 rounded flex items-center justify-center text-red-600 font-bold text-xs">R$ 900</div>
                                <div class="flex-1 bg-green-100 h-8 rounded flex items-center justify-center text-green-600 font-bold text-xs">R$ 50</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
                <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400 rounded-full opacity-20 blur-xl"></div>
            </div>
        </div>
    </div>
</section>
`;

// Simulador
const simuladorHTML = `
<section id="simulador" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12 fade-in">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Calcule sua <span class="text-green-600">Economia</span>
                </h2>
                <p class="text-xl text-gray-600">
                    Descubra quanto você pode economizar com energia solar
                </p>
            </div>
            
            <div class="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl card-hover">
                <div class="space-y-8">
                    <div>
                        <label class="block text-gray-700 font-semibold mb-4 text-lg">
                            Média mensal de gasto com energia:
                        </label>
                        <div class="relative">
                            <input type="range" min="100" max="2000" value="500" step="50" id="energySlider" class="w-full">
                            <div class="flex justify-between text-sm text-gray-600 mt-2">
                                <span>R$ 100</span>
                                <span>R$ 2.000</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-2xl p-8 shadow-lg">
                        <div class="grid md:grid-cols-3 gap-6">
                            <div class="text-center">
                                <div class="text-gray-600 font-medium mb-2">Gasto Atual</div>
                                <div class="text-3xl font-bold text-red-600" id="currentCost">R$ 500</div>
                                <div class="text-sm text-gray-500 mt-1">por mês</div>
                            </div>
                            <div class="text-center">
                                <div class="text-gray-600 font-medium mb-2">Gasto com Solar</div>
                                <div class="text-3xl font-bold text-green-600" id="solarCost">R$ 25</div>
                                <div class="text-sm text-gray-500 mt-1">por mês</div>
                            </div>
                            <div class="text-center">
                                <div class="text-gray-600 font-medium mb-2">Economia Mensal</div>
                                <div class="text-3xl font-bold text-amber-600" id="savings">R$ 425</div>
                                <div class="text-sm text-gray-500 mt-1">85% de economia</div>
                            </div>
                        </div>
                        
                        <div class="mt-8 pt-6 border-t border-gray-200">
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-gray-700 font-semibold">Economia em 25 anos:</span>
                                <span class="text-2xl font-bold text-green-600" id="totalSavings">R$ 142.500</span>
                            </div>
                            <a href="https://wa.me/5517992218286" target="_blank" class="block w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                                <i class="fab fa-whatsapp mr-2"></i>Solicitar Orçamento Grátis
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

// Estatísticas
const statsHTML = `
<section class="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center transform hover:scale-110 transition-transform duration-300">
                <div class="text-5xl md:text-6xl font-bold mb-2">+10k</div>
                <div class="text-lg md:text-xl opacity-90">Projetos Instalados</div>
            </div>
            <div class="text-center transform hover:scale-110 transition-transform duration-300">
                <div class="text-5xl md:text-6xl font-bold mb-2">+100</div>
                <div class="text-lg md:text-xl opacity-90">Colaboradores</div>
            </div>
            <div class="text-center transform hover:scale-110 transition-transform duration-300">
                <div class="text-5xl md:text-6xl font-bold mb-2">25</div>
                <div class="text-lg md:text-xl opacity-90">Anos de Garantia</div>
            </div>
            <div class="text-center transform hover:scale-110 transition-transform duration-300">
                <div class="text-5xl md:text-6xl font-bold mb-2">85%</div>
                <div class="text-lg md:text-xl opacity-90">Economia Média</div>
            </div>
        </div>
    </div>
</section>
`;

// Sobre
const sobreHTML = `
<section id="sobre" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6 fade-in">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-800">
                    Sobre a <span class="text-green-600">ALFTech Solar</span>
                </h2>
                <p class="text-lg text-gray-600 leading-relaxed">
                    Somos líderes em soluções de energia solar no Brasil, com mais de 10 anos de experiência no mercado. Nossa missão é tornar a energia limpa acessível para todos, contribuindo para um futuro mais sustentável.
                </p>
                <p class="text-lg text-gray-600 leading-relaxed">
                    Com uma equipe de mais de 100 profissionais especializados, já instalamos mais de 10.000 sistemas fotovoltaicos em residências, empresas e propriedades rurais em todo o país.
                </p>
                <div class="grid grid-cols-2 gap-4 pt-4">
                    <div class="flex items-start space-x-3">
                        <i class="fas fa-award text-green-600 text-2xl mt-1"></i>
                        <div>
                            <div class="font-bold text-gray-800">Certificação Internacional</div>
                            <div class="text-sm text-gray-600">ISO 9001 e INMETRO</div>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <i class="fas fa-users text-green-600 text-2xl mt-1"></i>
                        <div>
                            <div class="font-bold text-gray-800">Equipe Especializada</div>
                            <div class="text-sm text-gray-600">Engenheiros certificados</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative fade-in">
                <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800" alt="Painéis Solares" class="rounded-3xl shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2">
                <div class="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl">
                    <div class="text-3xl font-bold">10+</div>
                    <div class="text-sm">Anos de Experiência</div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

// Continua no próximo arquivo...
document.addEventListener('DOMContentLoaded', function() {
    // Inserir HTML nas seções
    document.getElementById('header-container').innerHTML = headerHTML;
    document.getElementById('hero-container').innerHTML = heroHTML;
    document.getElementById('simulador-container').innerHTML = simuladorHTML;
    document.getElementById('stats-container').innerHTML = statsHTML;
    document.getElementById('sobre-container').innerHTML = sobreHTML;
    
    // Inicializar funcionalidades
    initMobileMenu();
    initSimulator();
    initScrollEffects();
});

// Made with Bob


// Produtos/Serviços
const produtosHTML = `
<section id="produtos" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16 fade-in">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Nossos <span class="text-green-600">Serviços</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                Soluções completas em energia solar para todos os tipos de necessidades
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-home text-green-600 text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Residencial</h3>
                <p class="text-gray-600 mb-6">
                    Sistemas fotovoltaicos personalizados para sua casa. Reduza sua conta de luz em até 85% e valorize seu imóvel.
                </p>
                <ul class="space-y-2 mb-6">
                    <li class="flex items-center text-gray-700">
                        <i class="fas fa-check text-green-600 mr-2"></i>
                        Projeto personalizado
                    </li>
                    <li class="flex items-center text-gray-700">
                        <i class="fas fa-check text-green-600 mr-2"></i>
                        Instalação em 1 dia
                    </li>
                    <li class="flex items-center text-gray-700">
                        <i class="fas fa-check text-green-600 mr-2"></i>
                        Monitoramento remoto
                    </li>
                </ul>
                <a href="https://wa.me/5517992218286" class="block text-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300">
                    Saiba Mais
                </a>
            </div>
            
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-building text-blue-600 text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Empresarial</h3>
                <p class="text-gray-600 mb-6">
                    Soluções de grande porte para empresas. Reduza custos operacionais e demonstre compromisso com a sustentabilidade.
                </p>
                <ul class="space-y-2 mb-6">
                    <li class="flex items-center text-gray-700">
                        <i class="fas fa-check text-blue-600 mr-2"></i>
                        Análise de viabilidade
                    </li>
                    <li class="flex items-center text-gray-700">
                        <i class="fas fa-check text-blue-600 mr-2"></i>
                        ROI garantido
                    </li>
                    <li class="flex items-center text-gray-700">
                        <i class="fas fa-check text-blue-600 mr-2"></i>
                        Manutenção preventiva
                    </li>
                </ul>
                <a href="https://wa.me/5517992218286" class="block text-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Saiba Mais
                </a>
            </div>
            
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
                <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-tractor text-amber-600 text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Rural</h3>
                <p class="text-gray-600 mb-6">
                    Energia solar para propriedades rurais. Ideal para irrigação, cercas elétricas e bombeamento de água.
                </p>
                <ul class="space-y-2 mb-6">
                    <li class="flex items-center text-gray-700">
                        <i class="fas fa-check text-amber-600 mr-2"></i>
                        Sistemas off-grid
                    </li>
                    <li class="flex items-center text-gray-700">
                        <i class="fas fa-check text-amber-600 mr-2"></i>
                        Bombeamento solar
                    </li>
                    <li class="flex items-center text-gray-700">
                        <i class="fas fa-check text-amber-600 mr-2"></i>
                        Autonomia energética
                    </li>
                </ul>
                <a href="https://wa.me/5517992218286" class="block text-center bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-300">
                    Saiba Mais
                </a>
            </div>
        </div>
    </div>
</section>
`;

// Projetos
const projetosHTML = `
<section id="projetos" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16 fade-in">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Projetos <span class="text-green-600">Realizados</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                Confira alguns dos nossos projetos de sucesso em todo o Brasil
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600" alt="Projeto Residencial" class="w-full h-80 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-2xl font-bold mb-2">Residência - São Paulo</h3>
                        <p class="mb-4">Sistema de 10kWp - Economia de R$ 850/mês</p>
                        <div class="flex items-center space-x-4">
                            <span class="bg-green-600 px-3 py-1 rounded-full text-sm">Residencial</span>
                            <span class="text-sm">2024</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <img src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600" alt="Projeto Empresarial" class="w-full h-80 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-2xl font-bold mb-2">Indústria - Campinas</h3>
                        <p class="mb-4">Sistema de 150kWp - Economia de R$ 12.000/mês</p>
                        <div class="flex items-center space-x-4">
                            <span class="bg-blue-600 px-3 py-1 rounded-full text-sm">Empresarial</span>
                            <span class="text-sm">2024</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600" alt="Projeto Rural" class="w-full h-80 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-2xl font-bold mb-2">Fazenda - Ribeirão Preto</h3>
                        <p class="mb-4">Sistema de 50kWp - Bombeamento solar</p>
                        <div class="flex items-center space-x-4">
                            <span class="bg-amber-600 px-3 py-1 rounded-full text-sm">Rural</span>
                            <span class="text-sm">2024</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <img src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600" alt="Projeto Residencial 2" class="w-full h-80 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-2xl font-bold mb-2">Condomínio - Rio de Janeiro</h3>
                        <p class="mb-4">Sistema de 80kWp - 45 unidades</p>
                        <div class="flex items-center space-x-4">
                            <span class="bg-green-600 px-3 py-1 rounded-full text-sm">Residencial</span>
                            <span class="text-sm">2024</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600" alt="Projeto Empresarial 2" class="w-full h-80 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-2xl font-bold mb-2">Shopping - Belo Horizonte</h3>
                        <p class="mb-4">Sistema de 300kWp - Economia de R$ 25.000/mês</p>
                        <div class="flex items-center space-x-4">
                            <span class="bg-blue-600 px-3 py-1 rounded-full text-sm">Empresarial</span>
                            <span class="text-sm">2023</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600" alt="Projeto Rural 2" class="w-full h-80 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-2xl font-bold mb-2">Agronegócio - Goiânia</h3>
                        <p class="mb-4">Sistema de 200kWp - Irrigação automatizada</p>
                        <div class="flex items-center space-x-4">
                            <span class="bg-amber-600 px-3 py-1 rounded-full text-sm">Rural</span>
                            <span class="text-sm">2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

// Depoimentos
const depoimentosHTML = `
<section id="depoimentos" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16 fade-in">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                O que nossos <span class="text-green-600">Clientes</span> dizem
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                Mais de 10.000 clientes satisfeitos em todo o Brasil
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
                <div class="flex items-center mb-4">
                    <div class="flex text-yellow-400 text-xl">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <p class="text-gray-600 mb-6 italic">
                    "Instalei o sistema solar há 6 meses e minha conta de luz caiu de R$ 800 para R$ 40! O investimento já está se pagando. Equipe muito profissional e atenciosa."
                </p>
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <i class="fas fa-user text-green-600 text-xl"></i>
                    </div>
                    <div>
                        <div class="font-bold text-gray-800">Maria Silva</div>
                        <div class="text-sm text-gray-600">São Paulo, SP</div>
                    </div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-200">
                    <button class="flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-300">
                        <i class="fas fa-play-circle mr-2 text-2xl"></i>
                        <span>Assistir depoimento</span>
                    </button>
                </div>
            </div>
            
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
                <div class="flex items-center mb-4">
                    <div class="flex text-yellow-400 text-xl">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <p class="text-gray-600 mb-6 italic">
                    "Como empresário, a economia com energia solar foi fundamental para reduzir custos. A ALFTech Solar entregou tudo no prazo e com qualidade excepcional."
                </p>
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <i class="fas fa-user text-blue-600 text-xl"></i>
                    </div>
                    <div>
                        <div class="font-bold text-gray-800">João Santos</div>
                        <div class="text-sm text-gray-600">Campinas, SP</div>
                    </div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-200">
                    <button class="flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-300">
                        <i class="fas fa-play-circle mr-2 text-2xl"></i>
                        <span>Assistir depoimento</span>
                    </button>
                </div>
            </div>
            
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
                <div class="flex items-center mb-4">
                    <div class="flex text-yellow-400 text-xl">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <p class="text-gray-600 mb-6 italic">
                    "Na fazenda, o sistema solar revolucionou nossa operação. Agora temos energia limpa e barata para irrigação. Recomendo muito a ALFTech Solar!"
                </p>
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                        <i class="fas fa-user text-amber-600 text-xl"></i>
                    </div>
                    <div>
                        <div class="font-bold text-gray-800">Carlos Oliveira</div>
                        <div class="text-sm text-gray-600">Ribeirão Preto, SP</div>
                    </div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-200">
                    <button class="flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-300">
                        <i class="fas fa-play-circle mr-2 text-2xl"></i>
                        <span>Assistir depoimento</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
`;

// FAQ
const faqHTML = `
<section id="faq" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16 fade-in">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Perguntas <span class="text-green-600">Frequentes</span>
                </h2>
                <p class="text-xl text-gray-600">
                    Tire suas dúvidas sobre energia solar
                </p>
            </div>
            
            <div class="space-y-4">
                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <button class="faq-question w-full text-left p-6 flex items-center justify-between hover:bg-gray-100 transition-colors duration-300">
                        <span class="text-lg font-semibold text-gray-800">Como funciona a energia solar?</span>
                        <i class="fas fa-plus text-green-600 text-xl faq-icon transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer hidden p-6 pt-0">
                        <p class="text-gray-600 leading-relaxed">
                            Os painéis solares captam a luz do sol e a convertem em energia elétrica através de células fotovoltaicas. Essa energia é então convertida de corrente contínua (CC) para corrente alternada (CA) por um inversor, tornando-a compatível com os aparelhos da sua casa ou empresa. O excedente de energia pode ser injetado na rede elétrica, gerando créditos que reduzem sua conta de luz.
                        </p>
                    </div>
                </div>
                
                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <button class="faq-question w-full text-left p-6 flex items-center justify-between hover:bg-gray-100 transition-colors duration-300">
                        <span class="text-lg font-semibold text-gray-800">Quanto tempo dura um sistema solar?</span>
                        <i class="fas fa-plus text-green-600 text-xl faq-icon transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer hidden p-6 pt-0">
                        <p class="text-gray-600 leading-relaxed">
                            Os painéis solares têm garantia de 25 anos e vida útil de mais de 30 anos. Os inversores têm garantia de 5 a 10 anos. Com manutenção adequada, seu sistema solar pode gerar energia limpa por décadas, proporcionando economia contínua na sua conta de luz.
                        </p>
                    </div>
                </div>
                
                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <button class="faq-question w-full text-left p-6 flex items-center justify-between hover:bg-gray-100 transition-colors duration-300">
                        <span class="text-lg font-semibold text-gray-800">Qual é o retorno do investimento?</span>
                        <i class="fas fa-plus text-green-600 text-xl faq-icon transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer hidden p-6 pt-0">
                        <p class="text-gray-600 leading-relaxed">
                            O retorno do investimento (ROI) varia entre 3 a 7 anos, dependendo do consumo de energia e da região. Após esse período, toda a economia gerada é lucro líquido. Com a vida útil de 25+ anos, você terá décadas de energia praticamente gratuita, resultando em economia de centenas de milhares de reais.
                        </p>
                    </div>
                </div>
                
                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <button class="faq-question w-full text-left p-6 flex items-center justify-between hover:bg-gray-100 transition-colors duration-300">
                        <span class="text-lg font-semibold text-gray-800">Funciona em dias nublados ou chuvosos?</span>
                        <i class="fas fa-plus text-green-600 text-xl faq-icon transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer hidden p-6 pt-0">
                        <p class="text-gray-600 leading-relaxed">
                            Sim! Os painéis solares funcionam mesmo em dias nublados, embora com eficiência reduzida (cerca de 10-25% da capacidade). O sistema é dimensionado considerando as variações climáticas da sua região. Além disso, você permanece conectado à rede elétrica, garantindo fornecimento contínuo de energia.
                        </p>
                    </div>
                </div>
                
                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <button class="faq-question w-full text-left p-6 flex items-center justify-between hover:bg-gray-100 transition-colors duration-300">
                        <span class="text-lg font-semibold text-gray-800">Preciso de manutenção?</span>
                        <i class="fas fa-plus text-green-600 text-xl faq-icon transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer hidden p-6 pt-0">
                        <p class="text-gray-600 leading-relaxed">
                            A manutenção é mínima. Recomenda-se limpeza dos painéis a cada 6 meses (ou quando necessário) e inspeção anual do sistema. A chuva já faz boa parte da limpeza naturalmente. Oferecemos planos de manutenção preventiva para garantir a máxima eficiência do seu sistema ao longo dos anos.
                        </p>
                    </div>
                </div>
                
                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <button class="faq-question w-full text-left p-6 flex items-center justify-between hover:bg-gray-100 transition-colors duration-300">
                        <span class="text-lg font-semibold text-gray-800">Posso financiar o sistema solar?</span>
                        <i class="fas fa-plus text-green-600 text-xl faq-icon transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer hidden p-6 pt-0">
                        <p class="text-gray-600 leading-relaxed">
                            Sim! Trabalhamos com diversas linhas de financiamento com taxas especiais para energia solar. Em muitos casos, a parcela do financiamento é menor que a economia na conta de luz, ou seja, você começa a economizar desde o primeiro mês. Entre em contato para conhecer as melhores condições.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

// Footer
const footerHTML = `
<footer class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-12 mb-12">
            <div>
                <div class="flex items-center space-x-3 mb-6">
                    <i class="fas fa-solar-panel text-3xl text-blue-400"></i>
                    <span class="text-2xl font-bold">ALFTech <span class="text-amber-400">Solar</span></span>
                </div>
                <p class="text-gray-400 mb-6">
                    Transformando luz solar em economia e sustentabilidade para o seu futuro.
                </p>
                <div class="flex space-x-4">
                    <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
            
            <div>
                <h3 class="text-xl font-bold mb-6">Serviços</h3>
                <ul class="space-y-3">
                    <li><a href="#produtos" class="text-gray-400 hover:text-green-400 transition-colors duration-300">Energia Solar Residencial</a></li>
                    <li><a href="#produtos" class="text-gray-400 hover:text-green-400 transition-colors duration-300">Energia Solar Empresarial</a></li>
                    <li><a href="#produtos" class="text-gray-400 hover:text-green-400 transition-colors duration-300">Energia Solar Rural</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors duration-300">Manutenção</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors duration-300">Consultoria</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-xl font-bold mb-6">Empresa</h3>
                <ul class="space-y-3">
                    <li><a href="#sobre" class="text-gray-400 hover:text-green-400 transition-colors duration-300">Sobre Nós</a></li>
                    <li><a href="#projetos" class="text-gray-400 hover:text-green-400 transition-colors duration-300">Projetos</a></li>
                    <li><a href="#depoimentos" class="text-gray-400 hover:text-green-400 transition-colors duration-300">Depoimentos</a></li>
                    <li><a href="#faq" class="text-gray-400 hover:text-green-400 transition-colors duration-300">FAQ</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors duration-300">Blog</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-xl font-bold mb-6">Contato</h3>
                <ul class="space-y-4">
                    <li class="flex items-start space-x-3">
                        <i class="fas fa-map-marker-alt text-green-400 mt-1"></i>
                        <span class="text-gray-400">R Cel Spinola de Castro, 3676<br>São José do Rio Preto, SP</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <i class="fas fa-phone text-green-400"></i>
                        <a href="tel:+5517992218286" class="text-gray-400 hover:text-green-400 transition-colors duration-300">(17) 99221-8286</a>
                    </li>
                    <li class="flex items-center space-x-3">
                        <i class="fas fa-envelope text-green-400"></i>
                        <a href="mailto:luizfer_don@hotmail.com" class="text-gray-400 hover:text-green-400 transition-colors duration-300">luizfer_don@hotmail.com</a>
                    </li>
                    <li class="flex items-center space-x-3">
                        <i class="fab fa-whatsapp text-green-400"></i>
                        <a href="https://wa.me/5517992218286" class="text-gray-400 hover:text-green-400 transition-colors duration-300">WhatsApp</a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 text-sm mb-4 md:mb-0">
                    © 2024 ALFTech Solar. Todos os direitos reservados. | CNPJ: 53.741.456/0001-79
                </p>
                <div class="flex space-x-6 text-sm">
                    <a href="#" class="text-gray-400 hover:text-green-400 transition-colors duration-300">Política de Privacidade</a>
                    <a href="#" class="text-gray-400 hover:text-green-400 transition-colors duration-300">Termos de Uso</a>
                </div>
            </div>
        </div>
    </div>
</footer>
`;

// ==================== FUNÇÕES DE INTERATIVIDADE ====================

// Menu Mobile
function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const icon = toggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        // Fechar menu ao clicar em um link
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                const icon = toggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// Simulador de Economia
function initSimulator() {
    const slider = document.getElementById('energySlider');
    const currentCost = document.getElementById('currentCost');
    const solarCost = document.getElementById('solarCost');
    const savings = document.getElementById('savings');
    const totalSavings = document.getElementById('totalSavings');
    
    if (slider) {
        slider.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            const solar = Math.round(value * 0.15); // 15% do valor atual (85% de economia)
            const saving = value - solar;
            const total = saving * 12 * 25; // 25 anos
            
            currentCost.textContent = `R$ ${value}`;
            solarCost.textContent = `R$ ${solar}`;
            savings.textContent = `R$ ${saving}`;
            totalSavings.textContent = `R$ ${total.toLocaleString('pt-BR')}`;
        });
    }
}

// FAQ Accordion
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.faq-icon');
            
            // Fechar outras respostas
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer) {
                    item.classList.add('hidden');
                    item.previousElementSibling.querySelector('.faq-icon').classList.remove('fa-minus');
                    item.previousElementSibling.querySelector('.faq-icon').classList.add('fa-plus');
                }
            });
            
            // Toggle resposta atual
            answer.classList.toggle('hidden');
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
        });
    });
}

// Efeitos de Scroll
function initScrollEffects() {
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('shadow-xl');
        } else {
            header.classList.remove('shadow-xl');
        }
    });
    
    // Fade in on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Inserir HTML nas seções
    document.getElementById('header-container').innerHTML = headerHTML;
    document.getElementById('hero-container').innerHTML = heroHTML;
    document.getElementById('simulador-container').innerHTML = simuladorHTML;
    document.getElementById('stats-container').innerHTML = statsHTML;
    document.getElementById('sobre-container').innerHTML = sobreHTML;
    document.getElementById('produtos-container').innerHTML = produtosHTML;
    document.getElementById('projetos-container').innerHTML = projetosHTML;
    document.getElementById('depoimentos-container').innerHTML = depoimentosHTML;
    document.getElementById('faq-container').innerHTML = faqHTML;
    document.getElementById('footer-container').innerHTML = footerHTML;
    
    // Inicializar funcionalidades
    setTimeout(() => {
        initMobileMenu();
        initSimulator();
        initFAQ();
        initScrollEffects();
    }, 100);
});
