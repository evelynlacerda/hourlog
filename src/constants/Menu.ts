import { FileChartColumn, FilePlus2, Files } from "lucide-react";
import type { ElementType } from "react";

interface MenuProps {
    id: number;
    title: string;
    icon: ElementType;
    path: string;
};

export const MENU_ITEMS: MenuProps[] = [
	{
        id: 1,
		title: "Projetos",
		icon: Files,
		path: "/projetos",
	},
	{
        id: 2,
		title: "Novo Projeto",
		icon: FilePlus2,
		path: "/incluir",
	},
	{
		id: 3,
		title: "Relatórios",
		icon: FileChartColumn,
		path: "/relatorios",
	},
];
