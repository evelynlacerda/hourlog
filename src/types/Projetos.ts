import type { StatusProjeto } from "./StatusLabel";
import type { Tarefa } from "./Tarefa";

export interface Projetos {
    id: number;
    nomeProjeto: string;
    status: string;
    horasTotais: string | null;
};

export interface ProjetoForm {
    id?: number;
    nomeProjeto: string;
    status?: StatusProjeto;
    tarefas: Tarefa[];
};
