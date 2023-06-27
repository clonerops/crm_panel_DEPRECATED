import { FC } from "react";
import { KTSVG } from "./KTSvg";

interface IProps {
    isVisible: boolean;
}
const Aside: FC<IProps> = ({ isVisible }) => {
    return (
        <aside
            className={`fixed bottom-0 top-0 transition duration-500 ease-in-out ${
                isVisible ? "flex" : "hidden"
            } w-96 md:bottom-10 md:right-10 md:top-10 md:flex`}
        >
            <div className="flex flex-grow flex-col bg-indigo-800 dark:bg-slate-800 md:rounded-3xl">
                <div className="p-12 font-yekan_bold text-2xl text-white">
                    مدیریت امور مشتریان
                </div>
                <div>
                    <div className="flex gap-2 px-12 py-4">
                        <div className="logo">
                            <KTSVG
                                path={"/media/logos/arr001.svg"}
                                svgClassName="h-[18px]"
                                className="text-white"
                            />
                        </div>
                        <div className="font-yekan_bold text-xl text-white">
                            داشبورد
                        </div>
                    </div>
                    <div className="flex gap-2 px-12 py-4">
                        <div className="logo">
                            <KTSVG
                                path={"/media/logos/arr001.svg"}
                                svgClassName="h-[18px]"
                                className="text-white"
                            />
                        </div>
                        <div className="font-yekan_bold text-xl text-white">
                            مدیریت کاربران
                            <ul className="py-4">
                                <li className="py-2 text-white text-opacity-60">
                                    <span className="w-[50px] h-[50px] bg-white"></span>
                                    افزودن کاربر
                                </li>
                                <li className="py-2 text-white text-opacity-60">
                                    ویرایش کاربر
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Aside;
