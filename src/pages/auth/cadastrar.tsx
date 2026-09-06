import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import api from "@/lib/api";
import { useState } from "react";
import { toast } from "sonner";
import type { AxiosError } from "axios";

type CadastrarForm = {
	nome: string;
	email: string;
	senha: string;
};

export default function Cadastrar() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CadastrarForm>();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const onSubmit = async (data: CadastrarForm) => {
		setLoading(true);
		try {
			await api.post("/cadastrar", {
				nome: data.nome.trim(),
				email: data.email.trim(),
				senha: data.senha,
			});

			toast.success("Cadastro realizado com sucesso!", { duration: 3000 });
            setTimeout(() => navigate("/login"), 3000);
		} catch (e) {
			const err = e as AxiosError<{ error?: string; message?: string }>;
			const msg =
				err.response?.data?.error ?? 
                err.response?.data?.message ?? "Não foi possível concluir o cadastro. Tente novamente.";
			toast.error(msg);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="auth-screen w-full h-screen flex flex-col items-center justify-center">
			<div className="flex flex-col items-center gap-0.5 bg-dark100 max-w-sm w-full py-4 rounded-t-xl">
				<h1 className="text-xl uppercase font-bold text-orange500">Hourlog</h1>
				<p className="text-dark700 text-sm">
					Cadastre-se para salvar seus projetos.
				</p>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="max-w-sm w-full flex flex-col gap-12 rounded-b-xl p-8 border-b border-x border-dashed border-dark400"
			>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-0.5">
						<span className="text-dark700 font-bold text-sm uppercase">
							Nome
						</span>
						<Input
							className="text-white"
							type="text"
							placeholder="Digite seu nome..."
							autoComplete="name"
							{...register("nome", {
								required: "O nome é obrigatório",
								minLength: { value: 2, message: "Mínimo de 2 caracteres" },
							})}
						/>
						{errors.nome && (
							<p className="text-red-500 text-sm font-light">
								{errors.nome.message}
							</p>
						)}
					</div>

					<div className="flex flex-col gap-0.5">
						<span className="text-dark700 font-bold text-sm uppercase">
							E-mail
						</span>
						<Input
							className="text-white"
							type="email"
							placeholder="Digite seu e-mail..."
							autoComplete="email"
							{...register("email", {
								required: "O e-mail é obrigatório",
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: "Informe um e-mail válido",
								},
							})}
						/>
						{errors.email && (
							<p className="text-red-500 text-sm font-light">
								{errors.email.message}
							</p>
						)}
					</div>

					<div className="flex flex-col gap-0.5">
						<span className="text-dark700 font-bold text-sm uppercase">
							Senha
						</span>
						<Input
							className="text-white"
							type="password"
							placeholder="Digite sua senha..."
							autoComplete="new-password"
							{...register("senha", {
								required: "A senha é obrigatória",
								minLength: { value: 6, message: "Mínimo de 6 caracteres" },
							})}
						/>
						{errors.senha && (
							<p className="text-red-500 text-sm font-light">
								{errors.senha.message}
							</p>
						)}
					</div>
				</div>

				<Button
					type="submit"
					disabled={loading}
					className="w-full bg-dark400 rounded-md text-dark700 hover:text-dark100 font-bold uppercase hover:bg-orange500 transition cursor-pointer disabled:opacity-60"
				>
					{loading ? "Cadastrando..." : "Cadastrar"}
				</Button>
			</form>

			<span className="text-sm italic text-dark700 mt-6">
				Já tem conta? Clique{" "}
				<NavLink
					to={"/login"}
					className={"font-bold hover:text-orange500 transition"}
				>
					aqui
				</NavLink>{" "}
				para entrar.
			</span>
		</div>
	);
}
