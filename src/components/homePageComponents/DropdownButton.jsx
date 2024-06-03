/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context api/MyProvider';
// import Button from './Button';
import { IoIosArrowRoundForward } from "react-icons/io";


function DropdownButton({ children, dropdown, classname = "" }) {
    const [isOpen, setIsOpen] = useState(false);
    const { menuOpen, setMenuOpen } = useContext(MyContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="inline-flex justify-center w-max px-4 py-1 bg-transparent text-[14px] font-syne font-bold tracking-tighter leading-5 uppercase text-gray-700"
            >
                {children}
            </button>

            {isOpen && (
                <div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className={`origin-top-right absolute top-6 xl:top-[20px] left-0 mt-2 ${classname} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50`}
                >
                    {children !== "Follow Us" && children !== "Lets Talk" &&

                        <div className="py-1">
                            {dropdown?.map((dropdownMenu, index) => {
                                return (

                                    <Link key={index} to={dropdownMenu.router} className="flex justify-start items-center gap-4 px-4 py-2 text-sm text-gray-700 transform transition-transform duration-300 hover:scale-110"
                                        onClick={() => {
                                            setIsOpen(false);
                                            toggleMenu();
                                        }} >
                                        {dropdownMenu?.icon && <span className='text-xl text-blue-Purple'>{dropdownMenu.icon}</span>}
                                        <span className='font-syne font-bold tracking-tighter leading-5'>{dropdownMenu.content}</span>
                                    </Link>
                                )
                            })}

                        </div>
                    }

                    {children === "Follow Us" &&

                        <div className='flex flex-row justify-center items-center gap-3'>
                            {dropdown?.map((dropdownMenu, index) => {
                                return (

                                    <Link key={index} to={dropdownMenu.router} className="p-4 text-base text-gray-700 hover:bg-gray-100 rounded-md font-syne font-bold tracking-tighter leading-5"
                                        onClick={() => {
                                            setIsOpen(false);
                                            toggleMenu();
                                        }} >
                                        {dropdownMenu.icon}
                                    </Link>
                                )
                            })}
                        </div>

                    }
                    {children === "Lets Talk" &&

                        <div className='p-6'>
                            {dropdown?.map((dropdownMenu, index) => {
                                return (
                             <button key={index} className='btn bg-black text-white rounded-full btn-sm mb-2 flex justify-center items-center hover:bg-black'>
                                        <Link to={dropdown.router}>{dropdownMenu.content}</Link>
                                        <IoIosArrowRoundForward />
                                    </button>
                                )
                            })}
                        </div>

                    }
                </div>
            )}
        </div>
    );
}

export default DropdownButton;