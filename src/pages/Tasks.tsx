import { useEffect } from "react";
import { Task } from "../components/Task";
import { TaskHeader } from "../components/TaskHeader";
import { TaskInput } from "../components/TaskInput";
import { useTasks } from "../hooks/useTasks";
import { listTasks } from "../services/tasks";
import { TaskStats } from "../components/TaskStats";

export function Tasks() {
  const { tasks, setTasks } = useTasks();

  const emptyTasks = tasks.length == 0

  useEffect(() => {
    async function loadTasks() {
      const data = await listTasks()
      setTasks(data)
    }

    loadTasks()
  }, [setTasks])

  return (
    <div className="flex items-start justify-center w-full h-full py-10 bg-blue-100">
      <div className="w-full h-full max-w-200 border-none">
        <TaskHeader />
        <TaskStats />

        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 flex flex-col gap-4 pb-10">
          <TaskInput />

          {emptyTasks
            ?
            <p className="text-center text-zinc-400 mb-5">Nenhuma tarefa ainda. Adicione uma acima!</p>
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
    </div>
  );
}