import { createContext, PropsWithChildren, useContext, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import Cookie from 'js-cookie'
import { LoginDataI, LoginResponseI, UserSessionI } from '@models/Login.model'
import endpoints from '@services/endpoints'
import { access } from 'fs'

// {
//     "id": 1,
//     "email": "john@mail.com",
//     "password": "changeme",
//     "name": "Jhon",
//     "role": "customer",
//     "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=4677"
//   }

interface AuthContextI {
  user: UserSessionI
  signIn: (user: LoginDataI) => Promise<void>
}

const AuthContext = createContext<AuthContextI | null>(null)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const auth = useProviderAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

function useProviderAuth() {
  const [user, setUser] = useState<UserSessionI>({
    email: '',
    name: '',
    password: '',
    role: '',
    avatar: '',
    access_token: '',
  })

  const signIn = async (user: LoginDataI) => {
    const config: AxiosRequestConfig = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }

    const response = await axios.post<LoginResponseI>(endpoints.auth.login, user, config)

    if (response.data.access_token) {
      const jwt = response.data.access_token
      Cookie.set('token', jwt, { expires: 5 })
      axios.defaults.headers.Authorization = `Bearer ${jwt}`
      const { data } = await axios.get(endpoints.auth.profile)
      setUser({ ...data, access_token: jwt })
    }
  }
  return {
    user,
    signIn,
  }
}
