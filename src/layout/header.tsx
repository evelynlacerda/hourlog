import DropUser from "@/components/hourlog/DropdownUser";

const Header = () => {
    return (
        <div className="w-full h-16 flex justify-between items-center px-6 bg-dark100">
            <h1 className="text-orange500 uppercase font-bold text-lg">Hourlog</h1>
            <DropUser />
        </div>
    )
}

export default Header;
