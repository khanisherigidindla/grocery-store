const products = [
  {
    id: 'el-101',
    category: 'electronics',
    title: 'Nova X5 Pro Smartphone',
    description: 'Flagship phone with premium camera, long battery life and fast charging.',
    price: 39999,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    badge: 'Best Seller'
  },
  {
    id: 'el-102',
    category: 'electronics',
    title: 'AeroBook Ultra Laptop',
    description: 'Lightweight performance laptop with touchscreen and 16GB RAM.',
    price: 74999,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
    badge: 'Top Rated'
  },
  {
    id: 'el-103',
    category: 'electronics',
    title: 'StreamSound Wireless Earbuds',
    description: 'Noise cancelling earbuds with crystal clear audio and long play time.',
    price: 4999,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1580894908361-8d6f3c19b000?auto=format&fit=crop&w=900&q=80',
    badge: 'Hot Deal'
  },
  {
    id: 'gr-201',
    category: 'grocery',
    title: 'Organic Basmati Rice 5KG',
    description: 'Premium long-grain rice handpicked for freshness and aroma.',
    price: 2899,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=900&q=80',
    badge: 'Fresh'
  },
  {
    id: 'gr-202',
    category: 'grocery',
    title: 'Fresh Multi-Veg Basket',
    description: 'Seasonal vegetables delivered fresh from the farm.',
    price: 799,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=900&q=80',
    badge: 'Daily Need'
  },
  {
    id: 'gr-203',
    category: 'grocery',
    title: 'Premium Cold Pressed Oil',
    description: 'Pure and healthy cold pressed oil for everyday cooking.',
    price: 599,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=900&q=80',
    badge: 'Health'
  },
  {
    id: 'fa-301',
    category: 'fashion',
    title: 'Urban Casual Sneaker',
    description: 'Comfortable daily wear sneakers in multiple colors.',
    price: 2499,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    badge: 'Trending'
  },
  {
    id: 'fa-302',
    category: 'fashion',
    title: 'Menâ€™s Modern Jacket',
    description: 'Fashionable jacket with lightweight insulation and stylish finish.',
    price: 3499,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80',
    badge: 'Must Have'
  },
  {
    id: 'ho-401',
    category: 'homegoods',
    title: 'Smart blender & juicer',
    description: 'Powerful kitchen appliance with multiple speed settings.',
    price: 5599,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80',
    badge: 'Home Essential'
  },
  {
    id: 'ho-402',
    category: 'homegoods',
    title: 'Deluxe Bedding Set',
    description: 'Soft, breathable linen set for restful nights.',
    price: 4299,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    badge: 'Comfort'
  },
  {
    id: 'be-501',
    category: 'beauty',
    title: 'Glow Facial Kit',
    description: 'Complete skincare kit for radiant, hydrated skin.',
    price: 1799,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    badge: 'Beauty'
  },
  {
    id: 'be-502',
    category: 'beauty',
    title: 'Hydrating Body Lotion',
    description: 'Non-greasy lotion with long-lasting moisture.',
    price: 899,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80',
    badge: 'Gentle'
  },
  {
    id: 'ph-601',
    category: 'grocery',
    title: 'Cold & Flu Relief Kit',
    description: 'Essential pharmacy pack with vitamins and immunity boosters.',
    price: 799,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1580281657521-4d4e3a154b4d?auto=format&fit=crop&w=900&q=80',
    badge: 'Health'
  },
  {
    id: 'es-701',
    category: 'homegoods',
    title: 'Portable Handheld Vacuum',
    description: 'Lightweight cleaner for quick home and car cleanups.',
    price: 2399,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    badge: 'Essential'
  },
  {
    id: 'el-104',
    category: 'electronics',
    title: 'Smart Home Speaker',
    description: 'Voice-enabled speaker with rich bass and multi-room sync.',
    price: 6999,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80',
    badge: 'Popular'
  },
  {
    id: 'fa-303',
    category: 'fashion',
    title: 'Classic Watch',
    description: 'Luxury style watch with leather strap and sapphire glass.',
    price: 6599,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1518549297447-85048b7a911c?auto=format&fit=crop&w=900&q=80',
    badge: 'Gift'
  },
  {
    id: 'gr-204',
    category: 'grocery',
    title: 'Organic Almonds Pack',
    description: 'Premium almonds sourced from trusted farms.',
    price: 999,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80',
    badge: 'Healthy'
  }
];

