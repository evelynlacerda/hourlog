import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout } from "@/hooks/useLogout";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const DropUser = () => {
    const logout = useLogout();
    const [nome, setNome] = useState("");

    useEffect(() => {
        const storageNome = localStorage.getItem("nome");
        if (storageNome) {
            setNome(storageNome);
        }
    }, []);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				{nome} <ChevronDown size={18} />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Configurações</DropdownMenuItem>
				<DropdownMenuItem onClick={logout}>Sair</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropUser;
