import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import PurgeIcons from 'vite-plugin-purge-icons'

const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    PurgeIcons()
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
    alias: [
      {
        find: /\@\//,
        replacement: `${pathResolve('src')}/`
      }
    ]
  },
  server: {
    port: 4000,
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '')
      }
    },
    hmr: {
      overlay: false
    },
    host: '0.0.0.0'
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/styles/variables.module.less";',
        javascriptEnabled: true
      }
    }
  },
})
