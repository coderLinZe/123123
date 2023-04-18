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
      if (route) {
        // 将route的顶层菜单增加到重定向功能
        if (!routes.find((item) => item.path === menu.url)) {
          // redirect 当用户输入路由和现有路由不匹配时跳转
          routes.push({ path: menu.url, redirect: route.path })
        }
        // 将2级菜单对应的路径添加到routes
        routes.push(route)
      }
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

// 面包屑
interface IBreadcrumbs {
  name: string
  path: string
}
export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
  const breadcrumbs: IBreadcrumbs[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        breadcrumbs.push({ name: menu.name, path: menu.url })
        breadcrumbs.push({ name: submenu.name, path: submenu.url })
      }
    }
  }

  return breadcrumbs
}

/**
 *  菜单映射到id的列表
 * @param menulist
 */
export function mapMenuListToIds(menulist: any[]) {
  const ids: number[] = []

  function recurseGetId(menus: any[]) {
    for (const item of menus) {
      if (item.children) {
        recurseGetId(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }
  recurseGetId(menulist)

  return ids
}

/**
 * 从菜单映射到按钮的权限
 * @param menulist 菜单列表
 * @returns 权限的数据（字符串数组）
 */

export function mapMenusToPermissions(menuList: any[]) {
  const permissions: string[] = []

  function recurseGetPermissions(menus: any[]) {
    for (const item of menus) {
      if (item.type === 3) {
        permissions.push(item.permission)
      } else {
        recurseGetPermissions(item.children ?? [])
      }
    }
  }
  recurseGetPermissions(menuList)
  return permissions
}
