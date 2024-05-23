import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import glob from 'fast-glob';
import postcssConfig from './postcss.config';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const urlToPath = (url) => fileURLToPath(new URL(url));

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 86,
      },
      jpeg: {
        quality: 86,
      },
      jpg: {
        quality: 86,
      },
    }),
    {
      ...imagemin(['./src/img/**/*.{jpg,png,jpeg}'], {
        destination: './src/img/webp/',
        plugins: [imageminWebp({ quality: 86 })],
      }),
      apply: 'serve',
    },
  ],
  css: {
    postcss: postcssConfig,
  },
  build: {
    minify: false,
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync(['./*.html', './pages/**/*.html'])
          .map((file) => [
            file.slice(0, file.lastIndexOf('.')),
            urlToPath(new URL(file, import.meta.url)),
          ]),
      ),

      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
