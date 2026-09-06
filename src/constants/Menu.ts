import { FileChartColumn, FilePlus2, Files, LayoutDashboard } from "lucide-react";
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

export const NAV_ITEMS: MenuProps[] = [
	{
		id: 0,
		title: "Dashboard",
		icon: LayoutDashboard,
		path: "/dashboard",
	},
	...MENU_ITEMS,
];
