import { FC } from "react";
import { toAbsoluteUrl } from "../helpers/assetsHelper";
import { KTSVG } from "./KTSvg";

interface IProps {
    message?: boolean;
    url: string;
}

const NavItem: FC<IProps> = ({ message = false, url }) => {
    return (
        // <section className="flex h-[4.2rem] w-[4.2rem] cursor-pointer items-center justify-center rounded-2xl border border-primary border-opacity-20">
        <section className="cursor-pointer hover:text-blue-500 border-2 p-4 rounded-2xl">
            <KTSVG path={url} svgClassName="h-[18px]" />
        </section>
    );
};

export default NavItem;
