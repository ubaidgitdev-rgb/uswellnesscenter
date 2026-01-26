import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    const isAdminPage = location.pathname.startsWith('/admin');

    return (
        <div className="min-h-screen flex flex-col">
            {!isAdminPage && <Navbar />}
            <main className="flex-grow">
                {children}
            </main>
            {!isAdminPage && <Footer />}
        </div>
    );
};

export default Layout;
