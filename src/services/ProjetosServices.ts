import api from "@/lib/api";
import type { Projetos } from "@/types/Projetos";

export async function getProjetos(): Promise<Projetos[]> {
    const response = await api.get("/projetos");
    return response.data;
}