import { homeView } from '../views/home.js';
import { brandView } from '../views/brand.js';
import { productsView } from '../views/products.js';
import { checkoutView } from '../views/checkout.js';

export const router = {
  navigate(path, param = null) {
    const app = document.getElementById('app-content');
    if (!app) return;

    // Smooth fade out
    app.classList.add('page-exit');

    setTimeout(() => {
      app.innerHTML = '';
      app.classList.remove('page-exit');

      if (path === '/') {
        app.appendChild(homeView());
      } else if (path === '/brand') {
        app.appendChild(brandView(param));
      } else if (path === '/products') {
        app.appendChild(productsView(param));
      } else if (path === '/checkout') {
        app.appendChild(checkoutView());
      } else {
        app.appendChild(homeView());
      }

      // Smooth fade in
      app.classList.add('page-enter');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          app.classList.remove('page-enter');
          app.classList.add('page-enter-active');
          setTimeout(() => app.classList.remove('page-enter-active'), 500);
        });
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 250);
  }
};
