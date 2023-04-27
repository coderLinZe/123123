import localCache from '@/utils/localCache'
import { BASE_URL, TIME_OUT } from './config'
import ZERequest from './request'

const zeRequest = new ZERequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      // 每一个请求都自动携带token
      const token = localCache.getCache('token')
      if (config.headers && token) {
        // 类型缩小
        config.headers.Authorization = 'Bearer ' + token
      }
      return config
    }
  }

  
  
})

export default zeRequest
