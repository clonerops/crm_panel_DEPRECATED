import { FC } from "react";

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
            <div className="flex flex-grow flex-col bg-indigo-800 md:rounded-3xl">
                <div className="p-12 font-yekan_bold text-2xl text-white">
                    مدیریت امور مشتریان
                </div>
            </div>
        </aside>
    );
};

export default Aside;
