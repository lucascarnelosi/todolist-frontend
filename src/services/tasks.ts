import { api } from "./api";
import { type TaskProps } from "../types/Task";

export async function listTasks() {
  const response = await api.get<TaskProps[]>('/tasks')
  return response.data
}

export async function createTask(title: string) {
  const response = await api.post('/tasks', { title })
  return response.data
}

export async function updateTask(id: string, title: string) {
  const response = await api.patch(`/tasks/${id}`, { title })
  return response.data
}

export async function toggleTaskCompleted(id: string, completed: boolean) {
  const response = await api.patch(`/tasks/${id}/toggle`, { completed })
  return response.data;
}

export async function deleteTask(id: string) {
  await api.delete(`/tasks/${id}`)
}