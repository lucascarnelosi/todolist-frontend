import { api } from "./api";
import { type User } from "../types/Auth";

export async function getMe() {
  const response = await api.get<User>('/users/me')

  return response.data
}