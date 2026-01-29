import { useState } from "react"
import { useTasks } from '../hooks/useTasks'
import { wordFormatter } from '../utils/wordFormatter'
import { createTask } from "../services/tasks"
import { Plus } from "lucide-react"

export function TaskInput() {
  const { tasks, setTasks } = useTasks()
  const [inputAddTask, setInputAddTask] = useState('')

  async function addTask() {
    const formattedInputAddTask = wordFormatter(inputAddTask.trim())

    const tasksTitles = tasks.map(task => task.title)
    const isTaskExist = tasksTitles.some(task => task == formattedInputAddTask)
    
    if (isTaskExist || !inputAddTask.trim()) {
      alert('Não foi possível adicionar a atividade.')

      return;
    } else {
      const newTask = await createTask(formattedInputAddTask)

      setTasks(prev => [
        ...prev,
        newTask
      ])

      setInputAddTask('')
    }
  }

  return (
    <div className="flex items-center justify-center gap-3 py-10 px-12">
      <input
        type="text"
        name="nametxt"
        id="idtxt"
        size={40}
        maxLength={30}
        className="flex-4 bg-zinc-600/10 text-zinc-800 px-4 py-2 rounded-[8px]"
        value={inputAddTask}
        placeholder="Adicionar uma nova tarefa..."
        onChange={e => setInputAddTask(wordFormatter(e.target.value))}
      />
      <button
        className="flex flex-1 items-center justify-center gap-2 text-md bg-blue-600 text-white size-10 rounded-lg hover:bg-blue-700"
        type="submit"
        onClick={addTask}
      >
        <Plus size={20} />
        New Task
      </button>
    </div>
  )
}