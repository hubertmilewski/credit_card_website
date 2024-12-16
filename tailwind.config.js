/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Mały cień tekstu
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Domyślny cień tekstu
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)', // Duży cień tekstu
      },
    },
  },
  plugins: [
    require('tailwindcss-motion'),
    require('tailwindcss-textshadow'),
  ],
  safelist: [
    {
      pattern: /bg-\[\#[0-9a-fA-F]{6}\]/, // Dynamiczne klasy jak bg-[#333333]
    },
    {
      pattern: /text-\[\#[0-9a-fA-F]{6}\]/, // Dynamiczne klasy jak text-[#ffffff]
    },
  ],
};