import request from './request'

const baseURL = ``
// const baseURL = 'http://192.168.29.238:7001'
request.config.baseURL = baseURL

const api = {
  getHomeData: (id) => request.get(`/v1/`)
  
}

export default api
