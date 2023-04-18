import useLoginStore from '@/stores/login/login'

function usePermissions(usePermissionId: string) {
  const loginStore = useLoginStore()
  const { permissions } = loginStore
  return !!permissions.find((item) => item.includes(usePermissionId))
}

export default usePermissions
