import { LogOut, User } from "lucide-react"
import { useAuth } from "../hooks/useAuth"

export function TaskHeader() {
  const { user } = useAuth()
  const { signOut } = useAuth()

  return (
    <div className="max-w-7xl mb-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white shadow-lg">
              <User />
            </div>
            <div>
              <h1 className="text-blue-900 text-lg font-medium">Welcome back, {user?.name}!</h1>
              <p className="text-blue-600 text-sm">{user?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg transition duration-200 flex items-center gap-2"
              onClick={signOut}
            >
              <LogOut />
              Log-out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}