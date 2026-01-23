import { api } from "./api";

export async function logout() {
  const refreshToken = localStorage.getItem('@refreshToken')

  if (!refreshToken) return

  await api.post('/logout', { refreshToken })
}