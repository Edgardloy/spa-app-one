import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import federation from "@originjs/vite-plugin-federation";

const root = process.cwd()

function pathResolve(dir) {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
        name: 'host-app',
        remotes: {
            layout_app: "http://accueil-spa-layout.test/assets/remoteEntry.js",
            // layout_app: "http://spa-layout.test/assets/remoteEntry.js",
        },
        shared: ['vue', 'element-plus', 'pinia', 'vue-router']
    })
  ],
  build: {
    target: "esnext",
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
    alias: [
      {
        find: /\@\//,
        replacement: `${pathResolve('src')}/`
      }
    ]
  },
})
