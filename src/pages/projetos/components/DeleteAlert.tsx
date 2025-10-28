import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useProjetos } from "@/hooks/useProjetos";
// import { useNavigate } from "react-router";
import { toast } from "sonner";

type Props = { id: number; nomeProjeto?: string; label?: string };

export function DeleteAlert({ id, nomeProjeto, label = "Deletar" }: Props) {
	const { deleteProjeto } = useProjetos();
	// const navigate = useNavigate();

	const handleConfirm = () => {
		deleteProjeto.mutate(id, {
			onSuccess: () => {
				toast("Projeto deletado com sucesso!")
			},
            onError: () => {
                toast("Erro ao deletar o projeto, tente novamente.")
            }
		});
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<DropdownMenuItem onSelect={(e) => e.preventDefault()}>
					{label}
				</DropdownMenuItem>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
                    <AlertDialogTitle>Excluir</AlertDialogTitle>
					<AlertDialogDescription>
						{nomeProjeto
							? `Tem certeza de que deseja excluir o projeto ${nomeProjeto}? Essa ação não poderá ser desfeita.`
							: "Tem certeza de que deseja excluir esse projeto? Essa ação não poderá ser desfeita."}
					</AlertDialogDescription>
				</AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm}>Excluir</AlertDialogAction>
                </AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
