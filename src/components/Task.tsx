import { useState } from "react"
import { useTasks } from '../hooks/useTasks'
import type { TaskProps } from '../types/Task'
import { wordFormatter } from '../utils/wordFormatter'
import { SquareCheckBig, Square, X, Pencil, Check, Trash2 } from 'lucide-react'

export function Task(p: TaskProps) {
  const { tasks, setTasks } = useTasks()
  const [inputTask, setInputTask] = useState(p.name)
  const [isEditing, setIsEditing] = useState(false)

  function completeTask() {
    setTasks(prev => 
      prev.map(task => 
        task.id === p.id
        ? { ...task, done: !task.done }
        : task
      )
    )
  }

  function removeTask() {
    const newTasksArray = tasks.filter(task => task.name !== p.name)

    setTasks(newTasksArray)
  }

  function editTask() {
    const formattedInputTask = wordFormatter(inputTask.trim())

    const tasksNames = tasks.map(task => task.name)
    const isTaskExist = tasksNames.some(task => task == formattedInputTask)
    
    if (isTaskExist || !inputTask.trim()) {
      alert('Não foi possível editar a atividade.')
      
      return;
    }

    setTasks(prev => 
      prev.map(task => 
        task.id === p.id
        ? { ...task,
            name: formattedInputTask,
          }
        : task
      )
    )

    setIsEditing(prev => !prev)
  }

  return (
    <div className="flex items-center justify-between mx-12 py-5 pl-4 border-2 border-zinc-400/30 rounded-[8px]">
      <div className="flex flex-1 items-center gap-3 text-[1.2rem]">
        {!isEditing && (
          <button>
            {p.done ? (
              <SquareCheckBig
                onClick={completeTask}
                className="rounded-full"
                cursor="pointer"
                color="#000"
              />
            ) : (
              <Square
                onClick={completeTask}
                color="#9f9fa980"
                cursor="pointer"
              />
            )}
          </button>
        )}
        {isEditing ? (
          <input
            type="text"
            name="editTxtName"
            id="editTxtId"
            maxLength={20}
            className="flex flex-1 bg-zinc-600/10 text-zinc-800 px-4 py-2 rounded-[8px] border-2 border-zinc-100"
            autoFocus
            value={inputTask}
            onChange={e => setInputTask(wordFormatter(e.target.value))}
          />
        ) : (
          <div className={`${p.done ? 'text-zinc-400 line-through' : 'text-black'}`}>
            {p.name}
          </div>
        )}
      </div>
      {!p.done && (
        <div className="flex gap-6 mx-5">
          {isEditing ? (
            <>
              <Check
                color="#0d9"
                cursor="pointer"
                onClick={editTask}
              />
              <X
                color="#52525c90"
                cursor="pointer"
                onClick={() => {
                  setInputTask(p.name)
                  setIsEditing(prev => !prev)
                }}
              />
            </>
          ) : (
            <>
              <Pencil
                color="#19f"
                cursor="pointer"
                onClick={() => {
                  setInputTask(p.name)
                  setIsEditing(prev => !prev)
                }}
              />
              <Trash2
                color="#f00"
                cursor="pointer"
                onClick={removeTask}
              />
            </>
          )}
        </div>
      )}
    </div>
  )
}