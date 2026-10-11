import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base './' agar hasil build bisa berjalan di GitHub Pages maupun Vercel
export default defineConfig({
  base: './',
  plugins: [react()],
})
