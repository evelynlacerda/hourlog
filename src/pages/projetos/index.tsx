import { useProjetos } from "@/hooks/useProjetos";
import ProjetosTable from "./components/ProjetosTable";
import { Loading } from "@/helpers/Loading";

const ProjetosIndex = () => {
    const { getProjetos } = useProjetos();

	return (
		<div className="w-full pl-12 p-8">
			<h2 className="uppercase text-base text-white font-bold mb-8">
				Projetos
			</h2>
			{getProjetos.isLoading ? (
				<Loading />
			) : getProjetos.isError ? (
				<p className="text-white text-sm text-center">
					Erro ao listar projetos!
				</p>
			) : (
				<ProjetosTable projetos={getProjetos.data ?? []} />
			)}
		</div>
	);
};

export default ProjetosIndex;
