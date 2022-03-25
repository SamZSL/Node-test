import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configStyleImportPlugin } from './styleImport'
// 组件按需引入插件
import Compoents from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export function createVitePlugins(isProduction: boolean) {

  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    Compoents({
      resolvers: [
        AntDesignVueResolver()
      ]
    })
  ]
  vitePlugins.push(configStyleImportPlugin(isProduction))

  return vitePlugins
}