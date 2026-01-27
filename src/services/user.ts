import { api } from "./api";
import { type User } from "../types/Auth";

export async function getMe() {
  const response = await api.get<User>('/users/me')

  return response.data
}

export async function createUser(name: string, email: string, password: string) {
  const response = await api.post<User>('/users', { name, email, password })

  return response.data
}