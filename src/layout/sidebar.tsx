import { useEffect, useState } from "react";
import { MENU_ITEMS } from "@/constants/Menu";
import { LayoutDashboard, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { NavLink } from "react-router-dom";

const COLLAPSE_QUERY = "(max-width: 1024px)";

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(
		() =>
			typeof window !== "undefined" &&
			window.matchMedia(COLLAPSE_QUERY).matches
	);

	// Colapsa automaticamente ao entrar em telas de tablet/iPad
	useEffect(() => {
		const mq = window.matchMedia(COLLAPSE_QUERY);
		const handleChange = (e: MediaQueryListEvent) => {
			if (e.matches) setCollapsed(true);
		};
		mq.addEventListener("change", handleChange);
		return () => mq.removeEventListener("change", handleChange);
	}, []);

	return (
		<aside
			className={[
				"app-sidebar max-sm:hidden min-h-[calc(100vh-128px)] border-r border-dashed border-dark400 py-8",
				collapsed ? "w-18 px-3.5" : "w-[14rem] px-6",
				"flex flex-col gap-12 text-dark700 transition-all duration-300 ease-out relative",
			].join(" ")}
		>
			{/* Botão de colapsar */}
			<button
				type="button"
				onClick={() => setCollapsed((c) => !c)}
				aria-label={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
				aria-expanded={!collapsed}
				className="app-sidebar__toggle rounded-md border border-dashed border-dark400 px-2 py-2 transition absolute top-6 -right-5 bg-dark200 cursor-pointer hover:text-orange500 hover:border-orange500"
			>
				{collapsed ? <PanelLeftOpen size={24} /> : <PanelLeftClose size={24} />}
			</button>

			{/* Link Dashboard */}
			<NavLink
				to="/dashboard"
				className={({ isActive }) =>
					[
						"flex items-center gap-4 transition hover:text-orange500",
						isActive ? "text-orange500" : "",
					].join(" ")
				}
				title={collapsed ? "Dashboard" : undefined}
			>
				<LayoutDashboard size={18} />
				{!collapsed && <span>Dashboard</span>}
			</NavLink>

			{/* Bloco de navegação */}
			<div className="app-sidebar__nav flex flex-col gap-6">
				{!collapsed && (
					<span className="uppercase text-sm font-bold">Navegação</span>
				)}

				{MENU_ITEMS.map((item) => (
					<NavLink
						key={item.id}
						to={item.path}
						className={({ isActive }) =>
							[
								"flex items-center gap-4 transition hover:text-orange500",
								isActive ? "text-orange500" : "",
							].join(" ")
						}
						title={collapsed ? item.title : undefined}
					>
						<item.icon size={18} />
						{!collapsed && (
							<span className="whitespace-nowrap">{item.title}</span>
						)}
					</NavLink>
				))}
			</div>
		</aside>
	);
};

export default Sidebar;
