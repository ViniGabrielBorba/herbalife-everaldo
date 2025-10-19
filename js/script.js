// ========================================
// HERBALIFE - JAVASCRIPT FUNCIONAL
// ========================================

// Produtos da Herbalife
const products = [
    {
        id: 1,
        name: "Fórmula 1 - Shake Nutritivo",
        category: "shake",
        price: 89.90,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        description: "Shake nutritivo com proteína de soja, vitaminas e minerais essenciais."
    },
    {
        id: 2,
        name: "Chá Concentrado",
        category: "tea",
        price: 45.90,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&crop=center",
        description: "Chá concentrado com extratos naturais para energia e bem-estar."
    },
    {
        id: 3,
        name: "Multivitamínico",
        category: "vitamin",
        price: 67.50,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&crop=center",
        description: "Complexo vitamínico completo para suporte nutricional diário."
    },
    {
        id: 4,
        name: "Barra de Proteína",
        category: "snack",
        price: 12.90,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center",
        description: "Barra nutritiva com proteína e fibras para lanches saudáveis."
    },
    {
        id: 5,
        name: "Fórmula 2 - Multivitamínico",
        category: "vitamin",
        price: 78.90,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
        description: "Multivitamínico com minerais essenciais para saúde geral."
    },
    {
        id: 6,
        name: "Chá Verde",
        category: "tea",
        price: 38.90,
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop&crop=center",
        description: "Chá verde natural com antioxidantes para bem-estar."
    },
    {
        id: 7,
        name: "Proteína em Pó",
        category: "shake",
        price: 95.90,
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=300&fit=crop&crop=center",
        description: "Proteína isolada de alta qualidade para recuperação muscular."
    },
    {
        id: 8,
        name: "Mix de Frutas",
        category: "snack",
        price: 25.90,
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop&crop=center",
        description: "Mix de frutas desidratadas para lanches nutritivos."
    },
    {
        id: 9,
        name: "Óleo de Peixe",
        category: "vitamin",
        price: 52.90,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&crop=center",
        description: "Suplemento de ômega-3 para saúde cardiovascular."
    },
    {
        id: 10,
        name: "Chá de Hibisco",
        category: "tea",
        price: 32.90,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&crop=center",
        description: "Chá de hibisco natural para hidratação e bem-estar."
    }
];

// Carrinho de compras
let cart = [];

// Elementos DOM
let productsGrid;
let cartModal;
let cartItems;
let cartTotal;
let cartCount;
let filterButtons;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    renderProducts();
    setupEventListeners();
    updateCartUI();
});

function initializeElements() {
    productsGrid = document.getElementById('productsGrid');
    cartModal = document.getElementById('cartModal');
    cartItems = document.getElementById('cartItems');
    cartTotal = document.getElementById('cartTotal');
    cartCount = document.querySelector('.cart-count');
    filterButtons = document.querySelectorAll('.filter-btn');
}

function renderProducts(filter = 'all') {
    if (!productsGrid) return;

    // Verificar se já existem produtos estáticos
    const existingProducts = productsGrid.querySelectorAll('.product-card');
    if (existingProducts.length > 0) {
        return; // Não sobrescrever produtos estáticos
    }

    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);

    productsGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <div class="product-category">${getCategoryName(product.category)}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i>
                Adicionar ao Carrinho
            </button>
        </div>
    `;
    return card;
}

function getCategoryName(category) {
    const categories = {
        'shake': 'Shakes',
        'tea': 'Chás',
        'vitamin': 'Vitaminas',
        'snack': 'Lanches'
    };
    return categories[category] || category;
}

function setupEventListeners() {
    // Filtros de produtos
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Atualizar botões ativos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar produtos
            renderProducts(filter);
        });
    });

    // Carrinho
    const cartBtn = document.getElementById('cartBtn');
    const cartClose = document.querySelector('.cart-close');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }

    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    // Fechar carrinho ao clicar no overlay
    const cartOverlay = document.querySelector('.cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }

    // Menu mobile
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.querySelector('.nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        });

        // Fechar menu ao clicar fora dele
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    }

    // Animações de scroll
    setupScrollAnimations();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartUI();
    showNotification('Produto adicionado ao carrinho!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    if (!cartItems || !cartTotal || !cartCount) return;

    // Atualizar contador do carrinho
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Atualizar lista de itens
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #6B7280; padding: 2rem;">Carrinho vazio</p>';
        cartTotal.textContent = '0,00';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div>
                    <h4>${item.name}</h4>
                    <p>R$ ${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="cart-item-controls">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                <button onclick="removeFromCart(${item.id})" class="remove-btn">×</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    // Atualizar total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

function openCart() {
    if (cartModal) {
        cartModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeCart() {
    if (cartModal) {
        cartModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Carrinho vazio!', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const items = cart.map(item => `${item.name} (${item.quantity}x)`).join('\n');
    
    const message = `Olá! Gostaria de finalizar minha compra:\n\n${items}\n\nTotal: R$ ${total.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

function showNotification(message, type = 'success') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos da notificação
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00A651' : '#FF3B30'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.product-card, .feature-card, .testimonial-card, .section-title, .section-subtitle');
    animatedElements.forEach(el => observer.observe(el));
}

// Funções globais para uso no HTML
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openCart = openCart;
window.closeCart = closeCart;
window.checkout = checkout;