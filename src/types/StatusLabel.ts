export const statusLabel = {
    EM_ANDAMENTO:  "Em andamento",
    CONCLUIDO: "Concluído",
    FINALIZADO: "Finalizado",
    PAUSADO: "Pausado",
} as const;

export type StatusProjeto = keyof typeof statusLabel;
