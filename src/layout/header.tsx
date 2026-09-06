import DropUser from "@/components/hourlog/DropdownUser";
import MobileNav from "./mobileNav";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isAuthenticated] = useState(() => {
        const token = localStorage.getItem("token");
        return !!token;
    });
    
    return (
        <header className="app-header w-full h-16 flex justify-between items-center px-6 bg-dark100">
            <div className="flex items-center gap-3">
                {isAuthenticated && <MobileNav />}
                <h1 className="text-orange500 uppercase font-bold text-lg">
                    <NavLink to="/">Hourlog</NavLink>
                </h1>
            </div>
            {isAuthenticated ? (
                <DropUser />
            ) : (
                <ul className="flex gap-4 text-dark500 font-semibold">
                    <NavLink to="/" className="hover:text-orange500">
                        Entrar
                    </NavLink>
                    <NavLink to="/" className="hover:text-orange500">
                        Cadastrar
                    </NavLink>
                </ul>
            )}
        </header>
    );
}

export default Header;
