import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAV_ITEMS } from "@/constants/Menu";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				aria-label="Abrir menu"
				className="sm:hidden text-dark500 hover:text-orange500 transition cursor-pointer"
			>
				<Menu size={24} />
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start" className="w-52">
				{NAV_ITEMS.map((item) => (
					<DropdownMenuItem key={item.id} asChild>
						<NavLink
							to={item.path}
							className={({ isActive }) =>
								[
									"flex items-center gap-3 w-full",
									isActive ? "text-orange500" : "",
								].join(" ")
							}
						>
							<item.icon size={18} />
							<span>{item.title}</span>
						</NavLink>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default MobileNav;
