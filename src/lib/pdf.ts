/**
 * Faz uma requisição HTTP para buscar um arquivo PDF e retorna o conteúdo como um Blob.
 *
 * @async
 * @function fetchPdfBlob
 * @param {string} url - URL do endpoint que retorna o PDF.
 * @param {string} token - Token de autenticação JWT utilizado no cabeçalho da requisição.
 * @returns {Promise<Blob>} - Retorna uma Promise que resolve com o Blob do arquivo PDF.
 * @throws {Error} - Lança um erro caso a resposta da requisição não seja bem-sucedida.
 */
export async function fetchPdfBlob(url: string, token: string): Promise<Blob> {
	const res = await fetch(url, {
		headers: { Authorization: `Bearer ${token}` },
	});
	if (!res.ok) throw new Error(`Erro ao gerar PDF: ${res.status}`);
	return await res.blob();
}

/**
 * Dispara o download de um arquivo Blob no navegador, criando um link temporário.
 *
 * @function triggerBlobDownload
 * @param {Blob} blob - O arquivo em formato Blob que será baixado.
 * @param {string} filename - Nome do arquivo que será salvo no download.
 * @description
 * Cria dinamicamente um elemento `<a>` com o link para o Blob e aciona o clique
 * para iniciar o download. Após o download, o link é removido e a URL do Blob é
 * revogada após 30 segundos para liberar memória.
 */
export function triggerBlobDownload(blob: Blob, filename: string) {
	const href = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = href;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(href), 30_000);
}