const deals = [
  {
    id: 'deal-01',
    title: 'Up to 25% Off on Electronics',
    benefit: 'Save big on smartphones and laptops.',
    price: 24999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1510552776732-7197a6bd0c42?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'deal-02',
    title: 'Grocery Essentials Pack',
    benefit: 'Bundle offers for kitchen staples.',
    price: 1499,
    category: 'grocery',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'deal-03',
    title: 'Fashion Combo Savings',
    benefit: 'Buy more, save more on style essentials.',
    price: 2999,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'
  }
];

const cart = JSON.parse(localStorage.getItem('khanishCart') || '[]');
const encryptedOrdersKey = 'khanishEncryptedOrders';

const state = {
  search: '',
  category: 'all',
  sort: 'featured',
  maxPrice: 100000,
  cart,
  activeSection: 'home'
};

const elements = {
  productGrid: document.getElementById('productGrid'),
  dealsGrid: document.getElementById('dealsGrid'),
  cartCount: document.getElementById('cartCount'),
  cartItems: document.getElementById('cartItems'),
  cartSubtotal: document.getElementById('cartSubtotal'),
  cartPanel: document.getElementById('cartPanel'),
  modalBackdrop: document.getElementById('modalBackdrop'),
  checkoutModal: document.getElementById('checkoutModal'),
  checkoutForm: document.getElementById('checkoutForm'),
  checkoutNotice: document.getElementById('checkoutNotice'),
  confirmationSection: document.getElementById('confirmationSection'),
  confirmationDetails: document.getElementById('confirmationDetails'),
  searchInput: document.getElementById('searchInput'),
  searchButton: document.getElementById('searchButton'),
  categoryFilter: document.getElementById('categoryFilter'),
  sortFilter: document.getElementById('sortFilter'),
  priceRange: document.getElementById('priceRange'),
  assistantQuery: document.getElementById('assistantQuery'),
  assistantResponse: document.getElementById('assistantResponse'),
  askAiButton: document.getElementById('askAiButton'),
  clearAiButton: document.getElementById('clearAiButton'),
  recommendationGrid: document.getElementById('recommendationGrid'),
  marketRateSummary: document.getElementById('marketRateSummary'),
  openCartButton: document.getElementById('openCartButton'),
  closeCartButton: document.getElementById('closeCartButton'),
  viewCheckoutButton: document.getElementById('viewCheckoutButton'),
  openCheckoutButton: document.getElementById('openCheckoutButton'),
  closeCheckoutButton: document.getElementById('closeCheckoutButton'),
  placeOrderButton: document.getElementById('placeOrderButton'),
  saveCartButton: document.getElementById('saveCartButton'),
  continueShoppingButton: document.getElementById('continueShoppingButton')
};

const navButtons = Array.from(document.querySelectorAll('[data-section]'));
const heroScrollButtons = Array.from(document.querySelectorAll('[data-scroll]'));

function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

