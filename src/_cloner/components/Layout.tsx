import Aside from "./Aside";
import Nav from "./Nav";
import NavItem from "./NavItem";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            {/* Aside */}
            <Aside />
            <div className="flex flex-col pr-96 pt-10">
                {/* Navbar */}
                <Nav />
                {/* Content */}
                <main className="pt-10">
                    <div className="container mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
};

export default Layout;
