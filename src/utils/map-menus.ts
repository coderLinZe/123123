import type { RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  const localRouters: RouteRecordRaw[] = []
  // 1.获取到router/main下面所有的.ts文件里面的路由对象
  const files: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
    eager: true
  })
  // 2.将加载的路由对象放进 localRouters
  for (const key in files) {
    const module = files[key]
    localRouters.push(module.default)
  }
  return localRouters
}
export let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]) {
  // 加载本地路由
  const localRoutes = loadLocalRoutes()

  //根据菜单匹配正确路由
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      // 添加动态路由
      if (route) routes.push(route)

      //   记录第一个匹配的菜单
      if (firstMenu === null && route) firstMenu = submenu
    }
  }
  return routes
}

/**
 * 根据路径匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param userMenus  所有的菜单
 */

export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu
      }
    }
  }
}