function getCartCount() {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartCount() {
  elements.cartCount.textContent = getCartCount();
}

function calculateSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

function saveCart() {
  localStorage.setItem('khanishCart', JSON.stringify(state.cart));
}

function filterProducts() {
  return products
    .filter((product) => {
      const matchesCategory = state.category === 'all' || product.category === state.category;
      const matchesSearch = state.search === '' || product.title.toLowerCase().includes(state.search.toLowerCase()) || product.description.toLowerCase().includes(state.search.toLowerCase());
      const matchesPrice = product.price <= state.maxPrice;
      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      if (state.sort === 'priceAsc') return a.price - b.price;
      if (state.sort === 'priceDesc') return b.price - a.price;
      if (state.sort === 'ratingDesc') return b.rating - a.rating;
      return products.indexOf(a) - products.indexOf(b);
    });
}

function renderProducts() {
  const filtered = filterProducts();
  elements.productGrid.innerHTML = filtered.map((product) => {
    const inCart = state.cart.find((item) => item.id === product.id);
    return `
      <article class="product-card">
        <img src="${product.image}" alt="${product.title}" />
        <div class="product-meta">
          <div class="rating-badge">⭐ ${product.rating.toFixed(1)}</div>
          <span>${product.badge}</span>
        </div>
        <h4>${product.title}</h4>
        <p>${product.description}</p>
        <div class="product-meta">
          <div class="price-tag">${formatPrice(product.price)}</div>
          <span>${product.category}</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-outline add-to-cart" data-product="${product.id}">${inCart ? 'Added' : 'Add to Cart'}</button>
          <button class="btn btn-primary view-details" data-product="${product.id}">View</button>
        </div>
      </article>
    `;
  }).join('');
}

function renderDeals() {
  elements.dealsGrid.innerHTML = deals.map((deal) => `
    <article class="deal-card">
      <img src="${deal.image}" alt="${deal.title}" />
      <div>
        <h4>${deal.title}</h4>
        <p>${deal.benefit}</p>
      </div>
      <div class="product-meta" style="margin-top: 18px; justify-content: space-between;">
        <strong>${formatPrice(deal.price)}</strong>
        <button class="btn btn-primary deal-add" data-product="${deal.id}">Shop</button>
      </div>
    </article>
  `).join('');
}

function getCategoryAverage(category) {
  const categoryItems = products.filter((item) => item.category === category);
  if (!categoryItems.length) return 0;
  return categoryItems.reduce((sum, item) => sum + item.price, 0) / categoryItems.length;
}

function getProductMarketRate(query) {
  const normalized = query.toLowerCase();
  const candidate = products.find((product) => {
    const titleWords = product.title.toLowerCase().split(/\s+/);
    return titleWords.some((word) => normalized.includes(word)) || normalized.includes(product.category);
  });

  if (!candidate) {
    return null;
  }

  const avg = getCategoryAverage(candidate.category);
  const trend = candidate.price > avg ? 'above average' : candidate.price < avg ? 'below average' : 'at parity';
  const delta = Math.round(Math.abs(candidate.price - avg));
  return {
    product: candidate,
    averagePrice: Math.round(avg),
    trend,
    delta
  };
}

function renderRecommendations() {
  const categoriesInCart = [...new Set(state.cart.map((item) => products.find((product) => product.id === item.id)?.category).filter(Boolean))];
  const recommended = products
    .filter((product) => !state.cart.some((item) => item.id === product.id))
    .map((product) => ({
      ...product,
      score: product.rating + (categoriesInCart.includes(product.category) ? 1.8 : 0) + product.price / 120000
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  elements.recommendationGrid.innerHTML = recommended.map((product) => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.title}" />
      <div class="product-meta">
        <div class="rating-badge">⭐ ${product.rating.toFixed(1)}</div>
        <span>${product.badge}</span>
      </div>
      <h4>${product.title}</h4>
      <p>${product.description}</p>
      <div class="product-meta">
        <div class="price-tag">${formatPrice(product.price)}</div>
        <span>${product.category}</span>
      </div>
      <div class="product-actions">
        <button class="btn btn-outline add-to-cart" data-product="${product.id}">Add</button>
        <button class="btn btn-primary view-details" data-product="${product.id}">View</button>
      </div>
    </article>
  `).join('');
}

function renderMarketRateSummary() {
  const categories = ['electronics', 'grocery', 'fashion', 'homegoods', 'beauty'];
  elements.marketRateSummary.innerHTML = categories.map((category) => {
    const average = Math.round(getCategoryAverage(category));
    return `
      <div class="rate-card">
        <h5 class="eyebrow">${category.charAt(0).toUpperCase() + category.slice(1)}</h5>
        <p>Average price benchmark</p>
        <strong>${formatPrice(average)}</strong>
      </div>
    `;
  }).join('');
}

function renderAiResponse(message, details) {
  elements.assistantResponse.innerHTML = `
    <p><strong>${message}</strong></p>
    <div>${details}</div>
  `;
}

async function fetchDuckDuckGoAnswer(query) {
  if (!query) return 'Please enter a question to search.';

  const directUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`;
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(directUrl)}`;

  try {
    const response = await fetch(proxyUrl);
    if (!response.ok) {
      throw new Error('No response from research service');
    }
    const data = await response.json();
    if (data.AbstractText) return data.AbstractText;
    if (data.RelatedTopics && data.RelatedTopics.length) {
      const first = data.RelatedTopics[0];
      return first.Text || first.Result || 'No direct answer available from research results.';
    }
    return 'I could not find a direct answer. Try a different question or be more specific.';
  } catch (error) {
    return `Research tool is unavailable. ${error.message}`;
  }
}

async function handleAiQuery() {
  const query = elements.assistantQuery.value.trim();
  if (!query) {
    renderAiResponse('Write a question first.', 'Ask the AI about product prices, market rates, bundles, or delivery details.');
    return;
  }

  renderAiResponse('Searching the market and product knowledge...', '<p>Fetching results from the free AI research engine...</p>');

  const rateInsight = getProductMarketRate(query);
  const answer = await fetchDuckDuckGoAnswer(query);
  const rateText = rateInsight
    ? `Market rate check for <strong>${rateInsight.product.title}</strong>: currently priced ${rateInsight.trend} category average by ₹${rateInsight.delta}. Category benchmark is ${formatPrice(rateInsight.averagePrice)}.`
    : '';

  renderAiResponse('Khanish AI research result', `<p>${rateText}</p><p>${answer}</p>`);
}

function clearAiPanel() {
  elements.assistantQuery.value = '';
  renderAiResponse('Ready for your next question.', 'Ask Khanish AI anything about products, pricing, availability, or recommendations.');
}

function refreshExperience() {
  renderRecommendations();
  renderMarketRateSummary();
}

function renderCart() {
  if (state.cart.length === 0) {
    elements.cartItems.innerHTML = '<p style="color: var(--muted);">Your cart is empty. Add products to view them here.</p>';
    elements.cartSubtotal.textContent = formatPrice(0);
    updateCartCount();
    return;
  }

  elements.cartItems.innerHTML = state.cart.map((item) => {
    const product = products.find((productItem) => productItem.id === item.id);
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.title}" />
        <div class="cart-item-details">
          <h4>${product.title}</h4>
          <p>${formatPrice(product.price)} x ${item.quantity}</p>
          <div class="quantity-selector" data-product="${item.id}">
            <button data-action="decrease" data-product="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button data-action="increase" data-product="${item.id}">+</button>
          </div>
        </div>
        <button class="icon-button remove-item" data-product="${item.id}">🗑</button>
      </div>
    `;
  }).join('');

  elements.cartSubtotal.textContent = formatPrice(calculateSubtotal());
  updateCartCount();
}

function openCart() {
  elements.cartPanel.classList.add('open');
}

function closeCart() {
  elements.cartPanel.classList.remove('open');
}

function openCheckout() {
  if (state.cart.length === 0) {
    alert('Your cart is empty. Add items before checking out.');
    return;
  }
  elements.modalBackdrop.classList.add('visible');
  elements.checkoutModal.classList.remove('hidden');
  elements.checkoutModal.classList.add('visible');
}

function closeCheckout() {
  elements.checkoutModal.classList.add('hidden');
  elements.modalBackdrop.classList.remove('visible');
  elements.checkoutNotice.textContent = '';
}

async function generateEncryptionKey() {
  if (!window.crypto || !window.crypto.subtle) {
    return null;
  }
  return window.crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

async function encryptData(value) {
  if (!window.crypto || !window.crypto.subtle) {
    return btoa(JSON.stringify(value));
  }
  const enc = new TextEncoder();
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const key = await generateKeyFromPassword('khanish-secure-checkout');
  const cipher = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(JSON.stringify(value)));
  const buffer = new Uint8Array(cipher);
  const combined = new Uint8Array(iv.byteLength + buffer.byteLength);
  combined.set(iv, 0);
  combined.set(buffer, iv.byteLength);
  return btoa(String.fromCharCode(...combined));
}

async function decryptData(encoded) {
  if (!window.crypto || !window.crypto.subtle) {
    try {
      return JSON.parse(atob(encoded));
    } catch (error) {
      return null;
    }
  }
  try {
    const raw = Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0));
    const iv = raw.slice(0, 12);
    const data = raw.slice(12);
    const key = await generateKeyFromPassword('khanish-secure-checkout');
    const plain = await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, data);
    const dec = new TextDecoder();
    return JSON.parse(dec.decode(plain));
  } catch (error) {
    return null;
  }
}

