<img src="https://raw.githubusercontent.com/Team-Menyala/clover-design-system/main/.github/clover-ui-logo.png" alt="Clover Design System" /><br/>

A simple modern green design system. Built on react, based on [`@shadcn/ui`](https://ui.shadcn.com/), and adjusted based our needs. Feel free to use this design system for your projects.

## Setup (🛠️ in progress)

1. Install the package
```bash
npm install @team-menyala/clover
# or
yarn add @team-menyala/clover
# or
pnpm add @team-menyala/clover
```

2. Make sure you have Tailwind CSS installed and configured in your project ([__setup tutorial__](https://tailwindcss.com/docs/installation/)):
```bash
npm i -D tailwindcss
npx tailwindcss init
```

3. Add Clover's Tailwind to your `style.css`:
```css
@import "tailwindcss";
@import "@team-menyala/clover/style.css";
@source "@team-menyala/clover";

/* Fallback when postcss failed to recognize original source */
@source "../../node_modules/@team-menyala/clover";

/* Your css here */
```

## Usage

```tsx
import { Button } from '@team-menyala/clover';

function App() {
  return (
    <Button variant="primary">
      Click me!
    </Button>
  );
}
```

## Available Components

Please look at the website [__here__](https://clover-design-system.vercel.app)