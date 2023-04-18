import zeRequest from '@/service'

export function getEntireRoles() {
  return zeRequest.post({
    url: '/role/list',
    data: {
      offset: 0,
      size: 9999
    }
  })
}

export function getEntireDepartment() {
  return zeRequest.post({
    url: '/department/list',
    data: {
      offset: 0,
      size: 9999
    }
  })
}

export function getEntireMenus() {
  return zeRequest.post({
    url: `/menu/list`
  })
}
