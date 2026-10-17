## 2024-05-18 - Expandable Accordion Accessibility
**Learning:** Using an `onClick` on a non-interactive `div` for expandable sections (accordions) creates keyboard accessibility issues, as users cannot tab to the header and press Enter/Space to expand it. In `Experience.tsx`, a `div` wrapped the header content with a nested `button` for the icon, which was semantically incorrect and un-navigable.
**Action:** When implementing expandable UI patterns like accordions, use a full-width `<button>` for the entire clickable header area. Ensure you remove any nested interactive elements (like a secondary button inside it) and correctly apply `aria-expanded` and `aria-controls` to the main button to provide clear screen reader support and natural keyboard navigation.

## 2024-05-19 - Desktop/Mobile Navigation Inconsistency
**Learning:** Found a pattern in `Navbar.tsx` where accessibility features and visual states (like `aria-current="location"` for the active section) were implemented correctly on the desktop navigation links but completely missed in the mobile drawer implementation.
**Action:** Always verify that responsive components (especially split desktop/mobile implementations like navigation bars) share the exact same accessibility attributes, ARIA roles, and active state indicators across all breakpoints.
