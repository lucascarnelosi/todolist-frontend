import { useEffect, useState, type ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { login as loginService } from '../services/auth';
import { logout as logoutService } from '../services/logout';
import type { User } from '../types/Auth';
import { getMe } from '../services/user';
import { api } from '../services/api';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  
  const isAuthenticated = !!user;

  useEffect(() => {
    const token = localStorage.getItem('@token')

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      getMe()
        .then(user => {
          setUser(user)
        })
        .catch(() => {
          localStorage.removeItem('@app:token')
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [])

  async function signIn(email: string, password: string) {
    const { user, token } = await loginService(email, password)

    localStorage.setItem('@token', token)
    setUser(user)

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  function signOut() {
    logoutService()

    localStorage.removeItem('@token')
    localStorage.removeItem('@refreshToken')

    setUser(null)
  }

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}