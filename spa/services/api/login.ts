import http from '~/services/http'
import { IAuth, ILogin } from '~/services/interface/login'

export const login = (data: ILogin): Promise<IAuth> => http.post('/auth/login', { data })

export const reg = (data: ILogin): Promise<IAuth> => http.post('/auth/register', { data })

export const loginTest = (): Promise<IAuth> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        token: '233'
      })
    }, 3000)
  })
}
