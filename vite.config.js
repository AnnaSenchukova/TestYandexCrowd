import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/scripts.js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? '';
          if (/\.(png|jpe?g|webp|avif|gif|svg)$/i.test(name)) {
            return 'assets/img/[name][extname]';
          }
          if (/\.css$/i.test(name)) {
            return 'assets/css/styles[extname]';
          }
          if (/\.(woff2?|ttf|otf|eot)$/i.test(name)) {
            return 'assets/fonts/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 3000,
  },
  plugins: [
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      svg: {
        plugins: [{ name: 'preset-default' }, { name: 'removeViewBox', active: false }],
      },
    }),
  ],
});
