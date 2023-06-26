import NavItem from "./NavItem";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            {/* Aside */}
            <aside className="fixed bottom-10 right-10 top-10 flex w-96">
                <div className="flex flex-grow flex-col rounded-3xl bg-indigo-800">
                    <div className="p-12 font-yekan_bold text-2xl text-white">
                        مدیریت امور مشتریان
                    </div>
                </div>
            </aside>
            <div className="flex flex-col pr-96 pt-10">
                {/* Navbar */}
                <div className="mx-auto h-auto w-full bg-white">
                    <div className="container">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <h2 className="font-yekan_bold text-3xl text-primary">
                                    ابوالفضل معصومی
                                </h2>
                                <sub className="font-yekan_bold text-xl text-gray-500">
                                    مدیر سایت
                                </sub>
                            </div>
                            <div className="flex gap-4">
                                <NavItem url="/media/logos/gen007.svg" />
                                <NavItem url="/media/logos/com003.svg" />
                                <NavItem url="/media/logos/gen060.svg" />
                            </div>
                        </div>
                    </div>
                </div>
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
