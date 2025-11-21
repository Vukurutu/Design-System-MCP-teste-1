# Design System - Button Component

A comprehensive, accessible Button component built with React, TypeScript, and Tailwind CSS, based on the shadcn/ui design system from Figma.

## Features

- ✅ **6 Visual Variants**: Primary, Secondary, Outline, Ghost, Link, and Link Secondary
- ✅ **2 Sizes**: Small (sm) and Medium (md)
- ✅ **Multiple States**: Normal, Hover, Focused, Disabled, and Loading
- ✅ **Destructive Mode**: Red color scheme for dangerous actions
- ✅ **Icon Support**: Left and right icon slots
- ✅ **Fully Typed**: Complete TypeScript definitions
- ✅ **WCAG AA Compliant**: Accessible with proper ARIA attributes
- ✅ **Tailwind CSS**: Utility-first styling approach
- ✅ **JSDoc Documentation**: Comprehensive inline documentation

## Installation

Ensure you have the following dependencies installed:

```bash
npm install react react-dom
npm install -D typescript @types/react @types/react-dom
npm install -D tailwindcss postcss autoprefixer
```

## Usage

### Basic Example

```tsx
import { Button } from './components/Button';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

### With Icons

```tsx
import { Button } from './components/Button';
import { PlusIcon } from './icons';

function App() {
  return (
    <Button variant="primary" leftIcon={<PlusIcon />}>
      Add Item
    </Button>
  );
}
```

### Loading State

```tsx
import { Button } from './components/Button';

function App() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await submitForm();
    setLoading(false);
  };

  return (
    <Button variant="primary" loading={loading} onClick={handleSubmit}>
      Submit
    </Button>
  );
}
```

### Destructive Actions

```tsx
import { Button } from './components/Button';

function App() {
  return (
    <Button variant="primary" destructive>
      Delete Account
    </Button>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'link' \| 'linkSecondary'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md'` | `'md'` | Button size |
| `destructive` | `boolean` | `false` | Applies destructive (red) color scheme |
| `loading` | `boolean` | `false` | Shows loading spinner and disables button |
| `leftIcon` | `ReactNode` | - | Icon displayed on the left |
| `rightIcon` | `ReactNode` | - | Icon displayed on the right |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | - | Additional CSS classes |
| `aria-label` | `string` | - | Accessibility label |
| `children` | `ReactNode` | - | Button content |

All standard HTML button attributes are also supported.

## Variants

### Primary
Solid dark background with light text. Best for primary actions.

```tsx
<Button variant="primary">Primary Action</Button>
```

### Secondary
Light background with dark text. For secondary actions.

```tsx
<Button variant="secondary">Secondary Action</Button>
```

### Outline
White background with border. Subtle, non-intrusive actions.

```tsx
<Button variant="outline">Outline Action</Button>
```

### Ghost
No background, only text. Minimal visual weight.

```tsx
<Button variant="ghost">Ghost Action</Button>
```

### Link
Styled as a link with underline on hover.

```tsx
<Button variant="link">Link Action</Button>
```

### Link Secondary
Secondary link style with muted color.

```tsx
<Button variant="linkSecondary">Link Secondary</Button>
```

## Sizes

### Medium (Default)
Standard button size: 40px height with appropriate padding.

```tsx
<Button size="md">Medium Button</Button>
```

### Small
Compact button: 36px height with adjusted padding.

```tsx
<Button size="sm">Small Button</Button>
```

## Accessibility

The Button component follows WCAG AA guidelines:

- **Keyboard Navigation**: Full keyboard support with Enter and Space keys
- **Focus Indicators**: Visible focus rings using `focus-visible`
- **ARIA Attributes**: Proper `aria-disabled`, `aria-busy`, and `aria-label` support
- **Disabled State**: Prevents interaction when disabled or loading
- **Color Contrast**: All color combinations meet WCAG AA contrast requirements

### Example with ARIA Label

```tsx
<Button
  variant="primary"
  leftIcon={<PlusIcon />}
  aria-label="Add new item to shopping cart"
/>
```

## Styling

The component uses Tailwind CSS utility classes. Make sure your `tailwind.config.js` includes the component path:

```js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Custom Styling

You can extend styles using the `className` prop:

```tsx
<Button variant="primary" className="w-full shadow-lg">
  Full Width Button
</Button>
```

## Component Structure

```
src/
├── components/
│   ├── Button.tsx           # Main component
│   └── Button.example.tsx   # Usage examples
└── README.md               # This file
```

## Figma Design Source

This component is based on the [shadcn/ui Design System](https://www.figma.com/design/3TQy6pRGeE6BboJ2GXt51G/OpenSource-shadcn-ui---kit-for-Figma--Community-?node-id=2718-8237) from Figma Community.

## License

MIT
