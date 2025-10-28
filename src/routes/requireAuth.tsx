import { isTokenValid } from "@/lib/auth";
import { Navigate, Outlet, useLocation } from "react-router";

export default function RequireAuth() {
    const location = useLocation();
    const token = localStorage.getItem("token");

    if (!isTokenValid(token)) {
        localStorage.removeItem("token");
        return <Navigate to="/login" replace state={{ from: location }} />
    }

    return <Outlet />
}
