import { useState } from "react";
import { useProjetos } from "@/hooks/useProjetos";
import {
	downloadBlobAs,
	gerarRelatorioProjetoPdf,
} from "@/hooks/useRelatorioPdf";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Relatorios() {
	const { getProjetos } = useProjetos();
	const { data: projetos, isLoading } = getProjetos;

	// shadcn Select trabalha com string; guardamos string e convertemos ao gerar
	const [projetoId, setProjetoId] = useState<string>("");
	const [downloading, setDownloading] = useState(false);

	async function handleGerar() {
		if (!projetoId) return;
		setDownloading(true);
		try {
			const id = Number(projetoId);
			const selectedProjeto = projetos?.find((p) => p.id === id);
			const nome = selectedProjeto?.nomeProjeto || "Projeto";
			const blob = await gerarRelatorioProjetoPdf(id);
			downloadBlobAs(blob, `${nome} - Relatorio.pdf`);
		} catch (e) {
			console.error(e);
			alert("Não foi possível gerar o relatório.");
		} finally {
			setDownloading(false);
		}
	}

	const placeholder = isLoading
		? "Carregando projetos..."
		: "Selecione um projeto";

	return (
		<main className="page-container w-full pl-12 p-8">
			<h2 className="text-lg font-bold uppercase text-white mb-4">
				Relatórios
			</h2>

			<div className="flex flex-col gap-8">
				<Select
					value={projetoId}
					onValueChange={(value) => setProjetoId(value)}
					disabled={isLoading || (projetos?.length ?? 0) === 0}
				>
					<SelectTrigger className="w-full border-dashed text-white">
						<SelectValue placeholder={placeholder} />
					</SelectTrigger>

					<SelectContent>
						{(projetos ?? []).map((p) => (
							<SelectItem key={p.id} value={String(p.id)}>
								{p.nomeProjeto}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<section className="flex justify-end">
					<Button
						onClick={handleGerar}
						disabled={!projetoId || downloading}
						className="bg-orange500 text-dark100"
					>
						{downloading ? "Gerando..." : "Gerar PDF"}
					</Button>
				</section>
			</div>
		</main>
	);
}
