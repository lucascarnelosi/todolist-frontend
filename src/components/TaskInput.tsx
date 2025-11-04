import { useState } from "react"
import { useTasks } from '../hooks/useTasks'
import { wordFormatter } from '../utils/wordFormatter'

export function TaskInput() {
  const { tasks, setTasks } = useTasks()
  const [inputAddTask, setInputAddTask] = useState('')

  function addTask() {
    const formattedInputAddTask = wordFormatter(inputAddTask.trim())

    const tasksNames = tasks.map(task => task.name)
    const isTaskExist = tasksNames.some(task => task == formattedInputAddTask)
    
    if (isTaskExist || !inputAddTask.trim()) {
      alert('Não foi possível adicionar a atividade.')

      return;
    }

    setTasks(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: formattedInputAddTask,
        done: false,
        editing: false,
      }
    ])

    setInputAddTask('')
  }

  return (
    <div className="flex items-center justify-center gap-3 py-10 px-12">
      <input
        type="text"
        name="nametxt"
        id="idtxt"
        size={40}
        maxLength={30}
        className="flex-5/6 bg-zinc-600/10 text-zinc-800 px-4 py-2 rounded-[8px]"
        value={inputAddTask}
        placeholder="Adicionar uma nova tarefa..."
        onChange={(e) => setInputAddTask(wordFormatter(e.target.value))}
      />
      <button
        className="flex flex-1/6 items-center text-md justify-center bg-blue-600 hover:bg-blue-700 text-white size-10 rounded-[8px]"
        type="submit"
        onClick={addTask}
      >
        Adicionar
      </button>
    </div>
  )
}