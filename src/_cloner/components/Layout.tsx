import Aside from "./Aside";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";

const Layout = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleIsVisible = (): void => setIsVisible(true);

    const handleIsHidden = (): void => setIsVisible(false);

    return (
        <>
            {isVisible && (
                <div
                    onClick={handleIsHidden}
                    className={`fixed inset-0 right-0 top-0 h-full w-full bg-gray-900 bg-opacity-50 transition-opacity ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                ></div>
            )}
            {/* Aside */}
            <Aside isVisible={isVisible} />
            <div className="flex flex-col pt-10 md:pr-96">
                {/* Navbar */}
                <Nav handleIsVisible={handleIsVisible} />
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
