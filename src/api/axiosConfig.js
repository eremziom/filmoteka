import axios from 'axios'
import { testInterceptReq, testInterceptRes } from './interceptors'

const createAxios = axios.create

axios.create = (config) => {
  const instance = createAxios(config)
  instance.interceptors.request.use(testInterceptReq)
  instance.interceptors.response.use(testInterceptRes)
  return instance
}
console.log(axios.interceptors)

export default axios