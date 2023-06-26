import { FC } from "react";
import { KTSVG } from "./KTSvg";

interface IProps {
    message?: boolean;
    url: string;
}

const NavItem: FC<IProps> = ({ message = false, url }) => {
    return (
        <section className="cursor-pointer hover:text-blue-500 border-2 p-4 rounded-2xl">
            <KTSVG path={url} svgClassName="h-[18px]" />
        </section>
    );
};

export default NavItem;
