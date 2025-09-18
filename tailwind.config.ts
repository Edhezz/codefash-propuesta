// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config = {
  darkMode: "class", // Ya confirmamos que esto está bien
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // <-- ¿Están estas rutas?
  ],
  theme: {
    // ... tu tema
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
