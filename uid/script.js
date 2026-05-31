// ===== PRODUCT DATA =====
const products = [
  {
    id: 1, name: "Floral Wrap Dress", category: "women",
    price: 1299, oldPrice: 1999, badge: "sale",
    img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop",
    desc: "A flowing floral wrap dress perfect for summer days. Made from lightweight breathable fabric with a flattering adjustable tie waist.",
    colors: ["#e8c9a0","#d4a5c9","#9dc4b8"], rating: 4, reviews: 128,
    sizes: ["XS","S","M","L","XL"]
  },
  {
    id: 2, name: "Classic Oxford Shirt", category: "men",
    price: 999, oldPrice: null, badge: "new",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop",
    desc: "A timeless oxford weave shirt in premium 100% cotton. Versatile enough for office or weekend wear with a slightly relaxed fit.",
    colors: ["#b3c8df","#f5e6d0","#c8d8c0"], rating: 5, reviews: 84,
    sizes: ["S","M","L","XL","XXL"]
  },
  {
    id: 3, name: "Mini Ruffle Skirt", category: "women",
    price: 799, oldPrice: null, badge: "best",
    img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&auto=format&fit=crop",
    desc: "A playful mini skirt with delicate ruffled tiers. Features an elastic waistband for comfort and is crafted from soft chiffon.",
    colors: ["#f5c5a3","#c8b8d5","#f0e0a8"], rating: 4, reviews: 62,
    sizes: ["XS","S","M","L"]
  },
  {
    id: 4, name: "Slim Fit Chinos", category: "men",
    price: 1499, oldPrice: 1999, badge: "sale",
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&auto=format&fit=crop",
    desc: "Modern slim-fit chinos with a slight stretch for ease of movement. A wardrobe staple available in versatile earthy tones.",
    colors: ["#c9b99a","#8b9a7a","#a8a09a"], rating: 4, reviews: 97,
    sizes: ["28","30","32","34","36"]
  },
  {
    id: 5, name: "Kids Denim Jacket", category: "kids",
    price: 899, oldPrice: null, badge: "new",
    img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop",
    desc: "A durable and stylish denim jacket for little adventurers. Features classic button-front closure and chest pockets.",
    colors: ["#8a9db5","#c4a882","#9a9a9a"], rating: 5, reviews: 45,
    sizes: ["3-4Y","5-6Y","7-8Y","9-10Y"]
  },
  {
    id: 6, name: "Linen Blazer", category: "women",
    price: 2499, oldPrice: 3299, badge: "sale",
    img: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&auto=format&fit=crop",
    desc: "An effortlessly chic linen blazer that works from boardroom to brunch. Slightly oversized for a contemporary silhouette.",
    colors: ["#e8ddd0","#c8ccc0","#d4c8b8"], rating: 4, reviews: 76,
    sizes: ["XS","S","M","L","XL"]
  },
  {
    id: 7, name: "Graphic Tee – Urban", category: "men",
    price: 649, oldPrice: null, badge: null,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop",
    desc: "A bold graphic print t-shirt in 100% organic cotton. Regular fit with crew neck and ribbed collar for lasting comfort.",
    colors: ["#2d2d2d","#f5f0e8","#8a6a6a"], rating: 4, reviews: 152,
    sizes: ["S","M","L","XL","XXL"]
  },
  {
    id: 8, name: "Flared Cord Trousers", category: "women",
    price: 1199, oldPrice: null, badge: "new",
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop",
    desc: "Retro-inspired corduroy flared trousers with a high waist. Pairs beautifully with tucked-in tops and platform shoes.",
    colors: ["#8a7060","#6a8070","#a09050"], rating: 4, reviews: 38,
    sizes: ["XS","S","M","L"]
  },
  {
    id: 9, name: "Kids Floral Dress", category: "kids",
    price: 699, oldPrice: 999, badge: "sale",
    img: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&auto=format&fit=crop",
    desc: "A sweet floral print dress for girls. Features a smocked bodice and flared skirt in soft cotton poplin fabric.",
    colors: ["#f5c5c5","#c5d5f5","#f5f0c5"], rating: 5, reviews: 88,
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"]
  },
  {
    id: 10, name: "Knit Polo Shirt", category: "men",
    price: 1149, oldPrice: null, badge: "best",
    img: "https://images.unsplash.com/photo-1622445272461-c6580cab8755?w=600&auto=format&fit=crop",
    desc: "A refined knit polo in fine merino-blend fabric. Features subtle ribbed collar and cuffs for a polished everyday look.",
    colors: ["#c9a05a","#2c4a6a","#6a8c6a"], rating: 5, reviews: 112,
    sizes: ["S","M","L","XL","XXL"]
  },
  {
    id: 11, name: "Ruched Midi Dress", category: "women",
    price: 1849, oldPrice: 2499, badge: "sale",
    img: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600&auto=format&fit=crop",
    desc: "An elegant ruched midi dress with adjustable spaghetti straps. The stretchy jersey fabric is flattering on all body types.",
    colors: ["#d4a8c0","#c8a870","#9ab0a8"], rating: 4, reviews: 59,
    sizes: ["XS","S","M","L","XL"]
  },
  {
    id: 12, name: "Kids Jogger Set", category: "kids",
    price: 849, oldPrice: null, badge: "new",
    img: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&auto=format&fit=crop",
    desc: "A cosy matching jogger and hoodie set in soft fleece fabric. Perfect for active kids — machine washable and durable.",
    colors: ["#8a9ac8","#c88a8a","#8ab89a"], rating: 4, reviews: 71,
    sizes: ["3-4Y","5-6Y","7-8Y","9-10Y","11-12Y"]
  }
];

