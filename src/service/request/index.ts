import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ZEConfig } from './type'
import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/es/components/loading/src/loading'
// 拦截器: 蒙版Loading/token/修改配置
/**
 * 两个难点:
 *  1.拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *  2.响应结果的类型处理(泛型)
 */

// const DEAFULT_LOADING = true

class ZERequest {
  loading?: LoadingInstance
  // showLoading: boolean
  instance: AxiosInstance
  // request实例 => axios的实例
  constructor(config: ZEConfig) {
    // axios的实例
    this.instance = axios.create(config)
    // 保存基本信息
    // this.showLoading = config.showLoading ?? DEAFULT_LOADING
    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        // console.log('全局请求成功的拦截')
        this.loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        return config
      },
      (err) => {
        // console.log('全局请求失败的拦截')
        // 将loading移除
        this.loading?.close()
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局响应成功的拦截')
        // 将loading移除
        this.loading?.close()
        return res.data
      },
      (err) => {
        // console.log('全局响应失败的拦截')
        // 将loading移除
        this.loading?.close()
        return err
      }
    )

    // 针对特定的Request实例添加拦截器
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors.requestSuccessFn,
        config.interceptors.requestFailureFn
      )
      this.instance.interceptors.response.use(
        config.interceptors.responseSuccessFn,
        config.interceptors.responseFailureFn
      )
    }
  }

  // 封装网络请求的方法
  // T => IHomeData
  request<T = any>(config: ZEConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config)
        .then((res) => {
          // 单词响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: ZEConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: ZEConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: ZEConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: ZEConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default ZERequest
