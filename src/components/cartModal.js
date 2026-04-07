import { store } from '../js/state.js';
import { cart } from '../js/cart.js';
import { router } from '../js/router.js';

export function createCartModal() {
  const overlay = document.createElement('div');
  overlay.className = 'cart-overlay';

  const drawer = document.createElement('div');
  drawer.className = 'cart-drawer';

  const renderItems = () => {
    const items = cart.items;

    if (items.length === 0) {
      return `
        <div class="empty-cart">
          <div class="empty-cart-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </div>
          <h3>Your cart is empty</h3>
          <p>Add products to get started with your bulk order.</p>
        </div>
      `;
    }

    return items.map(item => {
      const lineTotal = item.price * item.quantity;
      return `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <div class="cart-item-brand">${item.brand.name}</div>
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-pricing">
              <span class="cart-item-unit-price">$${item.price.toFixed(2)} ea</span>
            </div>
            <div class="cart-item-qty">
              <button class="qty-btn-cart minus" data-id="${item.id}" aria-label="Decrease quantity">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <input type="number" class="cart-qty-input" data-id="${item.id}" value="${item.quantity}" min="1" max="999" />
              <button class="qty-btn-cart plus" data-id="${item.id}" aria-label="Increase quantity">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>
          </div>
          <div class="cart-item-right">
            <span class="cart-item-line-total">$${lineTotal.toFixed(2)}</span>
            <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
            </button>
          </div>
        </div>
      `;
    }).join('');
  };

  const updateDOM = () => {
    const itemCount = cart.getItemsCount();
    const subtotal = cart.getTotals();
    const hasBulk = cart.items.some(i => i.quantity >= 10);

    drawer.innerHTML = `
      <div class="cart-header">
        <div class="cart-header-left">
          <h2>Your Order</h2>
          <span class="cart-header-count">${itemCount} item${itemCount !== 1 ? 's' : ''}</span>
        </div>
        <button class="close-cart" id="close-cart-btn" aria-label="Close cart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      ${cart.items.length > 0 ? `
        <div class="cart-bulk-banner">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
          <span>${hasBulk ? 'Bulk pricing applied!' : 'Order 10+ units per item for bulk discounts'}</span>
        </div>
      ` : ''}
      <div class="cart-items">
        ${renderItems()}
      </div>
      <div class="cart-footer">
        ${cart.items.length > 0 ? `
          <div class="cart-summary">
            <div class="cart-summary-row">
              <span>Subtotal</span>
              <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="cart-summary-row cart-summary-shipping">
              <span>Shipping</span>
              <span class="cart-shipping-note">Calculated at checkout</span>
            </div>
            <div class="cart-summary-divider"></div>
            <div class="cart-summary-row cart-summary-total">
              <span>Estimated Total</span>
              <span>$${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button class="btn btn-primary cart-checkout-btn" id="cart-checkout-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            Proceed to Checkout
          </button>
          <button class="btn btn-outline cart-quote-btn" id="cart-quote-btn">
            Request Quote Instead
          </button>
          <button class="cart-clear-btn" id="cart-clear-btn">Clear Cart</button>
        ` : `
          <button class="btn btn-primary cart-shop-btn" id="cart-shop-btn">Start Shopping</button>
        `}
      </div>
    `;

    // Wire up events
    drawer.querySelector('#close-cart-btn').addEventListener('click', () => {
      store.publish('toggleCart', false);
    });

    drawer.querySelectorAll('.minus').forEach(btn => {
      btn.addEventListener('click', () => {
        cart.updateQuantity(btn.dataset.id, -1);
      });
    });

    drawer.querySelectorAll('.plus').forEach(btn => {
      btn.addEventListener('click', () => {
        cart.updateQuantity(btn.dataset.id, 1);
      });
    });

    drawer.querySelectorAll('.cart-qty-input').forEach(input => {
      input.addEventListener('change', () => {
        let newQty = parseInt(input.value) || 1;
        if (newQty < 1) newQty = 1;
        const item = cart.items.find(i => i.id === input.dataset.id);
        if (item) {
          const diff = newQty - item.quantity;
          cart.updateQuantity(input.dataset.id, diff);
        }
      });
    });

    drawer.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemEl = btn.closest('.cart-item');
        itemEl.classList.add('cart-item-removing');
        setTimeout(() => cart.remove(btn.dataset.id), 300);
      });
    });

    const checkoutBtn = drawer.querySelector('#cart-checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        store.publish('toggleCart', false);
        router.navigate('/checkout');
      });
    }

    const quoteBtn = drawer.querySelector('#cart-quote-btn');
    if (quoteBtn) {
      quoteBtn.addEventListener('click', () => {
        store.publish('toggleCart', false);
        const productList = cart.items.map(i => `${i.name} x${i.quantity}`).join(', ');
        store.publish('openQuoteModal', { product: productList, brand: '', qty: '' });
      });
    }

    const clearBtn = drawer.querySelector('#cart-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        cart.items = [];
        cart.save();
        store.publish('toast', { message: 'Cart cleared', type: 'info' });
      });
    }

    const shopBtn = drawer.querySelector('#cart-shop-btn');
    if (shopBtn) {
      shopBtn.addEventListener('click', () => {
        store.publish('toggleCart', false);
        router.navigate('/');
      });
    }
  };

  updateDOM();

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      store.publish('toggleCart', false);
    }
  });

  store.subscribe('toggleCart', (isOpen) => {
    if (isOpen) {
      overlay.classList.add('active');
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
      updateDOM();
    } else {
      overlay.classList.remove('active');
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  store.subscribe('cartUpdated', () => {
    if (drawer.classList.contains('active')) {
      updateDOM();
    }
  });

  return { overlay, drawer };
}
