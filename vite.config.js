import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/credit_card_website/', // Ustawienie podstawowej ścieżki na GitHub Pages
});
