import zeRequest from '@/service'

export function usersListData(queryInfo: any) {
  return zeRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}

export function deleteUserById(id: number) {
  return zeRequest.delete({
    url: `/users/${id}`
  })
}

export function newUserData(userInfo: any) {
  return zeRequest.post({
    url: '/users',
    data: userInfo
  })
}

export function editUserData(id: number, queryInfo: any) {
  return zeRequest.patch({
    url: `/users/${id}`,
    data: queryInfo
  })
}

// 页面增删改查

// 查询列表数据
export function postPageListData(pageName: string, queryInfo: any) {
  return zeRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

// 删除数据
export function deletePageById(pageName: string, id: number) {
  return zeRequest.delete({
    url: `/${pageName}/${id}`
  })
}

// 修改数据
export function editPageData(pageName: string, id: number, queryInfo: any) {
  return zeRequest.patch({
    url: `/${pageName}/${id}`,
    data: queryInfo
  })
}

// 新建数据
export function newPageData(pageName:any,userInfo: any) {
  return zeRequest.post({
    url: `/${pageName}`,
    data: userInfo
  })
}