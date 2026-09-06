import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	flexRender,
	getCoreRowModel,
	useReactTable,
	type ColumnDef,
} from "@tanstack/react-table";

declare module "@tanstack/react-table" {
	interface ColumnMeta<TData, TValue> {
        data?: TData;
        value?: TValue;
		width?: string | number;
		align?: "left" | "center" | "right";
	}
}

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

    const textAlignClass = (align?: "left" | "center" | "right") => {
			switch (align) {
				case "center":
					return "text-center";
				case "right":
					return "text-right";
				default:
					return "text-left";
			}
		};


	return (
		<div className="data-table-wrap w-full overflow-x-auto">
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								const width = header.column.columnDef.meta?.width;
                                const align = header.column.columnDef.meta?.align;

								return (
									<TableHead
										key={header.id}
                                        style={width ? { width: `${width}%` } : {}}
										className={`text-dark700 uppercase text-xs ${textAlignClass(align)}`}
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow key={row.id} className="h-16 text-white text-base">
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell
								colSpan={columns.length}
								className="h-24 text-center text-white"
							>
								Nenhum resultado encontrado.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}
