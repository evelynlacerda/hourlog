import { Outlet } from "react-router"
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

const Structor = () => {
    return (
        <>
            <Header/>
            <div className="flex app-shell">
                <Sidebar/>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
};

export default Structor;
