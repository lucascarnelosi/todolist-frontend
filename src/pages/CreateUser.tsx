import React, { useState } from "react"
import { createUser } from "../services/user"
import { useNavigate } from "react-router-dom"

export function CreateUser() {
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputConfirmPassword, setInputConfirmPassword] = useState('')

  const navigate = useNavigate()

  async function createNewUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      if (inputConfirmPassword === inputPassword) {
        await createUser(inputName, inputEmail, inputPassword)

        setInputName('')
        setInputEmail('')
        setInputPassword('')
        setInputConfirmPassword('')

        navigate('/login')
      } else {
        window.alert('Confirme a senha corretamente.')
      }
    } catch {
      window.alert('Não foi possível criar o usuário.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
              />
            </svg>
          </div>
          <h1 className="text-blue-900 mb-2">Create Account</h1>
          <p className="text-blue-600">Join us today and get started</p>
        </div>

        <form onSubmit={createNewUser} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-blue-900 mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={inputName}
              onChange={e => setInputName(e.target.value)}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-blue-900 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={inputEmail}
              onChange={e => setInputEmail(e.target.value)}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-blue-900 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={inputPassword}
              onChange={e => setInputPassword(e.target.value)}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-blue-900 mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={inputConfirmPassword}
              onChange={e => setInputConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Create Account
          </button>

          <div className="text-center pt-4">
            <p className="text-blue-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-700 hover:text-blue-800 underline">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}