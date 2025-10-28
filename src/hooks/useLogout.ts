import { useNavigate } from "react-router";

export function useLogout() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("nome");
        localStorage.removeItem("hourlog:auth");
        navigate("/login");
    };
    return logout;
};
