import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import axios from 'axios'

import qs from 'qs'

import { ElMessage } from 'element-plus'
import { config } from './config'

const { result_code, base_url } = config

export const PATH_URL = base_url[import.meta.env.VITE_API_BASEPATH as keyof typeof base_url]

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: PATH_URL, // api 的 base_url
  timeout: config.request_timeout, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (
      config.method === 'post'
      && (config.headers as AxiosRequestHeaders)['Content-Type']
        === 'application/x-www-form-urlencoded'
    )
      config.data = qs.stringify(config.data)

    // ;(config.headers as AxiosRequestHeaders)['Token'] = 'test test'
    // get参数编码
    if (config.method === 'get' && config.params) {
      let url = config.url as string
      url += '?'
      const keys = Object.keys(config.params)
      for (const key of keys) {
        if (config.params[key] !== 0 && config.params[key] !== null)
          url += `${key}=${encodeURIComponent(config.params[key])}&`
      }
      url = url.substring(0, url.length - 1)
      config.params = {}
      config.url = url
    }

    // // Headers 增加 Token 信息
    // const tokenType = wsCache.get('tokenType')
    // if (tokenType === 'Bearer' && config.headers)
    //   config.headers.Authorization = `Bearer ${wsCache.get('accessToken')}`

    return config
  },
  (error: AxiosError) => {
    // Do something with request error
    Promise.reject(error)
  },
)

// response 拦截器
service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response.config.responseType === 'blob') {
      // 如果是文件流，直接过
      return response
    }
    else if (response.data.success || response.data.code === result_code) {
      return response.data
    }
    else {
      ElMessage.error(response.data.message || response.data.errMessage)
    }
  },
  (error: AxiosError) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  },
)

export { service }
