/* =========================================================
   Camalaniugan FoodHub — Cart & Site Logic (Vanilla JS)
   Author: GitHub Copilot (Academic Research Prototype)
   ========================================================= */

'use strict';

/* ── Product Catalog ── */
const PRODUCTS = [
  {
    id: 1,
    name: 'Bibingka',
    category: 'Kakanin',
    price: 120,
    originalPrice: 150,
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 214,
    description: 'Traditional Filipino rice cake made with galapong, coconut milk, and salted egg. Baked to golden perfection in banana leaves — a classic Christmas staple.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    ],
    tags: ['Rice Cake', 'Traditional', 'Gluten-Free'],
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Biko',
    category: 'Kakanin',
    price: 150,
    originalPrice: null,
    badge: 'Homemade',
    rating: 4.8,
    reviews: 178,
    description: 'Sticky rice cake cooked in coconut milk and brown sugar, topped with latik (caramelized coconut cream). A rich, sweet delicacy loved by all ages.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    ],
    tags: ['Sticky Rice', 'Coconut', 'Sweet'],
    available: true,
    featured: true,
  },
  {
    id: 3,
    name: 'Puto',
    category: 'Kakanin',
    price: 85,
    originalPrice: null,
    badge: 'New',
    rating: 4.7,
    reviews: 92,
    description: 'Soft and fluffy Filipino steamed rice cake topped with grated cheese or salted egg. Best enjoyed with dinuguan or as a meryenda snack.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    ],
    tags: ['Steamed', 'Soft', 'Meryenda'],
    available: true,
    featured: false,
  },
  {
    id: 4,
    name: 'Suman sa Lihiya',
    category: 'Kakanin',
    price: 65,
    originalPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 143,
    description: 'Glutinous rice wrapped in banana leaves and cooked in lye water, giving it a distinct color and chewy texture. Perfect with ripe mangoes and tsokolate.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
    ],
    tags: ['Banana Leaves', 'Traditional', 'Chewy'],
    available: true,
    featured: true,
  },
  {
    id: 5,
    name: 'Palitaw',
    category: 'Kakanin',
    price: 75,
    originalPrice: null,
    badge: null,
    rating: 4.5,
    reviews: 67,
    description: 'Flat, oval-shaped rice cake topped with coconut, sesame seeds, and sugar. The name means "to float" — when it rises to the surface, it\'s cooked!',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
    ],
    tags: ['Coconut', 'Sesame', 'Boiled'],
    available: true,
    featured: false,
  },
  {
    id: 6,
    name: 'Kakanin Assortment Box',
    category: 'Special Boxes',
    price: 350,
    originalPrice: 420,
    badge: 'Best Value',
    rating: 5.0,
    reviews: 302,
    description: 'A curated box of our best-selling kakanin — bibingka, biko, puto, suman, and palitaw. The perfect gift box for any occasion or family gathering.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
    ],
    tags: ['Gift Box', 'Assorted', 'Best Value'],
    available: true,
    featured: true,
  },
  {
    id: 7,
    name: 'Nilupak',
    category: 'Kakanin',
    price: 95,
    originalPrice: null,
    badge: null,
    rating: 4.4,
    reviews: 55,
    description: 'Pounded cassava or young coconut flesh mixed with butter, condensed milk, and coconut cream. A melt-in-your-mouth delicacy from the Cagayan region.',
    image: 'https://images.unsplash.com/photo-1498579485796-98be3abc076e?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1498579485796-98be3abc076e?auto=format&fit=crop&w=600&q=80',
    ],
    tags: ['Cassava', 'Creamy', 'Local'],
    available: true,
    featured: false,
  },
  {
    id: 8,
    name: 'Tupig',
    category: 'Local Specialties',
    price: 55,
    originalPrice: null,
    badge: 'Local Fave',
    rating: 4.8,
    reviews: 189,
    description: 'A Cagayan specialty — ground glutinous rice mixed with coconut milk and sugar, wrapped in young coconut palm leaves and grilled over charcoal.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    ],
    tags: ['Grilled', 'Cagayan', 'Coconut Palm'],
    available: true,
    featured: true,
  },
];

