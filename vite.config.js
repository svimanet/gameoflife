import { defineConfig } from 'vite';

export default defineConfig({
  base: '/gameoflife/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: './index.html',
      },
      output: {
        assetFileNames: () => '[name].[ext]',
        entryFileNames: () => '[name].js'
      },
    },
  },
});
