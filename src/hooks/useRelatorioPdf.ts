/**
 * Gera o relatório em PDF de um projeto específico e retorna o arquivo como um Blob.
 *
 * @async
 * @function gerarRelatorioProjetoPdf
 * @param {number} id - Identificador único do projeto cujo relatório será gerado.
 * @returns {Promise<Blob>} - Retorna uma Promise que resolve com o Blob do arquivo PDF.
 * @description
 * Faz uma requisição HTTP para o endpoint `/relatorios/item/{id}/pdf` e solicita o arquivo
 * em formato binário (`blob`) para posterior download ou visualização.
 */
import api from "@/lib/api";

export async function gerarRelatorioProjetoPdf(id: number): Promise<Blob> {
	const res = await api.get(`/relatorios/item/${id}/pdf`, {
		responseType: "blob",
	});
	return res.data as Blob;
}

/**
 * Realiza o download de um arquivo Blob no navegador com o nome especificado.
 *
 * @function downloadBlobAs
 * @param {Blob} blob - O arquivo em formato Blob que será baixado.
 * @param {string} filename - Nome do arquivo que será salvo no download.
 * @description
 * Cria dinamicamente uma URL temporária para o Blob, simula o clique em um link `<a>`
 * para iniciar o download, e em seguida revoga a URL criada para liberar memória.
 */
export function downloadBlobAs(blob: Blob, filename: string) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
