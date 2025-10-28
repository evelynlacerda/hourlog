import type { Projetos } from "@/types/Projetos";
import { DataTable } from "@/components/hourlog/DataTable";
import { columns } from "./Columns";

type Props = {
	projetos: Projetos[];
};

const ProjetosTable = ({ projetos }: Props) => {
	return (
		<DataTable
			columns={columns}
			data={projetos}
		/>
	);
};

export default ProjetosTable;
