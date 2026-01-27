import { useEffect } from "react";
import { Task } from "../components/Task";
import { TaskHeader } from "../components/TaskHeader";
import { TaskInput } from "../components/TaskInput";
import { useTasks } from "../hooks/useTasks";
import { listTasks } from "../services/tasks";
import { LogOut } from 'lucide-react'
import { useAuth } from "../hooks/useAuth";

export function Tasks() {
  const { tasks, setTasks } = useTasks();
  const { signOut } = useAuth()

  const emptyTasks = tasks.length == 0

  useEffect(() => {
    async function loadTasks() {
      const data = await listTasks()
      setTasks(data)
    }

    loadTasks()
  }, [setTasks])

  return (
    <div className="flex items-start justify-center w-screen min-h-screen pt-10 bg-blue-100">
      <div className="bg-white w-full h-full max-w-200 rounded-[10px] shadow-2xl border-none">
        <TaskHeader />
        <TaskInput />

        <div className={`${emptyTasks ? 'flex items-center justify-center text-zinc-500/60 pb-8 h-30 text-lg' : 'flex flex-col gap-4 pb-10'}`}>
          {emptyTasks
            ?
            "Nenhuma tarefa ainda. Adicione uma acima!"
            :
            tasks.map(task =>
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
              />
            )
          }
        </div>
      </div>

      <button onClick={signOut}>
        <LogOut cursor="pointer" />
      </button>
    </div>
  );
}