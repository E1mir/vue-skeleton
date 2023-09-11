/// <reference types="vitest" />
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

import path from 'path'

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
