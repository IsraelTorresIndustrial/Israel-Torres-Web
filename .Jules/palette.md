## 2024-05-18 - Expandable Accordion Accessibility
**Learning:** Using an `onClick` on a non-interactive `div` for expandable sections (accordions) creates keyboard accessibility issues, as users cannot tab to the header and press Enter/Space to expand it. In `Experience.tsx`, a `div` wrapped the header content with a nested `button` for the icon, which was semantically incorrect and un-navigable.
**Action:** When implementing expandable UI patterns like accordions, use a full-width `<button>` for the entire clickable header area. Ensure you remove any nested interactive elements (like a secondary button inside it) and correctly apply `aria-expanded` and `aria-controls` to the main button to provide clear screen reader support and natural keyboard navigation.

## 2026-09-15 - Expandable Section Linkage
**Learning:** Expandable sections must have `aria-controls` explicitly linking the control button to the section `id` to inform screen readers of the relationship, in addition to using a full-width wrapper button as learned previously.
**Action:** When implementing accordions, always generate matched `id`s for the content panel and reference them via `aria-controls` on the toggling button.
