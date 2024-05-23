import { createContext, useState } from 'react';

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <MyContext.Provider value={{ menuOpen, setMenuOpen }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
