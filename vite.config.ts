import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { compression } from 'vite-plugin-compression2'
import unFonts from 'unplugin-fonts/vite'
import svgLoader from 'vite-svg-loader'

import { customFonts } from './config/fonts'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    compression(),
    svgLoader(),
    unFonts({ custom: { families: customFonts } }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
