export const statusColor = {
	EM_ANDAMENTO: {
		label: "Em andamento",
		cor: "bg-yellow400",
		texto: "bg-yellow800 text-yellow400",
	},
	CONCLUIDO: {
		label: "Concluído",
		cor: "bg-green400",
		texto: "bg-green800 text-green400",
	},
	FINALIZADO: {
		label: "Finalizado",
		cor: "bg-red400",
		texto: "bg-red800 text-red400",
	},
	PAUSADO: {
		label: "Pausado",
		cor: "bg-dark100",
		texto: "bg-dark500 text-dark100",
	},
} as const;
