import { getEntireDepartment, getEntireMenus, getEntireRoles } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  entireRoles: any[]
  entireDepartment: any[],
  entireMenus:any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartment: [],
    entireMenus:[]
  }),
  actions: {
    async fetchEntireRolesAction() {
      const rolesResult = await getEntireRoles()
      const departmentResult = await getEntireDepartment()
      const menusResult = await getEntireMenus()
      this.entireRoles = rolesResult.data.list
      this.entireDepartment = departmentResult.data.list
      this.entireMenus = menusResult.data.list
    },
  }




})

export default useMainStore
