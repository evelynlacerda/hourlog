import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import api from "@/lib/api";
import { useState } from "react";

type LoginFormInputs = {
	email: string;
	senha: string;
};

type LoginResponse = {
	token: string;
	user: {
		id: number;
		nome: string;
		email: string;
	};
};

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>();

	const [erro, setErro] = useState("");
	const navigate = useNavigate();

	const onSubmit = async (data: LoginFormInputs) => {
		try {
			const response = await api.post<LoginResponse>("/login", data);
			localStorage.setItem("token", response.data.token);
            localStorage.setItem("hourlog:auth", JSON.stringify(response.data.user));
            localStorage.setItem("nome", response.data.user?.nome ?? "");
			navigate("/dashboard");
		} catch {
			setErro("E-mail ou senha incorretos.",);
		}
	};

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<div className="flex flex-col items-center gap-0.5 bg-dark100 max-w-sm w-full py-4 rounded-t-xl">
				<h1 className="text-xl uppercase font-bold text-orange500">Hourlog</h1>
				<p className="text-dark700 text-sm">Faça login para acessar seus projetos.</p>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="max-w-sm w-full flex flex-col gap-12 rounded-b-xl p-8 border-b border-x border-dashed border-dark400"
			>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-0.5">
						<span className="text-dark700 font-bold text-sm uppercase">
							E-mail
						</span>
						<Input
							className="text-white"
							type="email"
							placeholder="Digite seu e-mail..."
							{...register("email", { required: "O e-mail é obrigatório" })}
						/>
						{errors.email && (<p className="text-red-500 text-sm font-light">{errors.email.message}</p>)}
					</div>

					<div className="flex flex-col gap-0.5">
						<span className="text-dark700 font-bold text-sm uppercase">
							Senha
						</span>
						<Input
							className="text-white"
							type="password"
							placeholder="Digite sua senha..."
							{...register("senha", { required: "A senha é obrigatória" })}
						/>
						{errors.senha && (<p className="text-red-500 text-sm font-light">{errors.senha.message}</p>)}
                        <NavLink to={"/recuperar"} className={"self-end text-sm text-dark700 mt-2 hover:text-orange500 transition cursor-pointer"}>Esqueceu a senha?</NavLink>
					</div>

					{erro && <p className="text-red-500 text-sm font-light">{erro}</p>}
				</div>

				<Button
					type="submit"
					className="w-full bg-orange500 rounded-md text-dark100 font-bold uppercase hover:bg-orange500 transition cursor-pointer"
				>
					Entrar
				</Button>
			</form>

			<span className="text-sm italic text-dark700 mt-6">
				Não tem conta? Cadastre-se <NavLink to={"/cadastrar"} className={"font-bold hover:text-orange500 transition"} >aqui.</NavLink>
			</span>
		</div>
	);
}
