import { store } from '../js/state.js';
import { cart } from '../js/cart.js';
import { data } from '../js/data.js';

export function createQuickViewModal() {
  const overlay = document.createElement('div');
  overlay.className = 'quickview-overlay';
  overlay.id = 'quickview-overlay';

  const modal = document.createElement('div');
  modal.className = 'quickview-modal';
  modal.id = 'quickview-modal';

  function open(productId, brandId) {
    const products = data.products[brandId] || [];
    const product = products.find(p => p.id === productId);
    const brand = data.brands.find(b => b.id === brandId);

    if (!product || !brand) return;

    const bulkTiers = [
      { min: 1, max: 9, discount: 0, label: '1-9 units' },
      { min: 10, max: 24, discount: 0.10, label: '10-24 units (10% off)' },
      { min: 25, max: 49, discount: 0.15, label: '25-49 units (15% off)' },
      { min: 50, max: Infinity, discount: 0.20, label: '50+ units (20% off)' }
    ];

    function getDiscount(qty) {
      const tier = bulkTiers.find(t => qty >= t.min && qty <= t.max);
      return tier ? tier.discount : 0;
    }

    function getPrice(qty) {
      const discount = getDiscount(qty);
      return product.price * (1 - discount);
    }

    modal.innerHTML = `
      <button class="quickview-close" aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <div class="quickview-body">
        <div class="quickview-image-section">
          <div class="quickview-image-wrap">
            ${product.badge ? `<span class="fp-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.name}" class="quickview-image" />
          </div>
        </div>
        <div class="quickview-info-section">
          <span class="quickview-brand">${brand.name}</span>
          <h2 class="quickview-title">${product.name}</h2>
          <p class="quickview-desc">${product.desc}</p>
          <div class="quickview-category">
            <span class="quickview-category-tag">${product.category || 'General'}</span>
          </div>

          <div class="quickview-pricing">
            <div class="quickview-price-current">
              <span class="quickview-price-label">Unit Price</span>
              <span class="quickview-price-value" id="qv-unit-price">$${product.price.toFixed(2)}</span>
            </div>
            <div class="quickview-price-total">
              <span class="quickview-price-label">Line Total</span>
              <span class="quickview-price-value quickview-price-total-value" id="qv-line-total">$${product.price.toFixed(2)}</span>
            </div>
          </div>

          <div class="quickview-bulk-tiers">
            <span class="quickview-tiers-label">Bulk Pricing Tiers</span>
            <div class="quickview-tiers-grid">
              ${bulkTiers.map(tier => `
                <div class="quickview-tier ${tier.min === 1 ? 'active' : ''}" data-min="${tier.min}">
                  <span class="quickview-tier-range">${tier.label}</span>
                  <span class="quickview-tier-price">$${(product.price * (1 - tier.discount)).toFixed(2)}/ea</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="quickview-qty-row">
            <label class="quickview-qty-label">Quantity</label>
            <div class="quickview-qty-control">
              <button class="qty-btn-lg" id="qv-qty-minus">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <input type="number" class="quickview-qty-input" id="qv-qty-input" value="1" min="1" max="999" />
              <button class="qty-btn-lg" id="qv-qty-plus">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>
            <div class="quickview-qty-presets">
              <button class="qty-preset" data-qty="10">10</button>
              <button class="qty-preset" data-qty="25">25</button>
              <button class="qty-preset" data-qty="50">50</button>
              <button class="qty-preset" data-qty="100">100</button>
            </div>
          </div>

          <div class="quickview-savings" id="qv-savings" style="display:none">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
            <span id="qv-savings-text"></span>
          </div>

          <div class="quickview-actions">
            <button class="btn btn-primary quickview-add-btn" id="qv-add-to-cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              Add to Cart
            </button>
            <button class="btn btn-outline quickview-quote-btn" id="qv-request-quote">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
              Request Quote
            </button>
          </div>
        </div>
      </div>
    `;

    const qtyInput = modal.querySelector('#qv-qty-input');
    const unitPriceEl = modal.querySelector('#qv-unit-price');
    const lineTotalEl = modal.querySelector('#qv-line-total');
    const savingsEl = modal.querySelector('#qv-savings');
    const savingsText = modal.querySelector('#qv-savings-text');
    const tiers = modal.querySelectorAll('.quickview-tier');

    function updatePricing() {
      let qty = parseInt(qtyInput.value) || 1;
      if (qty < 1) qty = 1;
      const unitPrice = getPrice(qty);
      const lineTotal = unitPrice * qty;
      const discount = getDiscount(qty);
      const savings = product.price * qty - lineTotal;

      unitPriceEl.textContent = `$${unitPrice.toFixed(2)}`;
      lineTotalEl.textContent = `$${lineTotal.toFixed(2)}`;

      tiers.forEach(t => {
        const tierMin = parseInt(t.dataset.min);
        const tier = bulkTiers.find(bt => bt.min === tierMin);
        t.classList.toggle('active', qty >= tier.min && qty <= tier.max);
      });

      if (discount > 0) {
        savingsEl.style.display = 'flex';
        savingsText.textContent = `You save $${savings.toFixed(2)} (${Math.round(discount * 100)}% off)`;
      } else {
        savingsEl.style.display = 'none';
      }
    }

    modal.querySelector('#qv-qty-minus').addEventListener('click', () => {
      const v = parseInt(qtyInput.value) || 1;
      qtyInput.value = Math.max(1, v - 1);
      updatePricing();
    });

    modal.querySelector('#qv-qty-plus').addEventListener('click', () => {
      const v = parseInt(qtyInput.value) || 1;
      qtyInput.value = Math.min(999, v + 1);
      updatePricing();
    });

    qtyInput.addEventListener('input', updatePricing);

    modal.querySelectorAll('.qty-preset').forEach(btn => {
      btn.addEventListener('click', () => {
        qtyInput.value = btn.dataset.qty;
        updatePricing();
      });
    });

    modal.querySelector('#qv-add-to-cart').addEventListener('click', () => {
      const qty = parseInt(qtyInput.value) || 1;
      for (let i = 0; i < qty; i++) {
        if (i === 0) {
          cart.add(product, brand);
          // Adjust quantity to match
          const item = cart.items.find(it => it.id === product.id);
          if (item) item.quantity = qty;
          cart.save();
        }
      }
      store.publish('toast', { message: `${qty}x ${product.name} added to cart`, type: 'success' });
      close();
    });

    modal.querySelector('#qv-request-quote').addEventListener('click', () => {
      close();
      store.publish('openQuoteModal', { product: product.name, brand: brand.name, qty: qtyInput.value });
    });

    modal.querySelector('.quickview-close').addEventListener('click', close);

    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', close);

  store.subscribe('openQuickView', ({ productId, brandId }) => {
    open(productId, brandId);
  });

  return { overlay, modal };
}
