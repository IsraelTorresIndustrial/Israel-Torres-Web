import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { normalizePath } from './router';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Pages are prerendered at build time. Hydrate only when the markup belongs to this
// URL; unknown paths served via the SPA fallback (home markup) render from scratch.
const prerendered = container.dataset.prerendered;
if (prerendered && prerendered === normalizePath(window.location.pathname)) {
  hydrateRoot(container, app);
} else {
  container.textContent = '';
  createRoot(container).render(app);
}
