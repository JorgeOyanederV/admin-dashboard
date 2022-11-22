import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/admin-dashboard/#'
})

// https://jorgeoyanederv.github.io/admin-dashboard/