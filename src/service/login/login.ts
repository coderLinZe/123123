import zeRequest from '..'
import type { IAccount } from '@/types'

export function accountLoginRequest(account: IAccount) {
  return zeRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return zeRequest.get({
    url: `/users/${id}`
  })
}

export function getUserMenuByRoleId(id: number) {
  return zeRequest.get({
    url: `/role/${id}/menu`
  })
}
