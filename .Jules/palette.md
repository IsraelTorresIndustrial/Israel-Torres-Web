## 2023-10-27 - Semantic Accordions

**Learning:** When creating accordions, it's better to use a single semantic `<button>` for the entire clickable area rather than a nested button inside a clickable `div`. This ensures that screen readers announce the entire element as a button, handle keyboard focus correctly, and correctly associate `aria-expanded` and `aria-controls` with the entire interactive element.

**Action:** Whenever I encounter a clickable `div` that toggles content visibility, I should refactor it into a `<button>` with `aria-expanded` and `aria-controls` attributes linking it to the content it toggles, and ensuring clear focus styles.
