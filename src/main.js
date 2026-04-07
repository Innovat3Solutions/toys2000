import './styles/index.css';
import './styles/components.css';
import './styles/home.css';
import './styles/checkout.css';
import './styles/products.css';
import './styles/modals.css';

import { createNavbar } from './components/navbar.js';
import { createCartModal } from './components/cartModal.js';
import { createToastContainer } from './components/toast.js';
import { createQuickViewModal } from './components/quickView.js';
import { createQuoteModal } from './components/quoteModal.js';
import { createCatalogViewer } from './components/catalogViewer.js';
import { router } from './js/router.js';

function initApp() {
  const app = document.getElementById('app');

  // Create static elements
  const navbar = createNavbar();
  const cartComponents = createCartModal();
  const quickViewComponents = createQuickViewModal();
  const quoteComponents = createQuoteModal();
  const toastContainer = createToastContainer();
  const catalogComponents = createCatalogViewer();

  app.appendChild(navbar);
  app.appendChild(cartComponents.overlay);
  app.appendChild(cartComponents.drawer);
  app.appendChild(quickViewComponents.overlay);
  app.appendChild(quickViewComponents.modal);
  app.appendChild(quoteComponents.overlay);
  app.appendChild(quoteComponents.modal);
  app.appendChild(catalogComponents.overlay);
  app.appendChild(catalogComponents.modal);
  app.appendChild(toastContainer);

  // Create dynamic content container
  const content = document.createElement('main');
  content.id = 'app-content';
  content.className = 'main-content';
  app.appendChild(content);

  // Navigate to home
  router.navigate('/');
}

initApp();
