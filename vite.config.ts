import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { ElementPlusResolve, createStyleImportPlugin } from 'vite-plugin-style-import'
import vueJsx from '@vitejs/plugin-vue-jsx'

// Uno CSS
import UnoCSS from 'unocss/vite'

const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        resolveStyle: (name) => {
          return `element-plus/es/components/${name.substring(3)}/style/css`
        },
      }],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/styles/variables.module.less";',
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
    alias: [
      {
        find: /\@\//,
        replacement: `${pathResolve('src')}/`,
      },
    ],
  },
  server: {
    port: 4000,
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '')
      },
      '/v3': {
        target: 'https://run.mocky.io',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '')
      },
    },
    hmr: {
      overlay: false,
    },
    host: '0.0.0.0',
  },
})
