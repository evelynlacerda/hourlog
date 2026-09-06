import type { ProjetoForm } from "@/types/Projetos";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { TarefaInput } from "./TarefaInput";
import { statusLabel } from "@/types/StatusLabel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { NavLink } from "react-router";
import { useEffect } from "react";

type FormProjetoProps = {
	onSubmit: (data: ProjetoForm) => void;
	defaultValues?: ProjetoForm;
	buttonLabel?: string;
    isSubmitting?: boolean;
};

const statusOptions = Object.entries(statusLabel).map(([value, label]) => ({ value, label }));

const FormProjeto = ({
	onSubmit,
	defaultValues,
	buttonLabel,
    isSubmitting
}: FormProjetoProps) => {
	const { register, handleSubmit, control, reset } = useForm<ProjetoForm>({
		defaultValues,
	});

	const { fields, append, remove, replace } = useFieldArray({
		control,
		name: "tarefas",
	});

	// ⬇️ QUANDO defaultValues mudar (após refetch), atualize o form e o array
	useEffect(() => {
		if (!defaultValues) return;
		// atualiza todos os campos do form
		reset(defaultValues);
		// garante que o FieldArray reflita a lista mais recente de tarefas
		replace(defaultValues.tarefas ?? []);
	}, [defaultValues, reset, replace]);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col flex-1 space-y-8"
		>
			<div className="form-projeto__head flex gap-4 bg-dark200 p-8 rounded-2xl shadow-formbox">
				<Input
					className="border-dashed"
					placeholder="Nome do projeto"
					{...register("nomeProjeto", { required: true })}
				/>
				<Controller
					name="status"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<div className="form-projeto__status w-[40%]">
							<Select value={field.value ?? ""} onValueChange={field.onChange}>
								<SelectTrigger className="w-full border-dashed text-white">
									<SelectValue placeholder="Selecione o status" />
								</SelectTrigger>
								<SelectContent>
									{statusOptions.map((opt) => (
										<SelectItem key={opt.value} value={opt.value}>
											{opt.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					)}
				/>
			</div>

			<div className="flex flex-col gap-3 bg-dark200 p-8 rounded-2xl shadow-formbox flex-1">
				<div className="flex justify-between items-center">
					<h3 className="text-lg font-semibold text-white">Tarefas</h3>
					<Button
						type="button"
						className="max-h-8 hover:brightness-100! hover:bg-orange500 hover:text-dark100"
						onClick={() =>
							append({
								data: "",
								descricao: "",
								descricaoDetalhada: "",
								horaInicio: "",
								horaFinal: "",
							})
						}
					>
						<Plus size={24} /> Nova Tarefa
					</Button>
				</div>

				{fields.map((field, index) => (
					<TarefaInput
						key={field.id}
						index={index}
						register={register}
						control={control}
						remove={remove}
						isLast={index === fields.length - 1}
					/>
				))}
			</div>

			<section className="flex justify-between">
				<NavLink to={"/projetos"}>
					<Button type="button" className="bg-dark300 text-white">
						Voltar
					</Button>
				</NavLink>
				<Button
					type="submit"
					disabled={isSubmitting}
					className="bg-green-800 text-white"
				>
					{buttonLabel}
				</Button>
			</section>
		</form>
	);
};

export default FormProjeto;
