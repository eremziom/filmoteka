import axios from '../axiosConfig.js'

export default axios.create({
  baseURL: 'http://localhost:8000/fmt-api/',
  timeout: 2000
})