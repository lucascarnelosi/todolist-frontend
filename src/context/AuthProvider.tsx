import { useEffect, useState, type ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { login as loginService } from '../services/auth';
import { logout as logoutService } from '../services/logout';
import type { User } from '../types/Auth';
import { getMe } from '../services/user';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  
  const isAuthenticated = !!user;

  useEffect(() => {
    const token = localStorage.getItem('@token')

    if (!token) {
      setLoading(false)
      return
    }

    getMe()
      .then(user => {
        setUser(user)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  async function signIn(email: string, password: string) {
    const { user, token } = await loginService(email, password)

    localStorage.setItem('@token', token)
    
    setUser(user)
  }

  function signOut() {
    logoutService()

    localStorage.removeItem('@token')
    localStorage.removeItem('@refreshToken')

    setUser(null)
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