async function generateKeyFromPassword(password) {
  const encoder = new TextEncoder();
  const salt = encoder.encode('khanish-salt-2026');
  const keyMaterial = await window.crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return window.crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 250000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function handlePlaceOrder() {
  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const payment = document.querySelector('input[name="payment"]:checked').value;

  if (!fullname || !email || !phone || !address) {
    elements.checkoutNotice.textContent = 'Please fill in all shipping details before placing your order.';
    return;
  }

  if (state.cart.length === 0) {
    elements.checkoutNotice.textContent = 'Your cart is empty. Add at least one product to continue.';
    return;
  }

  elements.checkoutNotice.textContent = '';
  const order = {
    id: `KM-${Date.now()}`,
    fullname,
    email,
    phone,
    address,
    payment,
    items: state.cart,
    subtotal: calculateSubtotal(),
    placedAt: new Date().toISOString()
  };

  const encrypted = await encryptData(order);
  const savedOrders = JSON.parse(localStorage.getItem(encryptedOrdersKey) || '[]');
  savedOrders.push({ encrypted, createdAt: new Date().toISOString() });
  localStorage.setItem(encryptedOrdersKey, JSON.stringify(savedOrders));

  showConfirmation(order);
  state.cart.length = 0;
  saveCart();
  renderCart();
  renderProducts();
  closeCheckout();
}

function showConfirmation(order) {
  elements.confirmationDetails.innerHTML = `
    <p><strong>Order ID:</strong> ${order.id}</p>
    <p><strong>Name:</strong> ${order.fullname}</p>
    <p><strong>Phone:</strong> ${order.phone}</p>
    <p><strong>Payment:</strong> ${order.payment.toUpperCase()}</p>
    <p><strong>Total Paid:</strong> ${formatPrice(order.subtotal)}</p>
  `;
  elements.confirmationSection.classList.remove('hidden');
}

function closeConfirmation() {
  elements.confirmationSection.classList.add('hidden');
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ id: productId, quantity: 1, price: product.price });
  }

  saveCart();
  renderCart();
  renderProducts();
  refreshExperience();
}

