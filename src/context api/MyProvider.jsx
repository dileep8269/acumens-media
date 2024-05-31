/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <MyContext.Provider value={{ menuOpen, setMenuOpen, isModalOpen, setIsModalOpen }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;