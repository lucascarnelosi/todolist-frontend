import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSubmit() {
    await signIn(email, password)

    navigate("/tasks")
  }

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col gap-4 bg-zinc-800 p-10 rounded-md">
        <input
          type="text"
          className="bg-white p-1"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="bg-white p-1"
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="text-white bg-blue-800 rounded-md p-1 hover:bg-blue-900"
        >
          Entrar
        </button>
      </div>
    </div>
  )
}