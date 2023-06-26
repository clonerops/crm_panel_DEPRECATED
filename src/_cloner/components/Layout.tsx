import { useState } from "react";
import Nav from "./Nav";
import { KTSVG } from "./KTSvg";
import Drawer from "./Drawer";
import NavItem from "./NavItem";

const Layout = () => {
    // const [isOpen, setIsOpen] = useState<boolean>(false);

    // const handleOpenDrawer = () => {
    //     setIsOpen(true);
    // };

    // function handleCloseDrawer() {
    //     setIsOpen(false);
    // }

    return (
        <>
            {/* Aside */}
            <aside className="fixed top-10 bottom-10 right-10 flex w-96">
                <div className="bg-indigo-700 flex flex-col flex-grow rounded-3xl">
                
                </div>
            </aside>
            <div className="flex flex-col pr-96 pt-10">
                {/* Navbar */}
                <div className="mx-auto bg-white h-auto w-full">
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
                        <div className="h-96 border-4 border-dashed border-gray-400"></div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Layout;

            {/* <div className="flex flex-1 flex-col"> */}

{
    /* <div className="flex-column-fluid flex flex-row">
                    <div className="hidden lg:block">
                        <Aside />
                    </div>
                    <div>
                        <Drawer isOpen={isOpen} onClose={handleCloseDrawer} />
                        <span onClick={handleOpenDrawer}>
                            <KTSVG
                                path={"/media/logos/gen007.svg"}
                                svgClassName="h-[18px]"
                            />
                        </span>
                    </div>
                    <div className="wrapper flex-row-fluid flex flex-col lg:pr-[35rem] lg:pt-[2rem] ">
                        <Nav />
                        <div className="content container"></div>
                    </div>
                </div> */
}
