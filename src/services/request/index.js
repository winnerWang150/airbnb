import axios from 'axios'
import {BASE_URL, TIMEOUT} from './config.js'

class RequestHttp {
  constructor (baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.response.use((res) => {
      return res.data
    },
    err => {
      return err
    })
  }


  request (config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({...config, method: 'get'})
  }

  post(config) {
    return this.request({...config, method: 'post'})
  }
}
const requestHttp  = new RequestHttp(BASE_URL, TIMEOUT)

export default requestHttp