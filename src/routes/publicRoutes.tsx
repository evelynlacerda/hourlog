import { isTokenValid } from "@/lib/auth"
import { Navigate, Outlet } from "react-router"

export default function PublicRoutes() {
    const token = localStorage.getItem("token")
    if (isTokenValid(token)) {
        return <Navigate to="/dashboard" replace />
    }

    return <Outlet />
}
