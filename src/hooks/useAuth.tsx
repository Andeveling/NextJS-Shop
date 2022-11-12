import { createContext, PropsWithChildren, useContext, useState } from 'react'
import axios from 'axios'
import Cookie from 'js-cookie'
import { LoginDataI } from '@models/Login'

const initialValues: LoginDataI = {
  email: '',
  password: '',
}

export const AuthContext = createContext<LoginDataI>(initialValues)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const auth: LoginDataI = {
    email: '',
    password: '',
  }
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

function useProviderAuth() {
  const [user, setUser] = useState<LoginDataI | null>(null)
  const signIn = async ({ email, password }: LoginDataI) => setUser(initialValues)
}
