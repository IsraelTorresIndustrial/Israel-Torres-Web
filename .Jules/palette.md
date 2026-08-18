## 2024-03-24 - Accordion keyboard accessibility
**Learning:** React component accordions created with `div` and `onClick` handlers cannot receive keyboard focus (`Tab`) or be toggled by `Space` / `Enter`. Furthermore, nesting a real `<button>` inside an interactive `<div>` creates a confusing, partially accessible structure.
**Action:** Always replace interactive `div` wrappers with a semantic `<button>` spanning the full width (`w-full text-left`), attach the toggle handler to it, and ensure state is correctly exposed via `aria-expanded` and `aria-controls`.
