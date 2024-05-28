/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Link } from 'react-router-dom';

function DropdownButton({children, dropdown}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="inline-flex justify-center w-max rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-transparent text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase text-gray-700 hover:bg-gray-50 transition-colors duration-500 focus:outline-none"
            >
                {children}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm0-3a1 1 0 01.293.707V14.5l.268-.268 2.77-2.77a1 1 0 011.415 1.415l-3.5 3.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 011.415-1.415l2.77 2.77.268.268V.707A1 1 0 0110 0z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="origin-top-right absolute top-6 left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                >
                    <div className="py-1">
                    {dropdown?.map((dropdownMenu, index) => (
                        
                        <Link key={index} to={dropdownMenu?.router} className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            {dropdownMenu.content}
                        </Link>
                    ))}
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropdownButton;
