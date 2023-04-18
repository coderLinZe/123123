// /// <reference types="vite/client" />

// `declare module'element-plus/dist/locale/zh-cn.mjs';`
/// <reference types="vite/client" />

// 简单版本
declare module '*.mjs'
declare module '*.web.json'
declare module '*editor-for-vue'


// 推荐使用
declare module '*.vue' {
  // 引入vue模块中ts的方法
  import type { DefineComponent } from 'vue'
  // 定义vue组件以及类型注解
  const component: DefineComponent<{}, {}, any>
  export default component
}
