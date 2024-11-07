import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.svg'], // if needed
})
