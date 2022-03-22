import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 组件按需引入插件
import Compoents from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Compoents({
    //   resolvers: [
    //     AntDesignVueResolver()
    //   ]
    // })
  ],
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
