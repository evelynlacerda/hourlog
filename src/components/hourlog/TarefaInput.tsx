import { CircleMinus } from "lucide-react";
import { Input } from "../ui/input";
import { Controller, type Control, type UseFormRegister } from "react-hook-form";
import type { ProjetoForm } from "@/types/Projetos";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { formatDate, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "../ui/calendar";
import { Textarea } from "../ui/textarea";

type Props = {
	index: number;
	register: UseFormRegister<ProjetoForm>;
	control: Control<ProjetoForm>;
	remove: (index: number) => void;
    isLast?: boolean;
};

export const TarefaInput = ({ index, register, remove, control, isLast }: Props) => (
	<div className="tarefa-grid grid gap-3 items-start grid-cols-[16%_1fr_12%_12%_32px]">
		{/* Data */}
		<Controller
			name={`tarefas.${index}.data`}
			control={control}
			render={({ field }) => {
				const selected = field.value ? parseISO(field.value) : undefined;
				const label = selected
					? formatDate(selected, "dd/MM/yyyy", { locale: ptBR })
					: "Data";

				return (
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								type="button"
								className={`
                  w-full bg-transparent justify-start border-dashed border-dark500
                  focus:border-orange500 hover:border-orange500
                  ${label === "Data" ? "text-dark500" : "text-white"}
                `}
							>
								{label}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="p-0" align="start">
							<Calendar
								mode="single"
								selected={selected}
								onSelect={(d) =>
									field.onChange(d ? formatDate(d, "yyyy-MM-dd") : "")
								}
								locale={ptBR}
							/>
						</PopoverContent>
					</Popover>
				);
			}}
		/>

		{/* Descrição */}
		<Input
			className="w-full border-dashed text-white"
			placeholder="Descrição"
			{...register(`tarefas.${index}.descricao`)}
		/>

		{/* Hora Inicial */}
		<Input
			className="w-full border-dashed text-white"
			placeholder="Hora Inicial"
			{...register(`tarefas.${index}.horaInicio`)}
		/>

		{/* Hora Final */}
		<Input
			className="w-full border-dashed text-white"
			placeholder="Hora Final"
			{...register(`tarefas.${index}.horaFinal`)}
		/>

		{/* Remover */}
		<button
			className="cursor-pointer mt-1"
			onClick={() => remove(index)}
			type="button"
			aria-label="Remover tarefa"
			title="Remover tarefa"
		>
			<CircleMinus size={24} color="red" />
		</button>

		{/* 2ª linha: textarea ocupa as 4 primeiras colunas (mesma largura do grupo) */}
		<div className={`
				tarefa-grid__detail col-span-4 w-full border-dashed border-dark500/50
				${isLast ? "border-b-0 pb-0 mb-0" : "border-b pb-6 mb-4"}`}
		>
			<Textarea
				className="w-full border-dashed text-white min-h-14 resize-y"
				placeholder="Descrição Detalhada"
				rows={4}
				{...register(`tarefas.${index}.descricaoDetalhada`)}
			/>
		</div>
		{/* Coluna do botão fica vazia nesta linha */}
		<div />
	</div>
);
