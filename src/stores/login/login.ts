import { defineStore } from 'pinia'
import { accountLoginRequest, getUserInfoById, getUserMenuByRoleId } from '@/service/login/login'
import type { IAccount } from '@/types'
import localCache from '@/utils/localCache'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'
interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),

  getters: {},
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录，获取token信息
      const result = await accountLoginRequest(account)
      const id = result.data.id
      this.token = result.data.token
      // 2.进行本地缓存 token
      localCache.setCache('token', this.token)

      // 3.获取登录用户的详细信息 角色信息
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo

      // 4.根据角色请求用户的权限(菜单menus)
      const userMenusResult = await getUserMenuByRoleId(this.userInfo.role.id)
      const userMenus = userMenusResult.data
      this.userMenus = userMenus
      // 5.进行本地缓存
      localCache.setCache('userInfo', userInfo)
      localCache.setCache('userMenus', userMenus)

      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => router.addRoute('main', route))
      //页面跳转
      router.push('/main')
    },

    loadLocalCacheAction() {
      const token = localCache.getCache('token')
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus
        const routes = mapMenusToRoutes(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
