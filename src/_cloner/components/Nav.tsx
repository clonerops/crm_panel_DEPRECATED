import NavItem from "./NavItem";

const Nav = () => {
    return (
        <nav className="mx-auto h-auto w-full bg-white">
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
        </nav>
    );
};

export default Nav;
