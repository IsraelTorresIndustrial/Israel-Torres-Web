## 2024-05-18 - Expandable Accordion Accessibility
**Learning:** Using an `onClick` on a non-interactive `div` for expandable sections (accordions) creates keyboard accessibility issues, as users cannot tab to the header and press Enter/Space to expand it. In `Experience.tsx`, a `div` wrapped the header content with a nested `button` for the icon, which was semantically incorrect and un-navigable.
**Action:** When implementing expandable UI patterns like accordions, use a full-width `<button>` for the entire clickable header area. Ensure you remove any nested interactive elements (like a secondary button inside it) and correctly apply `aria-expanded` and `aria-controls` to the main button to provide clear screen reader support and natural keyboard navigation.

## 2025-03-05 - Implicit Button Contexts in Mockups
**Learning:** Interactive mockup components frequently use minimalist button labels (like "01", "Fase 01", or just icons) for aesthetic reasons, but these completely lack context for screen readers when removed from visual flow.
**Action:** Always add descriptive `aria-label`s to custom "tab" or toggle buttons that explain what selecting them actually does (e.g. "Select slide: Executive Point of View" instead of just "01"), and use `aria-pressed` or `aria-selected` to indicate state.
