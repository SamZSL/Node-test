import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 组件按需引入插件
import Compoents from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// 样式按需引入插件
import { createStyleImportPlugin, AndDesignVueResolve, AntdResolve} from 'vite-plugin-style-import'
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Compoents({
      resolvers: [
        AntDesignVueResolver()
      ]
    }),
    createStyleImportPlugin({
      resolves: [
        AndDesignVueResolve(),
        AntdResolve()
      ],
      libs: [
        // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          },
        },
      ],
    })
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
