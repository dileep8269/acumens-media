import { useState, useContext } from "react";
import acumensLogo from "../assets/acumens-logoo_new2.webp"
import acumensStyleLogo from "../assets/acumenslogo2.webp"
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Dropdown from "./Dropdown";
import { MyContext } from "../context api/MyProvider";


const Header = () => {

    const { menuOpen, setMenuOpen } = useContext(MyContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const buttonTabs = ["Login", "Sign Up", "Lets Talk"];

    return (
        <>
            <header className="bg-transparent p-4 text-black fixed top-0 left-0 w-full z-50 bg-white">

                {/* Desktop View */}
                <div className="hidden xl:flex container mx-auto justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center shrink-0 mr-3">
                        <img src={acumensStyleLogo} alt="Acumens Logo" className="h-10 w-10 mr-2" />
                        <img src={acumensLogo} alt="Acumens Logo" className="h-10" />
                    </div>
                    {/* Dropdown Menu */}
                    <div className="space-x-2">
                        <ul className='flex flex-row justify-center items-center'>
                            <li className='mr-4 cursor-pointer px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-700 hover:bg-gray-400 transition-colors duration-500'>
                                <a href="#">Home</a>
                            </li>
                            <li className='mr-4 cursor-pointer'>
                                <Dropdown tabName={"Ai Solutions"} tabWidth={"10px"} />
                            </li>
                            <li className='mr-4 cursor-pointer px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-700 hover:bg-gray-400 transition-colors duration-500'>
                                <a href="#">Pricing</a>
                            </li>
                            <li className='mr-4 cursor-pointer'>
                                <Dropdown tabName={"Who We Are"} tabWidth={"10px"} />
                            </li>
                        </ul>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center shrink-0 mr-3">
                        <ul className='flex flex-row justify-center items-center'>
                            {buttonTabs.map((button, index) => (
                                <li key={index} className='bg-black text-white font-semibold px-4 py-2 rounded-xl mr-4 cursor-pointer w-max'>{button}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>

            {/* Mobile view */}
            <header className="bg-blue-500 p-4 flex justify-between items-center xl:hidden -mt-8 fixed top-8 left-0 w-full z-50">

                {/* Logo */}
                <div className="flex items-center">
                    <img src={acumensStyleLogo} alt="Acumens Logo" className="h-10 w-10 mr-2" />
                    <img src={acumensLogo} alt="Acumens Logo" className="h-10" />
                </div>

                {/* Mobile menu */}
                <div className={`absolute top-16 left-0 right-0 bg-blue-500 text-white text-lg font-semibold p-4 transition-opacity duration-700 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <ul className="flex flex-col space-y-5">
                        <li className='mr-4 cursor-pointer px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-700 hover:bg-gray-400 w-fit'>
                            <a href="#" onClick={toggleMenu}>Home</a>
                        </li>
                        <li className='mr-4 cursor-pointer'>
                            <Dropdown tabName={"Ai Solutions"} tabWidth={"10px"} />
                        </li>
                        <li className='mr-4 cursor-pointer px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-700 hover:bg-gray-400 w-fit'>
                            <a href="#" onClick={toggleMenu}>Pricing</a>
                        </li>
                        <li className='mr-4 cursor-pointer'>
                            <Dropdown tabName={"Who We Are"} tabWidth={"10px"} />
                        </li>
                        <li className='mr-4 cursor-pointer px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-700 hover:bg-gray-400 w-fit'>
                            <a href="#" onClick={toggleMenu}>Contact</a>
                        </li>
                        {buttonTabs.map((button, index) => {
                            if (button !== "Lets Talk") {
                                return (
                                    <li key={index} className="bg-black text-white font-semibold px-4 py-2 my-2 rounded-xl mr-4 cursor-pointer w-fit">
                                        <a href="#" onClick={toggleMenu}>{button}</a>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>

                {/* Mobile menu icon */}
                <button className="text-white transform transition-transform duration-300 hover:rotate-360" onClick={toggleMenu}>
                    {menuOpen ? (
                        <span className={`text-3xl`}><RxCross1 /></span>
                    ) : (
                        <span className={`text-3xl`}><RxHamburgerMenu /></span>
                    )}
                </button>
            </header>
        </>

    )
}

export default Header