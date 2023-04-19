import {
  deletePageById,
  deleteUserById,
  editUserData,
  newUserData,
  postPageListData,
  usersListData,
  editPageData,
  newPageData
} from '@/service/main/system/system'
import { defineStore } from 'pinia'
import type { IUser } from './type'
import useMainStore from '../main'
import { ElMessage } from 'element-plus'

interface ISystemStore {
  usersList: IUser[]
  totalCount: number
  pageList: IUser[]
  pageTotalCount: number
}

const useSystemStore = defineStore('system', {
  state: (): ISystemStore => ({
    usersList: [],
    totalCount: 0,
    pageList: [],
    pageTotalCount: 0
  }),

  actions: {
    // 用户列表数据
    async usersListDataAction(queryInfo: any) {
      const usersListResult = await usersListData(queryInfo)
      this.usersList = usersListResult.data.list
      this.totalCount = usersListResult.data.totalCount
    },

    async deleteUserByIdAction(id: number) {
      // 删除用户
      const deleteResult = await deleteUserById(id)
      console.log(deleteResult)
      this.usersListDataAction({ offset: 0, size: 10 })
    },

    async newUserDataAction(userInfo: any) {
      // 创建用户
      const newUserResult = await newUserData(userInfo)
      console.log(newUserResult)
      this.usersListDataAction({ offset: 0, size: 10 })
    },

    async editUserByIdAction(id: number, userInfo: any) {
      // 更新用户数据
      const newUserResult = await editUserData(id, userInfo)
      console.log(newUserResult)
      this.usersListDataAction({ offset: 0, size: 10 })
    },

    // 页面数据增删改查
    // 查询列表数据
    async postPageListDataAction(pageName: string, queryInfo: any) {
      const pageListResult = await postPageListData(pageName, queryInfo)
      this.pageList = pageListResult.data.list
      this.pageTotalCount = parseInt(pageListResult.data.totalCount)
    },
    // 删除数据
    async deletePageByIdAction(pageName: string, id: number) {
      const deleteResult = await deletePageById(pageName, id)
      console.log(deleteResult)
      this.postPageListDataAction(pageName, { offset: 0, size: 10 })
      // 重新发送请求，获取最新完整数据
      const mainStore = useMainStore()
      mainStore.fetchEntireRolesAction()
    },
    // 修改数据
    async editPageDataAction(pageName: string, id: number, queryInfo: any) {
      const editResult = await editPageData(pageName, id, queryInfo)
      ElMessage({
        type: 'success',
        message: editResult.data,
        duration: 800
      })
      console.log(editResult)
      this.postPageListDataAction(pageName, { offset: 0, size: 10 } )

       // 重新发送请求，获取最新完整数据
       const mainStore = useMainStore()
       mainStore.fetchEntireRolesAction()
    },
    // 新建数据
    async newPageDataAction(pageName: string, queryInfo: any) {
      const newPageResult = await newPageData(pageName, queryInfo)
      console.log(newPageResult)
      ElMessage({
        type: 'success',
        message: newPageResult.data,
        duration: 800
      })
      this.postPageListDataAction(pageName, { offset: 0, size: 10 })
      // 重新发送请求，获取最新完整数据
      const mainStore = useMainStore()
      mainStore.fetchEntireRolesAction()
    }
  }
})

export default useSystemStore
