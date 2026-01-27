import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Tasks } from "../pages/Tasks";
import { PrivateRoute } from "./PrivateRoute";
import { CreateUser } from "../pages/CreateUser";
import { useAuth } from "../hooks/useAuth";

export function AppRoutes() {
  const { isAuthenticated } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          isAuthenticated ? (
            <Navigate to="/tasks" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        } />

        <Route path="/login" element={<Login />} />

        <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />

        <Route path="/create-user" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  )
}