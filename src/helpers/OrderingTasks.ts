import { parseISO, isValid } from "date-fns";
import type { ProjetoForm } from "@/types/Projetos";

/**
 * Converte uma string "HH:mm" para minutos totais.
 */
export function toMin(hhmm?: string | null): number | null {
	if (!hhmm) return null;
	const [h, m] = hhmm.split(":").map(Number);
	if (Number.isNaN(h) || Number.isNaN(m)) return null;
	return h * 60 + m;
}

/**
 * Retorna um objeto Date apenas com ano/mês/dia (sem horas/minutos).
 */
export function toDateOnly(value?: string | null): Date | null {
	if (!value) return null;
	const d = parseISO(value);
	if (!isValid(d)) return null;
	return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/**
 * Ordena as tarefas de um projeto pela data e hora inicial.
 */
export function sortTarefas<T extends ProjetoForm["tarefas"][number]>(
	a: T,
	b: T
) {
	const da = toDateOnly(a.data);
	const db = toDateOnly(b.data);
	if (da && db) {
		const c = da.getTime() - db.getTime();
		if (c !== 0) return c;
		const ia = toMin(a.horaInicio);
		const ib = toMin(b.horaInicio);
		const na = ia == null ? Number.POSITIVE_INFINITY : ia;
		const nb = ib == null ? Number.POSITIVE_INFINITY : ib;
		return na - nb;
	}
	if (da && !db) return -1;
	if (!da && db) return 1;
	return 0;
}