function removeFromCart(productId) {
  const index = state.cart.findIndex((item) => item.id === productId);
  if (index >= 0) {
    state.cart.splice(index, 1);
    saveCart();
    renderCart();
    renderProducts();
    refreshExperience();
  }
}

function changeQuantity(productId, amount) {
  const item = state.cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity < 1) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  renderCart();
}

function setActiveSection(sectionId) {
  state.activeSection = sectionId;
  navButtons.forEach((button) => {
    button.classList.toggle('nav-link-active', button.dataset.section === sectionId);
  });

  const sectionToScroll = document.getElementById(`${sectionId}Section`);
  if (sectionToScroll) {
    sectionToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  const categoryList = ['electronics', 'grocery', 'fashion', 'homegoods', 'beauty'];
  if (categoryList.includes(sectionId)) {
    highlightCategory(sectionId);
    return;
  }

  const sectionById = document.getElementById(sectionId);
  if (sectionById) {
    sectionById.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function highlightCategory(category) {
  state.category = category;
  elements.categoryFilter.value = category;
  renderProducts();
  refreshExperience();
}

function setupListeners() {
  elements.searchButton.addEventListener('click', () => {
    state.search = elements.searchInput.value.trim();
    renderProducts();
  });

  elements.searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      state.search = elements.searchInput.value.trim();
      renderProducts();
    }
  });

  elements.assistantQuery.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleAiQuery();
    }
  });

  elements.askAiButton.addEventListener('click', handleAiQuery);
  elements.clearAiButton.addEventListener('click', clearAiPanel);

  elements.categoryFilter.addEventListener('change', (event) => {
    state.category = event.target.value;
    renderProducts();
  });

  elements.sortFilter.addEventListener('change', (event) => {
    state.sort = event.target.value;
    renderProducts();
  });

  elements.priceRange.addEventListener('input', (event) => {
    state.maxPrice = Number(event.target.value);
    renderProducts();
  });

  heroScrollButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const sectionId = event.currentTarget.dataset.scroll;
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  navButtons.forEach((button) => {
    if (button.dataset.section) {
      button.addEventListener('click', () => setActiveSection(button.dataset.section));
    }
  });

  document.body.addEventListener('click', (event) => {
    const target = event.target;

    if (target.matches('.add-to-cart') || target.closest('.add-to-cart')) {
      const productId = target.dataset.product || target.closest('.add-to-cart').dataset.product;
      addToCart(productId);
      return;
    }

    if (target.matches('.view-details') || target.closest('.view-details')) {
      const productId = target.dataset.product || target.closest('.view-details').dataset.product;
      showProductDetails(productId);
      return;
    }

    if (target.matches('.deal-add') || target.closest('.deal-add')) {
      const productId = target.dataset.product || target.closest('.deal-add').dataset.product;
      const matchedDeal = deals.find((deal) => deal.id === productId);
      if (matchedDeal) {
        const matchedProduct = products.find((product) => product.category === matchedDeal.category);
        if (matchedProduct) {
          addToCart(matchedProduct.id);
        }
      }
      return;
    }

    if (target.matches('.remove-item') || target.closest('.remove-item')) {
      const productId = target.dataset.product || target.closest('.remove-item').dataset.product;
      removeFromCart(productId);
      return;
    }

    if (target.matches('[data-action]')) {
      const action = target.dataset.action;
      const productId = target.dataset.product;
      if (action === 'increase') changeQuantity(productId, 1);
      if (action === 'decrease') changeQuantity(productId, -1);
      return;
    }

    if (target.matches('.category-card') || target.closest('.category-card')) {
      const element = target.closest('.category-card');
      const category = element.dataset.category;
      highlightCategory(category);
      return;
    }

    if (target.matches('.link-button') || target.closest('.link-button')) {
      const section = target.dataset.section || target.closest('.link-button').dataset.section;
      setActiveSection(section);
      return;
    }
  });

  elements.openCartButton.addEventListener('click', openCart);
  elements.closeCartButton.addEventListener('click', closeCart);
  elements.viewCheckoutButton.addEventListener('click', () => {
    closeCart();
    openCheckout();
  });
  elements.openCheckoutButton.addEventListener('click', openCheckout);
  elements.closeCheckoutButton.addEventListener('click', closeCheckout);
  elements.placeOrderButton.addEventListener('click', handlePlaceOrder);
  elements.saveCartButton.addEventListener('click', () => {
    saveCart();
    elements.checkoutNotice.textContent = 'Cart contents saved locally.';
  });
  elements.continueShoppingButton.addEventListener('click', closeConfirmation);
  elements.modalBackdrop.addEventListener('click', () => {
    closeCheckout();
    closeConfirmation();
    closeProductModal();
  });
}

