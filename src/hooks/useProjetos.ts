import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import type { Projetos } from "@/types/Projetos";

export const useProjetos = () => {
	const queryClient = useQueryClient();

	const getProjetos = useQuery<Projetos[]>({
		queryKey: ["projetos"],
		queryFn: async () => {
			const { data } = await api.get("/projetos");
			return data;
		},
	});

	const createProjeto = useMutation({
		mutationFn: (projeto: Partial<Projetos>) =>
			api.post("/projetos/incluir", projeto).then(res => res.data),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projetos"] }),
	});

	const updateProjeto = useMutation({
		mutationFn: ({ id, ...rest }: { id: number } & Partial<Projetos>) =>
			api.put(`/projetos/${id}`, rest).then(res => res.data),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projetos"] }),
	});

	const deleteProjeto = useMutation({
		mutationFn: (id: number) => api.delete(`/projetos/${id}`),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projetos"] }),
	});

	return { getProjetos, createProjeto, updateProjeto, deleteProjeto };
};
