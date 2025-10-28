import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import type { ProjetoForm } from "@/types/Projetos";
import { Button } from "@/components/ui/button";
import { format as formatDateFns, parseISO, isValid } from "date-fns";
import { ptBR } from "date-fns/locale";
import { statusLabel } from "@/types/StatusLabel";

// --- Helpers de ordenação ---
function toMin(hhmm?: string | null): number | null {
	if (!hhmm) return null;
	const [h, m] = hhmm.split(":").map(Number);
	if (Number.isNaN(h) || Number.isNaN(m)) return null;
	return h * 60 + m;
}

function toDateOnly(value?: string | null): Date | null {
	if (!value) return null;
	// valor vindo do backend está em ISO (yyyy-MM-dd ou yyyy-MM-ddTHH:mm:ssZ)
	const d = parseISO(value);
	if (!isValid(d)) return null;
	return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function sortTarefas<T extends ProjetoForm["tarefas"][number]>(a: T, b: T) {
	const da = toDateOnly(a.data);
	const db = toDateOnly(b.data);
	if (da && db) {
		const c = da.getTime() - db.getTime();
		if (c !== 0) return c;
		// mesma data → ordenar por horaInicio
		const ia = toMin(a.horaInicio);
		const ib = toMin(b.horaInicio);
		const na = ia == null ? Number.POSITIVE_INFINITY : ia;
		const nb = ib == null ? Number.POSITIVE_INFINITY : ib;
		return na - nb;
	}
	if (da && !db) return -1;
	if (!da && db) return 1;
	return 0;
}

const statusOptions = Object.entries(statusLabel).map(([value, label]) => ({ value, label }));

const VisualizarProjeto = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const {
		data: projeto,
		isLoading,
		isError,
	} = useQuery<ProjetoForm>({
		queryKey: ["projeto", id],
		queryFn: () => api.get(`/projetos/${id}`).then((res) => res.data),
		enabled: !!id,
	});

	const handleEditar = () => {
		if (!id) return;
		// ajuste a rota de edição conforme seu router
		navigate(`/projetos/${id}/editar`);
	};

	const handleGerarRelatorio = () => {
		if (!id) return;
		// Se seu router do backend for montado em /relatorios, use essa URL.
		// No seu código de backend vimos `router.get("/item/:id/pdf")`
		// frequentemente montado como `/relatorios/item/:id/pdf`.
		const base = (api.defaults?.baseURL || "").replace(/\/$/, "");
		const url = `${base}/relatorios/item/${id}/pdf`;
		window.open(url, "_blank", "noopener,noreferrer");
	};

	if (isLoading) return <main className="p-8 text-white">Carregando…</main>;
	if (isError || !projeto) {
		return (
			<main className="p-8 text-red-400">
				Não foi possível carregar o projeto.
			</main>
		);
	}

	const tarefasOrdenadas = [...(projeto.tarefas ?? [])].sort(sortTarefas);

	return (
		<main className="w-full p-8 flex flex-col h-[calc(100vh-128px)] overflow-y-auto">
			{/* Header */}
			<div className="flex items-start justify-between gap-4 mb-8">
				<div>
					<h2 className="text-lg font-bold uppercase text-white">
						{projeto.nomeProjeto || "Projeto"}
					</h2>
					{projeto.status && (
						<p className="text-sm text-orange500 mt-1">
							<span className="uppercase font-semibold text-dark700">Status:</span>{" "}
							{statusOptions.find((s) => s.value === projeto.status)?.label}
						</p>
					)}
				</div>

				<div className="flex gap-2">
					<Button
						className="border-orange500 border border-dashed"
						onClick={handleEditar}
					>
						Editar
					</Button>
					<Button
						className="bg-orange500 text-dark100"
						onClick={handleGerarRelatorio}
					>
						Gerar Relatório
					</Button>
				</div>
			</div>

			{/* Lista de tarefas (somente leitura) */}
			<section className="mt-2">
				<div className="grid grid-cols-[16%_1fr_12%_12%] gap-3 text-xs uppercase text-dark500 pb-2 border-b border-dark500/40">
					<div>Data</div>
					<div>Descrição</div>
					<div>Hora Inicial</div>
					<div>Hora Final</div>
				</div>

				{tarefasOrdenadas.length === 0 && (
					<p className="text-dark500 mt-4">Nenhuma tarefa cadastrada.</p>
				)}

				<ul className="mt-2">
					{tarefasOrdenadas.map((t, i) => {
						const dataLabel =
							t.data && isValid(parseISO(t.data))
								? formatDateFns(parseISO(t.data), "dd/MM/yyyy", {
										locale: ptBR,
								  })
								: "—";

						return (
							<li
								key={t.id ?? `${t.data}-${i}`}
								className="py-4 border-b border-dashed border-dark400"
							>
								{/* Linha principal */}
								<div className="grid grid-cols-[16%_1fr_12%_12%] gap-3 items-start">
									<div className="text-white">{dataLabel}</div>
									<div className="text-white flex flex-col">
										<span>{t.descricao || "—"}</span>
										<p className="text-sm text-dark700">
											{t.descricaoDetalhada || "—"}
										</p>
									</div>
									<div className="text-white text-center">
										{t.horaInicio || "—"}
									</div>
									<div className="text-white text-center">
										{t.horaFinal || "—"}
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</section>
		</main>
	);
};

export default VisualizarProjeto;