function showProductDetails(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  document.getElementById('productModalTitle').textContent = product.title;
  document.getElementById('productModalBody').innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <p>${product.description}</p>
    <div class="product-meta">
      <div class="price-tag">${formatPrice(product.price)}</div>
      <div class="rating-badge">⭐ ${product.rating.toFixed(1)}</div>
    </div>
    <div class="product-actions">
      <button class="btn btn-primary" onclick="addToCart('${product.id}')">Add to Cart</button>
      <button class="btn btn-outline" onclick="document.getElementById('productModal').classList.add('hidden'); document.getElementById('modalBackdrop').classList.remove('visible');">Close</button>
    </div>
  `;
  document.getElementById('productModal').classList.remove('hidden');
  document.getElementById('modalBackdrop').classList.add('visible');
}

function closeProductModal() {
  document.getElementById('productModal').classList.add('hidden');
  document.getElementById('modalBackdrop').classList.remove('visible');
}

function loadSavedCart() {
  const saved = JSON.parse(localStorage.getItem('khanishCart') || '[]');
  if (Array.isArray(saved) && saved.length) {
    state.cart.length = 0;
    saved.forEach((item) => state.cart.push(item));
  }
}

function initializeApp() {
  loadSavedCart();
  renderProducts();
  renderDeals();
  renderRecommendations();
  renderMarketRateSummary();
  renderCart();
  updateCartCount();
  setupListeners();
}

initializeApp();
