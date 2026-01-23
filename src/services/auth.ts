import { api } from "./api"
import type { LoginResponse } from "../types/Auth"

export async function login(email: string, password: string) {
  const response = await api.post<LoginResponse>('/sessions', {
    email,
    password
  })

  return response.data
}