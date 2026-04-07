import { store } from './state.js';

class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('toys2000_cart')) || [];
  }

  save() {
    localStorage.setItem('toys2000_cart', JSON.stringify(this.items));
    store.publish('cartUpdated', this.items);
  }

  add(product, brand) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...product, brand, quantity: 1 });
    }
    this.save();
  }

  remove(productId) {
    this.items = this.items.filter(i => i.id !== productId);
    this.save();
  }

  updateQuantity(productId, amount) {
    const item = this.items.find(i => i.id === productId);
    if (item) {
      item.quantity += amount;
      if (item.quantity <= 0) {
        this.remove(productId);
      } else {
        this.save();
      }
    }
  }

  getTotals() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemsCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }
}

export const cart = new Cart();
