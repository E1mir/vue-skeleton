import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // For git-pages, gets package name from package.json
  base: process.env.NODE_ENV === 'production' ? process.env.npm_package_name : '/',
  plugins: [Vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/_variables.scss";`
      }
    }
  }
})
