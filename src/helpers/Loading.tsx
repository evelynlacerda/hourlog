import { Loader2 } from "lucide-react";

export function Loading() {

    return (
			<main className="flex items-center justify-center w-full gap-2 text-orange500">
				<Loader2 width={24} className="animate-spin" />
				<p className="uppercase tracking-wide font-semibold">Carregando…</p>
			</main>
		);
}
