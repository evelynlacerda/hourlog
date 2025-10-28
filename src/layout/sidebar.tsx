import { MENU_ITEMS } from "@/constants/Menu";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="w-[18rem] min-h-[calc(100vh-128px)] flex flex-col gap-10 border-r border-dashed border-dark400 py-6 px-8 text-dark700">
			<NavLink
				to="/dashboard"
				className={({ isActive }) =>
					`flex items-center gap-4 transition hover:text-orange500 ${
						isActive ? "text-orange500" : ""
					}`
				}
			>
				<LayoutDashboard size={18} /> Dashboard
			</NavLink>

			<div className="flex flex-col gap-4">
				<span className="uppercase text-sm font-bold">Registro de Horas</span>

				{MENU_ITEMS.map((item) => (
					<NavLink
                        key={item.id}
						to={item.path}
						className={({ isActive }) =>
							`flex items-center gap-4 transition hover:text-orange500 ${
								isActive ? "text-orange500" : ""
							}`
						}
					>
						<item.icon size={18} /> {item.title}
					</NavLink>
				))}
			</div>
		</aside>
	);
};

export default Sidebar;
