export interface UserI {
  id?: number
  email: string
  name: string
  password: string
  role: string
  avatar: string
}

export interface CreateUserI extends Pick<UserI, 'name' | 'email' | 'password'> {}
