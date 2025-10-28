import FormProjeto from "@/components/hourlog/FormProjeto";
import { useProjetos } from "@/hooks/useProjetos";
import type { ProjetoForm } from "@/types/Projetos";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const IncluirProjeto = () => {
	const navigate = useNavigate();
	const { createProjeto } = useProjetos();

	const handleCreate = async (form: ProjetoForm) => {
		const payload = {
			nomeProjeto: form.nomeProjeto,
			status: form.status,
			tarefas: (form.tarefas ?? [])
				.filter((t) => t.descricao?.trim())
				.map((t) => ({
					descricao: t.descricao.trim(),
					data: t.data || null, 
					horaInicio: t.horaInicio?.trim() || null,
					horaFinal: t.horaFinal?.trim() || null,
                    descricaoDetalhada: t.descricaoDetalhada?.trim() || null
				})),
		};

		try {
			await createProjeto.mutateAsync(payload);
			toast.success("Projeto salvo com sucesso!", { duration: 3000 });
			setTimeout(() => navigate("/projetos"), 3000);
		} catch (err) {
			const error = err as AxiosError<{ message?: string }>;
			const msg =
				error.response?.data?.message ?? "Não foi possível salvar o projeto.";
			toast.error(msg);
		}
	};

	return (
		<main className="w-full p-8">
			<h2 className="text-lg font-bold uppercase text-white mb-4">
				Novo Projeto
			</h2>
			<FormProjeto
				onSubmit={handleCreate}
				buttonLabel={createProjeto.isPending ? "Salvando..." : "Salvar"}
				isSubmitting={createProjeto.isPending}
			/>
		</main>
	);
};

export default IncluirProjeto;
