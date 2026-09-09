## 2024-05-18 - Expandable Accordion Accessibility
**Learning:** Using an `onClick` on a non-interactive `div` for expandable sections (accordions) creates keyboard accessibility issues, as users cannot tab to the header and press Enter/Space to expand it. In `Experience.tsx`, a `div` wrapped the header content with a nested `button` for the icon, which was semantically incorrect and un-navigable.
**Action:** When implementing expandable UI patterns like accordions, use a full-width `<button>` for the entire clickable header area. Ensure you remove any nested interactive elements (like a secondary button inside it) and correctly apply `aria-expanded` and `aria-controls` to the main button to provide clear screen reader support and natural keyboard navigation.

## 2024-10-27 - Linking Expandable Elements and Controls
**Learning:** For dynamic content toggles (like "Show More/Less" buttons expanding a list), relying solely on visual text changes isn't enough for screen readers. They need explicit relationships to understand what the button controls and its current state.
**Action:** When implementing any toggle button that expands or collapses a section, always add `aria-expanded={isExpanded}` to the button, give the target container a unique `id`, and link them using `aria-controls="target-id"` on the button.
