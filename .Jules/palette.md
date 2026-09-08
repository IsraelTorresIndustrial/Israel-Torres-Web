## 2024-05-18 - Expandable Accordion Accessibility
**Learning:** Using an `onClick` on a non-interactive `div` for expandable sections (accordions) creates keyboard accessibility issues, as users cannot tab to the header and press Enter/Space to expand it. In `Experience.tsx`, a `div` wrapped the header content with a nested `button` for the icon, which was semantically incorrect and un-navigable.
**Action:** When implementing expandable UI patterns like accordions, use a full-width `<button>` for the entire clickable header area. Ensure you remove any nested interactive elements (like a secondary button inside it) and correctly apply `aria-expanded` and `aria-controls` to the main button to provide clear screen reader support and natural keyboard navigation.

## 2025-03-09 - Accessible Disclosure Widgets Binding
**Learning:** For screen reader users to understand the relationship between a toggle button and its expanding content, `aria-expanded` is not enough. The toggle button must also use `aria-controls` pointing to the `id` of the container that expands. This ensures structural parity between visual presentation and accessibility trees.
**Action:** Always add both `aria-expanded` and `aria-controls` to disclosure toggle buttons, and ensure the target element has a corresponding matching `id`.
