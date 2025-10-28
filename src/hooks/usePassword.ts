import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "@/lib/api";
import { toast } from "sonner";
import {
	useForm,
	type UseFormRegister,
	type UseFormHandleSubmit,
	type FieldErrors,
} from "react-hook-form";
import type { AxiosError } from "axios";

export type ForgotForm = { email: string };
export type ResetForm = { senha: string; confirma: string };

type ForgotReturn = {
	register: UseFormRegister<ForgotForm>;
	handleSubmit: UseFormHandleSubmit<ForgotForm>;
	errors: FieldErrors<ForgotForm>;
	loading: boolean;
	onSubmit: (data: ForgotForm) => Promise<void>;
};

type ResetReturn = {
	register: UseFormRegister<ResetForm>;
	handleSubmit: UseFormHandleSubmit<ResetForm>;
	errors: FieldErrors<ResetForm>;
	loading: boolean;
	watch: (name: keyof ResetForm) => string;
	onSubmit: (data: ResetForm) => Promise<void>;
};

export function usePassword(mode: "forgot"): ForgotReturn;
export function usePassword(mode: "reset"): ResetReturn;
export function usePassword(mode: "forgot" | "reset"): ForgotReturn | ResetReturn {
	const navigate = useNavigate();
	const { uid, token } = useParams<{ uid: string; token: string }>();
	const [loading, setLoading] = useState(false);

	const forgotForm = useForm<ForgotForm>();
	const resetForm = useForm<ResetForm>();

	if (mode === "forgot") {
		const onSubmit = async (data: ForgotForm) => {
			setLoading(true);
			try {
				await api.post("/password/forgot", { email: data.email.trim() });
				toast.success("Se o e-mail existir, enviaremos instruções.");
				navigate("/login");
			} catch {
				toast.success("Se o e-mail existir, enviaremos instruções.");
				navigate("/login");
			} finally {
				setLoading(false);
			}
		};

		return {
			register: forgotForm.register,
			handleSubmit: forgotForm.handleSubmit,
			errors: forgotForm.formState.errors,
			loading,
			onSubmit,
		};
	}

	const onSubmit = async (data: ResetForm) => {
		if (!uid || !token) {
			toast.error("Link inválido ou expirado.");
			return;
		}
		setLoading(true);
		try {
			await api.post("/password/reset", {
				userId: Number(uid),
				token,
				novaSenha: data.senha,
			});
			toast.success("Senha redefinida com sucesso! Faça login.");
			navigate("/login");
		} catch (e) {
            const err = e as AxiosError<{ error?: string; message?: string }>
			const msg = 
                err.response?.data?.error ??
                err.response?.data?.error ?? "Link inválido ou expirado.";
			toast.error(msg);
		} finally {
			setLoading(false);
		}
	};

	return {
		register: resetForm.register,
		handleSubmit: resetForm.handleSubmit,
		errors: resetForm.formState.errors,
		loading,
		watch: resetForm.watch,
		onSubmit,
	};
}
