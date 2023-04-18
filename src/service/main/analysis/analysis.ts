import zeRequest from '@/service'

export function getAmountListData() {
  return zeRequest.get({
    url: '/goods/amount/list'
  })
}

export function getGoodsCategoryCount() {
  return zeRequest.get({
    url: '/goods/category/count'
  })
}

export function getGoodsAddressSale() {
  return zeRequest.get({
    url: '/goods/address/sale'
  })
}


export function getGoodsCategorySale() {
  return zeRequest.get({
    url: '/goods/category/sale'
  })
}

export function getGoodsCategoryFavor() {
  return zeRequest.get({
    url: '/goods/category/favor'
  })
}