// ===== CART STATE =====
let cart = [];
let currentCategory = 'all';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
});

// ===== RENDER PRODUCTS =====
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  if (!list.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--grey)"><i class="fa fa-search" style="font-size:2rem;opacity:0.3;display:block;margin-bottom:12px"></i>No products found</div>`;
    return;
  }
  grid.innerHTML = list.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.06}s">
      <div class="product-img" onclick="openModal(${p.id})">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge === 'sale' ? 'Sale' : p.badge === 'new' ? 'New' : 'Best'}</span>` : ''}
        <div class="product-actions">
          <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${p.id})">
            <i class="fa fa-bag-shopping" style="margin-right:6px"></i> Add to Bag
          </button>
          <button class="btn-wishlist" title="Wishlist"><i class="fa fa-heart"></i></button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">
          <span class="price-current">₹${p.price.toLocaleString()}</span>
          ${p.oldPrice ? `<span class="price-old">₹${p.oldPrice.toLocaleString()}</span>` : ''}
        </div>
        <div class="product-stars">${'★'.repeat(p.rating)}${'☆'.repeat(5 - p.rating)} <span style="color:var(--grey);font-family:var(--font-body);font-size:0.72rem">(${p.reviews})</span></div>
      </div>
    </div>
  `).join('');
}

// ===== FILTER =====
function filterCategory(cat, btn) {
  currentCategory = cat;
  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
  renderProducts(filtered);
}

// ===== SEARCH =====
function toggleSearch() {
  const overlay = document.getElementById('searchOverlay');
  overlay.classList.toggle('active');
  if (overlay.classList.contains('active')) {
    setTimeout(() => document.getElementById('searchInput').focus(), 300);
  } else {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
  }
}

function searchProducts() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultsEl = document.getElementById('searchResults');
  if (!query) { resultsEl.innerHTML = ''; return; }
  const results = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );
  if (!results.length) {
    resultsEl.innerHTML = `<p style="color:var(--grey);font-size:0.85rem;padding:8px 0">No results for "<em>${query}</em>"</p>`;
    return;
  }
  resultsEl.innerHTML = results.slice(0, 6).map(p => `
    <div class="search-result-item" onclick="openModal(${p.id}); toggleSearch()">
      <img src="${p.img}" alt="${p.name}" />
      <div>
        <div class="sr-name">${p.name}</div>
        <div class="sr-price">₹${p.price.toLocaleString()}</div>
      </div>
    </div>
  `).join('');
}

// ===== CART =====
function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('active');
  document.getElementById('cartOverlay').classList.toggle('active');
}

function addToCart(id, size = null) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1, selectedSize: size || product.sizes[1] });
  }
  updateCartUI();
  showToast(`"${product.name}" added to your bag ✓`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartItemCount').textContent = `(${count})`;

  const cartItemsEl = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');

  if (!cart.length) {
    cartItemsEl.innerHTML = `<div class="cart-empty"><i class="fa fa-shopping-bag"></i><p>Your bag is empty</p></div>`;
    cartFooter.style.display = 'none';
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" />
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>Size: ${item.selectedSize} · Qty: ${item.qty}</p>
        <span class="price">₹${(item.price * item.qty).toLocaleString()}</span>
        <br>
        <span class="remove-btn" onclick="removeFromCart(${item.id})">Remove</span>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('cartTotal').textContent = `₹${total.toLocaleString()}`;
  cartFooter.style.display = 'block';
}

// ===== PRODUCT MODAL =====
function openModal(id) {
  const p = products.find(p => p.id === id);
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : null;

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-body">
      <div class="modal-image">
        <img src="${p.img}" alt="${p.name}" />
      </div>
      <div class="modal-info">
        <div class="brand">VogueLane · ${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
        <div class="name">${p.name}</div>
        <div class="modal-price">
          ₹${p.price.toLocaleString()}
          ${p.oldPrice ? `<span style="font-size:0.9rem;color:var(--grey);text-decoration:line-through;margin-left:10px">₹${p.oldPrice.toLocaleString()}</span>` : ''}
          ${discount ? `<span style="font-size:0.8rem;color:#d94f4f;margin-left:8px">-${discount}%</span>` : ''}
        </div>
        <div class="product-stars" style="font-size:0.85rem">${'★'.repeat(p.rating)}${'☆'.repeat(5 - p.rating)} <span style="color:var(--grey);font-size:0.75rem">${p.reviews} reviews</span></div>
        <div class="description">${p.desc}</div>
        <div>
          <div class="size-label">Select Size</div>
          <div class="size-grid">
            ${p.sizes.map((s, i) => `<button class="size-btn ${i === 1 ? 'active' : ''}" onclick="selectSize(this)">${s}</button>`).join('')}
          </div>
        </div>
        <div>
          <div class="size-label">Color</div>
          <div class="color-row">
            ${p.colors.map((c, i) => `<div class="color-dot ${i === 0 ? 'active' : ''}" style="background:${c}" onclick="selectColor(this)"></div>`).join('')}
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn-primary" onclick="addToCart(${p.id}); closeModal()">
            <i class="fa fa-bag-shopping" style="margin-right:8px"></i> Add to Bag
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('active');
  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
}

function selectSize(btn) {
  btn.closest('.size-grid').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectColor(dot) {
  dot.closest('.color-row').querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  dot.classList.add('active');
}

// ===== NAV ===== 
function setActive(link) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  link.classList.add('active');
  document.getElementById('navLinks').classList.remove('open');
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ===== CONTACT FORM =====
function submitForm(e) {
  e.preventDefault();
  showToast("Message sent! We'll get back to you soon 💌");
  e.target.reset();
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== KEYBOARD CLOSE =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); toggleSearch(); }
});
