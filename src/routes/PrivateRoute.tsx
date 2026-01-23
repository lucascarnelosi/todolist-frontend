import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { JSX } from "react";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated, loading } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return children
}