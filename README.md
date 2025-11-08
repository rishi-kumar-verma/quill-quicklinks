# quill-quicklinks

A React 16.13-compatible wrapper for Quill 2.0.3 with custom QuickLinks above the toolbar.

## Install

```bash
npm install quill-quicklinks


```md
## ✨ Features

- React 16.13 compatible
- Quill 2.0.3 modular integration
- Optional QuickLinks menu above toolbar
- Dynamic module injection (e.g., 'link', 'mention')
- Toggle QuickLinks visibility via `show` prop

## 🚀 Installation

```bash
npm install quill-quicklinks quill@2.0.3 react@16.13.1 react-dom@16.13.1
```

## 🧩 Usage

```tsx
import { QuillEditor } from 'quill-quicklinks';

function App() {
  return (
    <QuillEditor
      showQuickLinksMenu={true}
      defaultModule="link"
      modules={{
        toolbar: [['bold', 'italic'], ['link']],
      }}
      quickLinks={[
        { label: 'GitHub', url: 'https://github.com', text: 'GitHub' },
        { label: 'npm', url: 'https://npmjs.com', text: 'npm' },
      ]}
    />
  );
}
```

## 📦 Props

| Prop           | Type                     | Description                                      |
|----------------|--------------------------|--------------------------------------------------|
| `show`         | `boolean`                | Show/hide the QuickLinks menu                   |
| `modules`      | `Record<string, any>`    | Quill modules config (e.g., toolbar, clipboard) |
| `quickLinks`   | `QuickLink[]`            | Array of links to inject                        |
| `defaultModule`| `string`                 | Fallback module name (default: `'link'`)        |

---

## 🧠 JSDoc Comments for DX

### `QuickLinksMenu.tsx`

```tsx
/**
 * Renders a menu of quick links above the Quill toolbar.
 * Each link inserts formatted text into the editor.
 *
 * @param quill - Quill instance
 * @param quickLinks - Array of links to insert
 * @param show - Whether to show the menu
 * @param defaultModule - Default Quill module to use (e.g., 'link')
 */
```

### `QuillEditor.tsx`

```tsx
/**
 * A React wrapper for Quill 2.0.3 with optional QuickLinks menu.
 *
 * @param show - Whether to show QuickLinksMenu
 * @param modules - Quill modules configuration
 * @param quickLinks - Array of links to inject
 * @param defaultModule - Default module for QuickLinks (e.g., 'link')
 */
```