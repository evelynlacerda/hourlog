import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePassword } from "@/hooks/usePassword";
import { NavLink } from "react-router";

export default function RecuperarSenha() {
    const {register, handleSubmit, errors, loading, onSubmit} = usePassword("forgot");

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<div className="flex flex-col items-center gap-0.5 bg-dark100 max-w-sm w-full py-4 rounded-t-xl">
				<h1 className="text-xl uppercase font-bold text-orange500">Hourlog</h1>
				<p className="text-dark700 text-sm">Recupere o acesso à sua conta.</p>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="max-w-sm w-full flex flex-col gap-8 rounded-b-xl p-8 border-b border-x border-dashed border-dark400"
			>
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
					{errors.email && (
						<p className="text-red-500 text-sm font-light">{errors.email.message}</p>
					)}
				</div>

				<Button
					type="submit"
					disabled={loading}
					className="w-full bg-dark400 rounded-md text-dark700 hover:text-dark100 font-bold uppercase hover:bg-orange500 transition cursor-pointer disabled:opacity-60"
				>
					{loading ? "Enviando..." : "Enviar link de recuperação"}
				</Button>
			</form>

			<span className="text-sm italic text-dark700 mt-6">
				Lembrou a senha?{" "}
				<NavLink
					to={"/login"}
					className={"font-bold hover:text-orange500 transition"}
				>
					Entrar
				</NavLink>
			</span>
		</div>
	);
}
