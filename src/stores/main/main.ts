import { getEntireDepartment, getEntireRoles } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  entireRoles: any
  entireDepartment: any
}

const useMianStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartment: []
  }),
  actions: {
    async fetchEntireRolesAction() {
      const rolesResult = await getEntireRoles()
      const departmentResult = await getEntireDepartment()
      this.entireRoles = rolesResult.data.list
      this.entireDepartment = departmentResult.data.list
    }
  }
})

export default useMianStore
