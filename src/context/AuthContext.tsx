import { createContext } from "react";
import { type User } from "../types/Auth";

interface AuthContextData {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
)