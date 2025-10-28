import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { NavLink } from "react-router-dom";
import { DeleteAlert } from "./DeleteAlert";

type ToolsProps = { id: number; nomeProjeto?: string };

export function Tools({ id, nomeProjeto }: ToolsProps) {
	const items = [
		{ id: 1, text: "Visualizar", link: `/projetos/${id}/visualizar` },
		{ id: 2, text: "Editar", link: `/projetos/${id}/editar` },
	];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Ellipsis />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{items.map((item) => (
					<DropdownMenuItem key={item.id} asChild>
						<NavLink to={item.link}>{item.text}</NavLink>
					</DropdownMenuItem>
				))}
                <DeleteAlert id={id} nomeProjeto={nomeProjeto} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
