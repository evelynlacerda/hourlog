import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePassword } from "@/hooks/usePassword";

export default function ResetPassword() {
    const {errors, handleSubmit, loading, onSubmit, register, watch} = usePassword("reset");

    return (
			<div className="auth-screen w-full h-screen flex flex-col items-center justify-center">
				<div className="flex flex-col items-center gap-0.5 bg-dark100 max-w-sm w-full py-4 rounded-t-xl">
					<h1 className="text-xl uppercase font-bold text-orange500">
						Hourlog
					</h1>
					<p className="text-dark700 text-sm">Crie uma nova senha.</p>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="max-w-sm w-full flex flex-col gap-8 rounded-b-xl p-8 border-b border-x border-dashed border-dark400"
				>
					<div className="flex flex-col gap-0.5">
						<span className="text-dark700 font-bold text-sm uppercase">
							Nova senha
						</span>
						<Input
							className="text-white"
							type="password"
							placeholder="Digite a nova senha..."
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

					<div className="flex flex-col gap-0.5">
						<span className="text-dark700 font-bold text-sm uppercase">
							Confirmar senha
						</span>
						<Input
							className="text-white"
							type="password"
							placeholder="Confirme a nova senha..."
							{...register("confirma", {
								required: "Confirme a senha",
								validate: (v) =>
									v === watch("senha") || "As senhas não coincidem",
							})}
						/>
						{errors.confirma && (
							<p className="text-red-500 text-sm font-light">
								{errors.confirma.message}
							</p>
						)}
					</div>

					<Button
						type="submit"
						disabled={loading}
						className="w-full bg-dark400 rounded-md text-dark700 hover:text-dark100 font-bold uppercase hover:bg-orange500 transition cursor-pointer disabled:opacity-60"
					>
						{loading ? "Redefinindo..." : "Redefinir senha"}
					</Button>
				</form>
			</div>
		);
}