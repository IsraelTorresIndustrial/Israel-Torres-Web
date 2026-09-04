## 2024-05-18 - Expandable Accordion Accessibility
**Learning:** Using an `onClick` on a non-interactive `div` for expandable sections (accordions) creates keyboard accessibility issues, as users cannot tab to the header and press Enter/Space to expand it. In `Experience.tsx`, a `div` wrapped the header content with a nested `button` for the icon, which was semantically incorrect and un-navigable.
**Action:** When implementing expandable UI patterns like accordions, use a full-width `<button>` for the entire clickable header area. Ensure you remove any nested interactive elements (like a secondary button inside it) and correctly apply `aria-expanded` and `aria-controls` to the main button to provide clear screen reader support and natural keyboard navigation.

## 2026-09-04 - ARIA Controls on Expandable Elements
**Learning:** Expandable elements that use `aria-expanded` need matching `aria-controls` pointing to the ID of the element they expand, ensuring screen readers can correctly associate the toggle with the content.
**Action:** Always add an ID to the target expandable `div` or container and use that exact ID in the button's `aria-controls` attribute.
