import { useState } from "react";
import { MdOutlineArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Dropdown = ({tabName, tabWidth}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-400 transition-colors duration-500 w-max"
                    onClick={toggleDropdown}
                >
                    {tabName}

                    { isOpen ? (

                        <span className="text-2xl ml-5"><MdOutlineArrowDropDown /></span>

                    ) : (

                        <span className="text-2xl ml-5"><MdArrowDropUp /></span>
                    )}

                </button>
            </div>

            {isOpen && (
                <div className={`origin-top-right absolute right-0 -left-[1px] mt-2 w-[${tabWidth}] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20`}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            Option 1
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            Option 2
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            Option 3
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown