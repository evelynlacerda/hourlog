import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import type { Tarefa } from "@/types/Tarefa";

export const useTarefaById = (id: number) => {
	return useQuery<Tarefa>({
		queryKey: ["tarefa", id],
		queryFn: async () => api.get(`/tarefa/${id}`).then(res => res.data),
        enabled: !!id,
	});
};

export const useTarefasList = (projetoId: number) => {
    return useQuery<Tarefa[]>({
        queryKey: ["tarefas", projetoId],
        queryFn: async () => api.get(`/projetos/${projetoId}/tarefas`).then(res => res.data),
        enabled: !!projetoId,
    });
};

export const useTarefa = () => {
	const queryClient = useQueryClient();

	const createTarefa = useMutation({
		mutationFn: (vars: { projetoId: number } & Partial<Tarefa>) =>
			api.post(`/projetos/${vars.projetoId}/tarefas`, vars).then((r) => r.data),
		onSuccess: (_data, vars) => {
			queryClient.invalidateQueries({ queryKey: ["tarefas", vars.projetoId] });
			queryClient.invalidateQueries({ queryKey: ["projeto", vars.projetoId] });
		},
	});

	const updateTarefa = useMutation({
		mutationFn: (vars: { id: number; projetoId: number } & Partial<Tarefa>) =>
			api.put(`/tarefas/${vars.id}`, vars).then((r) => r.data),
		onSuccess: (_data, vars) => {
			queryClient.invalidateQueries({ queryKey: ["tarefas", vars.projetoId] });
			queryClient.invalidateQueries({ queryKey: ["projeto", vars.projetoId] });
		},
	});

	const deleteTarefa = useMutation({
		mutationFn: (vars: { id: number; projetoId: number }) =>
			api.delete(`/tarefas/${vars.id}`).then((r) => r.data),
		onSuccess: (_data, vars) => {
			queryClient.invalidateQueries({ queryKey: ["tarefas", vars.projetoId] });
			queryClient.invalidateQueries({ queryKey: ["projeto", vars.projetoId] });
		},
	});

	return { createTarefa, updateTarefa, deleteTarefa };
};
