import { CircleCheck, Clock, Layers} from "lucide-react";
import { useTasks } from "../hooks/useTasks";

export function TaskStats() {
  const { tasks } = useTasks()

  const pendingTasks = tasks.filter(task => task.completed === false)
  const completedTasks = tasks.filter(task => task.completed === true)

  return (
    <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-600 mb-1">Total Tasks</p>
            <h3 className="text-blue-900">{tasks.length}</h3>
          </div>
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
            <Layers />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-600 mb-1">Pending</p>
            <h3 className="text-blue-900">{pendingTasks.length}</h3>
          </div>
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
            <Clock />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-600 mb-1">Completed</p>
            <h3 className="text-blue-900">{completedTasks.length}</h3>
          </div>
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
            <CircleCheck />
          </div>
        </div>
      </div>
    </div>
  )
}