/* ── Cart Storage Key ── */
const CART_KEY = 'cfh_cart';

/* ── Cart Utilities ── */
const Cart = {
  get() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  },

  save(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    Cart.updateBadge();
  },

  count() {
    return Cart.get().reduce((sum, i) => sum + i.qty, 0);
  },

  total() {
    return Cart.get().reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  add(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const cart = Cart.get();
    const existing = cart.find(i => i.id === productId);

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        id:       product.id,
        name:     product.name,
        category: product.category,
        price:    product.price,
        image:    product.image,
        qty,
      });
    }
    Cart.save(cart);
    showToast(`"${product.name}" added to cart!`, '🛒');
  },

  remove(productId) {
    const cart = Cart.get().filter(i => i.id !== productId);
    Cart.save(cart);
  },

  updateQty(productId, qty) {
    if (qty < 1) { Cart.remove(productId); return; }
    const cart = Cart.get();
    const item = cart.find(i => i.id === productId);
    if (item) { item.qty = qty; Cart.save(cart); }
  },

  clear() {
    localStorage.removeItem(CART_KEY);
    Cart.updateBadge();
  },

  updateBadge() {
    document.querySelectorAll('.cart-count').forEach(el => {
      const c = Cart.count();
      el.textContent = c;
      el.style.display = c > 0 ? 'flex' : 'none';
    });
  },
};

/* ── Toast Notification ── */
function showToast(message, icon = '✅') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, 3200);
}

/* ── Hamburger Menu Toggle ── */
function initHamburger() {
  const btn  = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      btn.classList.remove('open');
      menu.classList.remove('open');
    }
  });
}

