/**
 * load styles on demand
 */
import {
  createStyleImportPlugin,
  AndDesignVueResolve,
  AntdResolve
} from 'vite-plugin-style-import'

export function configStyleImportPlugin(isProduction: boolean) {
  // production is same with develop
  const styleImportPlugin = createStyleImportPlugin({
    resolves: [
      AndDesignVueResolve(),
      AntdResolve()
    ],
    libs: [
      {
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/index`
        }
      }
    ]
  })
  return styleImportPlugin
}