import { NavLink } from "react-router-dom";

const LoginHeader = () => {
    return (
        <header className="h-16 flex items-center justify-between px-6 border-b border-dashed border-dark400">
            <span className="text-orange500 font-extrabold uppercase">
                Hourlog
            </span>
            <ul className="flex gap-4 text-dark500 font-semibold">
                <NavLink to="/" className="hover:text-orange500">
                    Entrar
                </NavLink>
                <NavLink to="/" className="hover:text-orange500">
                    Cadastrar
                </NavLink>
            </ul>
        </header>
    );
};

export default LoginHeader;
