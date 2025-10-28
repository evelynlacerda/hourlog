import { NavLink } from "react-router";

export default function ResetPasswordSoon() {
	return (
		<div className="w-full h-screen flex items-center justify-center flex-col">
			<h1 className="font-extrabold text-orange500 text-3xl uppercase mb-3.5">
				Em breve!
			</h1>
			<p className="text-dark700 w-96 text-center">
				A recuperação de senha ficará disponível nas próximas versões, em breve
				você poderá redefinir sua senha com segurança.
			</p>
			<span className="text-dark500 mt-5">
				Já tem uma conta? Clique{" "}
				<NavLink
					to={"/login"}
					className={"font-semibold hover:text-orange500 transition"}
				>
					aqui
				</NavLink>{" "}
				para entrar.
			</span>
		</div>
	);
}
