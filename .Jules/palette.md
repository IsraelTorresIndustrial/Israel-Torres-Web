## 2025-03-08 - Accessible Accordion Headers

**Learning:** When creating accordion or expanding list items, it's a common anti-pattern to use `<div>` with `onClick` for the entire header, making it inaccessible to keyboard users (no focus state, cannot be activated with Enter/Space).

**Action:** Always use a semantic `<button>` spanning the full width (`w-full text-left`) for the accordion header, and include `aria-expanded` and `aria-controls` attributes. Use CSS transitions (e.g., `rotate-180 duration-300`) on a single icon for smoother micro-interactions instead of swapping different SVG icons on state change.
