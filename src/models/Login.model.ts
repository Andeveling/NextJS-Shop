import { UserI } from './User.model'

export interface LoginDataI extends Pick<UserI, 'email' | 'password'> {}
export interface LoginResponseI {
  access_token: string
}
export interface UserSessionI extends UserI {
  access_token: string
}
