import { defineConfig } from 'vite'
import { resolve } from 'path';

export default defineConfig({
  server: {
    open: true,
  },

  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
