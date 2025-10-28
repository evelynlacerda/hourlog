import { statusColor } from "@/lib/statusColor";
import type { Projetos } from "@/types/Projetos";
import type { ColumnDef } from "@tanstack/react-table";
import { Tools } from "./Tools";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<Projetos>[] = [
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const status = row.getValue("status");
			const info = statusColor[status as keyof typeof statusColor];
			return (
				<span
					className={`flex items-center gap-2 w-fit px-4 py-2 rounded-full text-sm ${info.texto}`}
				>
					<div className={`rounded-full h-3 w-3 ${info.cor}`}></div>
					{info.label}
				</span>
			);
		},
	},
	{
		accessorKey: "nomeProjeto",
		header: "Nome do Projeto",
	},
	{
		accessorKey: "horasTotais",
		header: "Horas",
		cell: ({ row }) => <span>{row.getValue("horasTotais")}h</span>,
	},
	{
		id: "actions",
		header: "Ações",
		cell: ({ row }) => {
			const projeto = row.original;
			return (
				<div className="flex justify-center">
					<Button className="border border-dashed border-orange500 rounded-full w-9 shadow-2xl">
						<Tools id={projeto.id} nomeProjeto={projeto.nomeProjeto} />
					</Button>
				</div>
			);
		},
	},
];