/* ── Mark Active Nav Link ── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ── Currency Formatter ── */
function formatCurrency(amount) {
  return '₱' + parseFloat(amount).toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/* ── Generate Order ID ── */
function generateOrderId() {
  const prefix = 'CFH';
  const ts     = Date.now().toString(36).toUpperCase();
  const rand   = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `${prefix}-${ts}-${rand}`;
}

/* ── Cart Page Renderer ── */
function renderCartPage() {
  const wrap = document.getElementById('cart-items-wrap');
  if (!wrap) return;

  const cart = Cart.get();

  if (cart.length === 0) {
    wrap.innerHTML = `
      <div class="empty-state">
        <div class="icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything yet. Discover our delicious kakanin!</p>
        <a href="products.html" class="btn-primary-custom" style="margin-top:24px;display:inline-flex;">
          Browse Products
        </a>
      </div>`;
    updateCartSummary(0, 0);
    return;
  }

  wrap.innerHTML = `
    <table class="cart-table" id="cart-table">
      <thead>
        <tr>
          <th colspan="2">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${cart.map(item => `
          <tr data-id="${item.id}">
            <td style="width:70px">
              <img src="${item.image}" class="item-img" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=100&q=60'">
            </td>
            <td>
              <div class="item-name">
                <a href="product-detail.html?id=${item.id}" style="color:var(--brown-dark)">${item.name}</a>
              </div>
              <div class="item-cat">${item.category}</div>
            </td>
            <td>${formatCurrency(item.price)}</td>
            <td>
              <div class="qty-selector">
                <button onclick="changeCartQty(${item.id}, -1)">−</button>
                <input type="number" value="${item.qty}" min="1"
                  onchange="setCartQty(${item.id}, this.value)" />
                <button onclick="changeCartQty(${item.id}, 1)">+</button>
              </div>
            </td>
            <td style="font-weight:700;color:var(--primary)">${formatCurrency(item.price * item.qty)}</td>
            <td>
              <button class="remove-btn" title="Remove item" onclick="removeCartItem(${item.id})">✕</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>`;

  const subtotal  = Cart.total();
  const shipping  = subtotal >= 500 ? 0 : 50;
  updateCartSummary(subtotal, shipping);
}

function changeCartQty(id, delta) {
  const cart = Cart.get();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  const newQty = item.qty + delta;
  if (newQty < 1) { Cart.remove(id); }
  else { Cart.updateQty(id, newQty); }
  renderCartPage();
}

function setCartQty(id, value) {
  const qty = parseInt(value, 10);
  if (isNaN(qty) || qty < 1) { Cart.remove(id); }
  else { Cart.updateQty(id, qty); }
  renderCartPage();
}

function removeCartItem(id) {
  Cart.remove(id);
  renderCartPage();
  showToast('Item removed from cart.', '🗑️');
}

function updateCartSummary(subtotal, shipping) {
  const el = id => document.getElementById(id);
  const total = subtotal + shipping;

  if (el('summary-subtotal'))  el('summary-subtotal').textContent  = formatCurrency(subtotal);
  if (el('summary-shipping'))  el('summary-shipping').textContent  = shipping === 0 ? 'FREE' : formatCurrency(shipping);
  if (el('summary-total'))     el('summary-total').textContent     = formatCurrency(total);
  if (el('checkout-total-val')) el('checkout-total-val').textContent = formatCurrency(total);

  // Store total for checkout page
  sessionStorage.setItem('cfh_order_subtotal', subtotal);
  sessionStorage.setItem('cfh_order_shipping', shipping);
  sessionStorage.setItem('cfh_order_total',    total);
}

/* ── Products Page Renderer ── */
function renderProductsPage() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  renderProductCards(grid, PRODUCTS);

  // Category filter
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.dataset.category;
      const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
      renderProductCards(grid, filtered);
    });
  });
}

function renderProductCards(container, products) {
  if (products.length === 0) {
    container.innerHTML = `<div class="col-12"><div class="empty-state">
      <div class="icon">🍽️</div><h3>No products found</h3></div></div>`;
    return;
  }
  container.innerHTML = products.map(p => `
    <div class="col-md-6 col-lg-4 col-xl-3 fade-in-up">
      <div class="product-card" onclick="location.href='product-detail.html?id=${p.id}'">
        <div class="card-img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=60'">
          ${p.badge ? `<span class="badge-tag ${p.badge === 'Bestseller' ? 'bestseller' : p.badge === 'New' ? 'new-item' : ''}">${p.badge}</span>` : ''}
          <button class="wishlist-btn" onclick="event.stopPropagation(); showToast('Added to wishlist!', '❤️')" title="Add to wishlist">♡</button>
        </div>
        <div class="card-body">
          <div class="card-category">${p.category}</div>
          <div class="card-title">${p.name}</div>
          <div class="card-desc">${p.description.slice(0, 90)}…</div>
          <div class="card-footer-row">
            <div>
              <div class="price">${formatCurrency(p.price)}</div>
              ${p.originalPrice ? `<div class="price-old">${formatCurrency(p.originalPrice)}</div>` : ''}
            </div>
            <button class="btn-add-cart" onclick="event.stopPropagation(); Cart.add(${p.id})">
              + Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Product Detail Page ── */
function renderProductDetail() {
  const wrap = document.getElementById('product-detail-wrap');
  if (!wrap) return;

  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'), 10);
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    wrap.innerHTML = `<div class="empty-state"><div class="icon">😕</div>
      <h3>Product not found</h3>
      <a href="products.html" class="btn-primary-custom" style="margin-top:16px;display:inline-flex;">Back to Products</a>
    </div>`;
    return;
  }

  document.title = `${product.name} — Camalaniugan FoodHub`;

  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  wrap.innerHTML = `
    <div class="row g-5 align-items-start">
      <div class="col-lg-6">
        <div class="product-gallery">
          <img id="main-product-img" src="${product.images[0]}" class="main-img" alt="${product.name}"
            onerror="this.src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=60'">
          <div class="thumbs">
            ${product.images.map((img, i) => `
              <img src="${img}" class="thumb ${i === 0 ? 'active' : ''}" alt="View ${i + 1}"
                onclick="switchImage(this, '${img}')" loading="lazy"
                onerror="this.src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=100&q=60'">
            `).join('')}
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="product-detail-info">
          <div class="category-label">${product.category}</div>
          <h1>${product.name}</h1>
          <div class="rating">
            <span class="stars">${'★'.repeat(5)}</span>
            <span>${product.rating} (${product.reviews} reviews)</span>
          </div>
          <div class="price-block">
            <span class="price-big">${formatCurrency(product.price)}</span>
            ${product.originalPrice ? `<span class="price-old-big">${formatCurrency(product.originalPrice)}</span>` : ''}
          </div>
          <p class="desc">${product.description}</p>

          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">
            ${product.tags.map(t => `<span style="background:var(--cream-dark);color:var(--brown-mid);font-size:0.73rem;font-weight:700;letter-spacing:0.5px;padding:4px 12px;border-radius:20px;">${t}</span>`).join('')}
          </div>

          <div class="divider"></div>

          <div class="add-cart-section">
            <div class="qty-selector">
              <button onclick="detailDecQty()">−</button>
              <input type="number" id="detail-qty" value="1" min="1">
              <button onclick="detailIncQty()">+</button>
            </div>
            <button class="btn-primary-custom" onclick="detailAddToCart(${product.id})">
              🛒 Add to Cart
            </button>
            <button class="btn-secondary-custom" onclick="showToast('Added to wishlist!','❤️')">
              ♡
            </button>
          </div>

          <div style="margin-top:20px;padding:16px;background:var(--cream);border-radius:var(--radius-sm);border:1px solid var(--border);">
            <div style="display:flex;gap:24px;flex-wrap:wrap;">
              <div style="font-size:0.8rem;color:var(--text-light);">🚚 <strong>Free delivery</strong> on ₱500+</div>
              <div style="font-size:0.8rem;color:var(--text-light);">🌿 <strong>Fresh daily</strong> made to order</div>
              <div style="font-size:0.8rem;color:var(--text-light);">📦 <strong>Secure</strong> packaging</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    ${relatedProducts.length > 0 ? `
    <div class="mt-5 pt-4" style="border-top:1px solid var(--border)">
      <h4 style="font-size:1.2rem;margin-bottom:28px;">You may also like</h4>
      <div class="row g-4">
        ${relatedProducts.map(p => `
          <div class="col-sm-6 col-lg-3">
            <div class="product-card" onclick="location.href='product-detail.html?id=${p.id}'">
              <div class="card-img-wrap">
                <img src="${p.image}" alt="${p.name}" loading="lazy"
                  onerror="this.src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=60'">
              </div>
              <div class="card-body">
                <div class="card-category">${p.category}</div>
                <div class="card-title">${p.name}</div>
                <div class="card-footer-row">
                  <div class="price">${formatCurrency(p.price)}</div>
                  <button class="btn-add-cart" onclick="event.stopPropagation();Cart.add(${p.id})">+ Cart</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>` : ''}
  `;
}

function switchImage(el, src) {
  document.getElementById('main-product-img').src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}
function detailIncQty() {
  const inp = document.getElementById('detail-qty');
  inp.value = parseInt(inp.value || 1) + 1;
}
function detailDecQty() {
  const inp = document.getElementById('detail-qty');
  const val = parseInt(inp.value || 1);
  if (val > 1) inp.value = val - 1;
}
function detailAddToCart(id) {
  const qty = parseInt(document.getElementById('detail-qty')?.value || 1, 10);
  Cart.add(id, qty);
}

/* ── Checkout Page Logic ── */
function initCheckoutPage() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  // Pre-populate summary
  const cart = Cart.get();
  const tbody = document.getElementById('checkout-items');
  if (tbody && cart.length > 0) {
    tbody.innerHTML = cart.map(item => `
      <tr>
        <td style="padding:10px 0;font-size:0.88rem;color:var(--text)">${item.name} <span style="color:var(--text-muted)">× ${item.qty}</span></td>
        <td style="padding:10px 0;text-align:right;font-weight:700;font-size:0.9rem;color:var(--primary)">${formatCurrency(item.price * item.qty)}</td>
      </tr>
    `).join('');
  }

  const subtotal = parseFloat(sessionStorage.getItem('cfh_order_subtotal') || Cart.total());
  const shipping = subtotal >= 500 ? 0 : 50;
  const total    = subtotal + shipping;

  const elSub  = document.getElementById('checkout-sub');
  const elShip = document.getElementById('checkout-ship');
  const elTot  = document.getElementById('checkout-total');

  if (elSub)  elSub.textContent  = formatCurrency(subtotal);
  if (elShip) elShip.textContent = shipping === 0 ? 'FREE' : formatCurrency(shipping);
  if (elTot)  elTot.textContent  = formatCurrency(total);

  // Payment option selection
  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input[type="radio"]').checked = true;
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const data = new FormData(form);
    const name    = data.get('fullname')?.trim();
    const address = data.get('address')?.trim();
    const phone   = data.get('phone')?.trim();
    const payment = data.get('payment');

    if (!name || !address || !phone || !payment) {
      showToast('Please fill in all required fields.', '⚠️'); return;
    }
    if (Cart.get().length === 0) {
      showToast('Your cart is empty!', '⚠️'); return;
    }

    // Save order data for confirmation page
    const orderId = generateOrderId();
    const orderData = {
      id: orderId,
      name, address, phone, payment,
      total: formatCurrency(total),
      items: cart.length,
      date: new Date().toLocaleDateString('en-PH', { year:'numeric', month:'long', day:'numeric' }),
    };
    sessionStorage.setItem('cfh_order', JSON.stringify(orderData));
    Cart.clear();
    window.location.href = 'order-confirmation.html';
  });
}

/* ── Order Confirmation Page ── */
function renderConfirmationPage() {
  const wrap = document.getElementById('confirmation-wrap');
  if (!wrap) return;

  const order = JSON.parse(sessionStorage.getItem('cfh_order') || '{}');

  if (!order.id) {
    wrap.innerHTML = `<div class="empty-state">
      <div class="icon">🤔</div>
      <h3>No order found</h3>
      <p>It seems you arrived here directly.</p>
      <a href="index.html" class="btn-primary-custom" style="margin-top:16px;display:inline-flex;">Go Home</a>
    </div>`;
    return;
  }

  const paymentLabel = { cod: 'Cash on Delivery', gcash: 'GCash', maya: 'Maya' }[order.payment] || order.payment;

  wrap.innerHTML = `
    <div class="confirm-card">
      <div class="confirm-icon">✓</div>
      <span style="font-size:0.78rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--secondary);">Order Confirmed</span>
      <h1 style="margin-top:12px;">Salamat, ${order.name.split(' ')[0]}! 🎉</h1>
      <p style="color:var(--text-light);font-size:0.9rem;max-width:440px;margin:0 auto 12px;">
        Your order has been received and is being prepared with love.
        We'll notify you once it's on the way!
      </p>
      <div class="order-id-badge">Order #${order.id}</div>

      <div class="confirm-detail-grid">
        <div class="confirm-detail-item">
          <div class="label">Date Ordered</div>
          <div class="value">${order.date}</div>
        </div>
        <div class="confirm-detail-item">
          <div class="label">Order Total</div>
          <div class="value" style="color:var(--primary)">${order.total}</div>
        </div>
        <div class="confirm-detail-item">
          <div class="label">Payment Method</div>
          <div class="value">${paymentLabel}</div>
        </div>
        <div class="confirm-detail-item">
          <div class="label">Deliver To</div>
          <div class="value" style="white-space:normal">${order.address}</div>
        </div>
      </div>

      <div style="background:var(--cream);border-radius:var(--radius-sm);padding:16px 20px;margin-bottom:28px;text-align:left;border:1px solid var(--border)">
        <strong style="font-size:0.82rem;display:block;margin-bottom:8px;color:var(--brown-mid)">What's next?</strong>
        <ol style="padding-left:18px;font-size:0.83rem;color:var(--text-light);line-height:1.9">
          <li>Our team confirms your order within 30 minutes</li>
          <li>We freshly prepare your kakanin just for you</li>
          <li>Order is dispatched via our local courier</li>
          <li>Enjoy your delicious Camalaniugan treats!</li>
        </ol>
      </div>

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <a href="index.html" class="btn-primary-custom">Back to Home</a>
        <a href="products.html" class="btn-secondary-custom">Continue Shopping</a>
      </div>
    </div>
  `;
}

/* ── Featured Products on Home ── */
function renderFeaturedProducts() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 8);
  renderProductCards(grid, featured);
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
  initHamburger();
  setActiveNav();
  renderFeaturedProducts();
  renderProductsPage();
  renderProductDetail();
  renderCartPage();
  initCheckoutPage();
  renderConfirmationPage();
});
