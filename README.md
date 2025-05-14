# 🎼 Managing Fonts (Petaluma & Others)

This folder is used to store musical fonts that are loaded using `opentype.js`, typically for rendering with VexFlow or any custom SVG rendering system.

---

## ➕ Adding a New Font

To include a new font in the project:

1. Drop the `.otf` or `.ttf` file into this `fonts/` directory.  
   For example: `MyNewFont.otf`

2. Run the encoding script using `uv`:

   ```bash
   uv run python encode_fonts_base64.py
   ```

3. This will automatically create a `.js` file next to the font file:  
   For instance:

   ```
   MyNewFont.otf ➜ MyNewFont.js
   ```

   The generated file:

   - Defines a `base64Font` variable containing the font data as a base64 string
   - Exports it as the default export

4. To load and use the font in your JavaScript/TypeScript code:

   ```js
   import base64Font from "./fonts/MyNewFont.js";
   import opentype from "opentype.js";
   import converter from "base64-arraybuffer";

   const font = opentype.parse(converter.decode(base64Font));
   ```

✅ All font loading is done synchronously—no need for `async` or `await`.

---

## ℹ️ VexFlow and Text Fonts

Text elements (like dynamics, annotations, and titles) in VexFlow are **not rendered using `opentype.js`**.  
They rely entirely on the SVG rendering context’s `font-family` property.

In summary:

- **Musical glyphs** (clefs, notes, etc.) are rendered using base64-loaded fonts via `opentype.js`
- **Text elements** follow standard CSS font styling in the SVG context

To change text styling in a VexFlow score, apply CSS or use the `setFont` method on the context.

---

## 📁 Example Folder Structure

```txt
fonts/
├── Petaluma.otf
├── Petaluma.js
├── PetalumaScript.otf
├── PetalumaScript.js
├── PetalumaText.otf
├── PetalumaText.js
├── encode_fonts_base64.py
└── README.md
```

---

## 🛠 Requirements

The script works with Python's built-in modules only—no third-party packages needed.

Use `uv` to run the script:

```bash
uv run python encode_fonts_base64.py
```
