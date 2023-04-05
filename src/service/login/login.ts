import zeRequest from '..'
import type { IAccount } from '@/types'
import localCache from '@/utils/localCache'

export function accountLoginRequest(account: IAccount) {
  return zeRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return zeRequest.get({
    url: `/users/${id}`,
    headers: {
      Authorization: 'Bearer ' + localCache.getCache('token')
    }
  })
}

export function getUserMenuByRoleId(id: number) {
  return zeRequest.get({
    url: `/role/${id}/menu`,
    headers: {
      Authorization: 'Bearer ' + localCache.getCache('token')
    }
  })
}
