import { cart } from '../js/cart.js';
import { router } from '../js/router.js';
import { store } from '../js/state.js';

export function checkoutView() {
  const container = document.createElement('div');
  container.className = 'checkout-page animate-fade-in';

  if (cart.items.length === 0) {
    container.innerHTML = `
      <div class="checkout-empty">
        <div class="checkout-empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </div>
        <h2>Your cart is empty</h2>
        <p>Add some products before checking out.</p>
        <button class="btn btn-primary" id="checkout-go-home">Browse Products</button>
      </div>
    `;
    requestAnimationFrame(() => {
      container.querySelector('#checkout-go-home')?.addEventListener('click', () => router.navigate('/'));
    });
    return container;
  }

  const subtotal = cart.getTotals();
  const itemCount = cart.getItemsCount();

  container.innerHTML = `
    <div class="checkout-header">
      <button class="checkout-back" id="checkout-back">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Continue Shopping
      </button>
      <h1>Checkout</h1>
      <div class="checkout-steps">
        <span class="checkout-step active">1. Review Order</span>
        <span class="checkout-step-sep"></span>
        <span class="checkout-step">2. Shipping</span>
        <span class="checkout-step-sep"></span>
        <span class="checkout-step">3. Payment</span>
      </div>
    </div>

    <div class="checkout-layout">
      <div class="checkout-main">
        <div class="checkout-section">
          <h2 class="checkout-section-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
            </svg>
            Order Items (${itemCount})
          </h2>
          <div class="checkout-items">
            ${cart.items.map(item => `
              <div class="checkout-item">
                <img src="${item.image}" alt="${item.name}" class="checkout-item-img" />
                <div class="checkout-item-info">
                  <span class="checkout-item-brand">${item.brand.name}</span>
                  <span class="checkout-item-name">${item.name}</span>
                  <span class="checkout-item-meta">SKU: ${item.id.toUpperCase().split('-').join(' ')} &middot; ${item.category || 'General'}</span>
                </div>
                <div class="checkout-item-qty">
                  <label>Qty</label>
                  <input type="number" class="checkout-qty-input" data-id="${item.id}" value="${item.quantity}" min="1" />
                </div>
                <div class="checkout-item-price">
                  <span class="checkout-item-unit">$${item.price.toFixed(2)} ea</span>
                  <span class="checkout-item-total">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <button class="checkout-item-remove" data-id="${item.id}" aria-label="Remove">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="checkout-section">
          <h2 class="checkout-section-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Shipping Information
          </h2>
          <form class="checkout-form" id="checkout-form">
            <div class="checkout-form-row">
              <div class="checkout-field">
                <label>First Name <span class="required">*</span></label>
                <input type="text" name="firstName" required />
              </div>
              <div class="checkout-field">
                <label>Last Name <span class="required">*</span></label>
                <input type="text" name="lastName" required />
              </div>
            </div>
            <div class="checkout-field">
              <label>Company Name</label>
              <input type="text" name="company" />
            </div>
            <div class="checkout-field">
              <label>Email <span class="required">*</span></label>
              <input type="email" name="email" required />
            </div>
            <div class="checkout-field">
              <label>Phone <span class="required">*</span></label>
              <input type="tel" name="phone" required />
            </div>
            <div class="checkout-field">
              <label>Address <span class="required">*</span></label>
              <input type="text" name="address" required />
            </div>
            <div class="checkout-form-row">
              <div class="checkout-field">
                <label>City <span class="required">*</span></label>
                <input type="text" name="city" required />
              </div>
              <div class="checkout-field">
                <label>State <span class="required">*</span></label>
                <input type="text" name="state" required />
              </div>
              <div class="checkout-field">
                <label>ZIP <span class="required">*</span></label>
                <input type="text" name="zip" required />
              </div>
            </div>
            <div class="checkout-field">
              <label>Order Notes</label>
              <textarea name="notes" rows="3" placeholder="Special instructions, delivery preferences..."></textarea>
            </div>
          </form>
        </div>
      </div>

      <div class="checkout-sidebar">
        <div class="checkout-summary-card">
          <h3>Order Summary</h3>
          <div class="checkout-summary-items">
            ${cart.items.map(item => `
              <div class="checkout-summary-line">
                <span>${item.name} &times; ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            `).join('')}
          </div>
          <div class="checkout-summary-divider"></div>
          <div class="checkout-summary-row">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <div class="checkout-summary-row">
            <span>Shipping</span>
            <span class="checkout-shipping-tbd">Calculated next</span>
          </div>
          <div class="checkout-summary-row">
            <span>Tax</span>
            <span class="checkout-shipping-tbd">Calculated next</span>
          </div>
          <div class="checkout-summary-divider"></div>
          <div class="checkout-summary-row checkout-summary-total">
            <span>Estimated Total</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <button class="btn btn-primary checkout-place-btn" id="checkout-place-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Place Order
          </button>
          <button class="btn btn-outline checkout-quote-btn" id="checkout-quote-btn">
            Request Quote Instead
          </button>
          <div class="checkout-trust-badges">
            <div class="checkout-trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Secure Checkout
            </div>
            <div class="checkout-trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              Fast Shipping
            </div>
            <div class="checkout-trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
              30 Day Returns
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    container.querySelector('#checkout-back')?.addEventListener('click', () => router.navigate('/'));

    container.querySelectorAll('.checkout-qty-input').forEach(input => {
      input.addEventListener('change', () => {
        let newQty = parseInt(input.value) || 1;
        if (newQty < 1) newQty = 1;
        const item = cart.items.find(i => i.id === input.dataset.id);
        if (item) {
          const diff = newQty - item.quantity;
          cart.updateQuantity(input.dataset.id, diff);
          router.navigate('/checkout');
        }
      });
    });

    container.querySelectorAll('.checkout-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        cart.remove(btn.dataset.id);
        if (cart.items.length === 0) {
          router.navigate('/');
        } else {
          router.navigate('/checkout');
        }
      });
    });

    container.querySelector('#checkout-place-btn')?.addEventListener('click', () => {
      const form = container.querySelector('#checkout-form');
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const btn = container.querySelector('#checkout-place-btn');
      btn.innerHTML = '<div class="spinner-sm"></div> Processing...';
      btn.disabled = true;

      setTimeout(() => {
        cart.items = [];
        cart.save();
        router.navigate('/');
        store.publish('toast', { message: 'Order placed successfully! You\'ll receive a confirmation email shortly.', type: 'success', duration: 6000 });
      }, 2000);
    });

    container.querySelector('#checkout-quote-btn')?.addEventListener('click', () => {
      const productList = cart.items.map(i => `${i.name} x${i.quantity}`).join(', ');
      store.publish('openQuoteModal', { product: productList, brand: '', qty: '' });
    });
  });

  return container;
}
