import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { wrapperEnv } from './build/utils';
import { createVitePlugins } from './build/vite/plugin';
import { loadEnv } from 'vite';


function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(true),
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: '@',
        replacement: pathResolve('src') + '/',
      }
    ]
  },
  css: {
    // 支持less
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
