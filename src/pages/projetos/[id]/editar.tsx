import { useProjetos } from "@/hooks/useProjetos";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import type { ProjetoForm } from "@/types/Projetos";
import FormProjeto from "@/components/hourlog/FormProjeto";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { useTarefa } from "@/hooks/useTarefas";
import { diffTarefas } from "@/utils/syncTarefas";

const EditarProjeto = () => {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const { updateProjeto } = useProjetos();
	const { createTarefa, updateTarefa, deleteTarefa } = useTarefa();
	const queryClient = useQueryClient();

	const { data: projeto, isLoading } = useQuery<ProjetoForm>({
		queryKey: ["projeto", id],
		queryFn: () => api.get(`/projetos/${id}`).then((res) => res.data),
		enabled: !!id,
	});

	const missingDate = (tarefas: ProjetoForm["tarefas"] = []) =>
		tarefas.some(
			(t) =>
				(!!t.horaInicio && !t.data) ||
				(!!t.horaFinal && (!t.data || !t.horaInicio))
		);

	const normaliza = (t: ProjetoForm["tarefas"][number]) => ({
		...t,
		data: t.data || null,
		horaInicio: t.horaInicio?.trim() || null,
		horaFinal: t.horaFinal?.trim() || null,
        descricaoDetalhada: t.descricaoDetalhada?.trim() || null,
	});

	const handleUpdate = async (data: ProjetoForm) => {
		if (!id) return;

        if (missingDate(data.tarefas)) {
            toast.error("Defina a data antes de incluir a hora inicial e/ou final.");
            return;
        }

		try {
			await updateProjeto.mutateAsync({ id: Number(id), ...data });

			const { toCreate, toUpdate, toDelete } = diffTarefas(
				(projeto?.tarefas ?? []).map(normaliza),
				(data.tarefas ?? []).map(normaliza)
			);

			await Promise.all([
				...toCreate.map((t) =>
					createTarefa.mutateAsync({ projetoId: Number(id), ...normaliza(t) })
				),
				...toUpdate.map((t) =>
					updateTarefa.mutateAsync({ id: t.id!, projetoId: Number(id), ...normaliza(t) })
				),
				...toDelete.map((t) =>
					deleteTarefa.mutateAsync({ id: t.id!, projetoId: Number(id) })
				),
			]);

			queryClient.invalidateQueries({ queryKey: ["projeto", Number(id)] });
			queryClient.invalidateQueries({ queryKey: ["tarefas", Number(id)] });

			toast.success("Projeto atualizado com sucesso!", { duration: 3000 });
			setTimeout(() => navigate("/projetos"), 3000);
		} catch (err) {
			const error = err as AxiosError<{ message?: string }>;
			const msg =
				error.response?.data?.message ?? "Não foi possível salvar o projeto.";
			toast.error(msg);
		}
	};

	if (isLoading || !projeto) return <div>Carregando...</div>;

	return (
		<main className="w-full p-8 flex flex-col h-[calc(100vh-128px)] overflow-y-scroll">
			<h2 className="text-lg font-bold uppercase text-white mb-4">
				Editar Projeto
			</h2>
			<FormProjeto
				onSubmit={handleUpdate}
				defaultValues={projeto}
				buttonLabel={updateProjeto.isPending ? "Atualizando..." : "Atualizar"}
				isSubmitting={updateProjeto.isPending}
			/>
		</main>
	);
};

export default EditarProjeto;
