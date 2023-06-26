import { FC } from "react";

interface IProps {
    isOpen: boolean
    onClose: () => void
}

const Drawer:FC<IProps> = ({isOpen, onClose}) => {
    return (
        <div
            className={`fixed inset-0 z-50 bg-gray-600 bg-opacity-50 transition-opacity ${
                isOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
            }`}
        >
            <div className="fixed inset-y-0 right-0 flex max-w-full">
                <div className="relative w-screen max-w-md">
                    <div className="h-full overflow-y-auto bg-white shadow-lg">
                        <div className="flex items-center justify-between px-4 py-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Drawer Title
                            </h2>
                            <button
                                className="text-gray-500 hover:text-gray-900"
                                onClick={onClose}
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="px-4 py-6">
                            {/* Drawer content goes here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
