import axios from 'axios'
import { refreshToken } from './refreshToken'

export const api = axios.create({
  baseURL: 'https://todolist-backend-yxri.onrender.com/',
  withCredentials: true
})

api.interceptors.request.use(
  response => response,
  async error => {
    if(error.response?.status === 401) {
      try {
        const { token } = await refreshToken()

        localStorage.setItem('@token', token)
        error.config.headers.Authorization = `Bearer ${token}`

        return api(error.config)
      } catch {
        localStorage.removeItem('@token')
        localStorage.removeItem('@refreshToken')
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)