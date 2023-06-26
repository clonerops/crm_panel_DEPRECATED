import NavItem from "./NavItem";

const Nav = () => {
    return (
        <nav className="container flex h-[8rem] items-center justify-between">
            <div>
                <h2 className="font-yekan_bold text-4xl text-primary">
                    ابوالفضل معصومی
                </h2>
                <sub className="font-yekan_bold text-2xl text-primary text-opacity-50 ">
                    مدیر سایت
                </sub>
            </div>
            <div className="flex gap-4">
                <NavItem url="/media/logos/gen007.svg" />
                <NavItem url="/media/logos/com003.svg" />
                <NavItem url="/media/logos/gen060.svg" />
            </div>
        </nav>
    );
};

export default Nav;
