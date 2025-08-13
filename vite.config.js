import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  root: './front-end',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', 
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './front-end/src'),
    },
  },
})
