import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import { theme } from './src/config/theme/themeVariables';
import { parse } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/test/',
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
        },
      ],
    }),
  ],
  // esbuild: { loader: { '.js': '.jsx'  } },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          ...theme,
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      // { find: '@', replacement: path.resolve(__dirname, 'src') },
      // fix less import by: @import ~
      // https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
      { find: /^~/, replacement: '' },
    ],
  },
  build: {
    outDir: './build',
    emptyOutDir: true,

    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          if (parse(asset.name).name === 'externalImage') {
            return 'images/src/[name][extname]';
          }
          return 'assets/[name].[hash][extname]';
        },
      },
    },
  },
});
