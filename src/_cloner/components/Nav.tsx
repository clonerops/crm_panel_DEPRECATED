import { FC } from "react";
import NavItem from "./NavItem";
import { useDarkMode } from "../helpers/darkmodeHelpers";

interface IProps {
    handleIsVisible: () => void;
}

const Nav: FC<IProps> = ({ handleIsVisible }) => {
    const { toggleDarkMode } = useDarkMode();

    return (
        <nav className="mx-auto h-auto w-full bg-white">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div onClick={handleIsVisible} className="flex md:hidden">
                        <NavItem url="/media/logos/abs015.svg" />
                    </div>
                    <div className="hidden flex-col md:flex">
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
                        <NavItem
                            onClick={toggleDarkMode}
                            url="/media/logos/gen060.svg"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
