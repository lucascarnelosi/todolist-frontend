import { api } from "./api";

export async function refreshToken() {
  const response = await api.post('/refresh-token')

  return response.data
}