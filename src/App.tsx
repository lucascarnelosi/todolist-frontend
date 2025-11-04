import { Task } from './components/Task'
import { useTasks } from './hooks/useTasks';
import { TaskInput } from './components/TaskInput'
import { TaskHeader } from './components/TaskHeader';

export default function App() {
  const { tasks } = useTasks();

  const emptyTasks = tasks.length == 0

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
                name={task.name}
                done={task.done}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}