import { getProjetos } from "@/services/ProjetosServices";
import type { Projetos } from "@/types/Projetos";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [projetos, setProjetos] = useState<Projetos[]>([]);

    useEffect(() => {
        getProjetos()
            .then(setProjetos)
            .catch((err) => console.error("Erro ao buscar projetos:", err));
    }, []);

    const total = projetos.length;
    const emAndamento = projetos.filter((p) => p.status === "EM_ANDAMENTO").length;
    const pausados = projetos.filter((p) => p.status === "PAUSADO").length;

    return (
			<div className="w-full h-fit flex flex-wrap gap-8 p-8">
				<div className="flex flex-col gap-2 grow bg-dark200 p-6 rounded-lg">
					<h3 className="uppercase text-white font-bold text-xl">
						Adicionados
					</h3>
					<span className="text-orange500 font-black text-6xl">{total}</span>
				</div>
				<div className="flex flex-col gap-2 grow bg-dark200 p-6 rounded-lg">
					<h3 className="uppercase text-white font-bold text-xl">
						Em andamento
					</h3>
					<span className="text-orange500 font-black text-6xl">{emAndamento}</span>
				</div>
				<div className="flex flex-col gap-2 grow bg-dark200 p-6 rounded-lg">
					<h3 className="uppercase text-white font-bold text-xl">Pausados</h3>
					<span className="text-orange500 font-black text-6xl">{pausados}</span>
				</div>
			</div>
		);
}

export default Dashboard
