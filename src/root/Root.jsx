import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const Root = () => {
    const location = useLocation();
    const noHeaderAndFooter = location.pathname.includes('login') || location.pathname.includes('register');
    // console.log(noHeaderAndFooter);
    return (
        <div>
            {noHeaderAndFooter || <Navbar />}
            <Outlet />
            {noHeaderAndFooter || <Footer />}
        </div>
    );
};

export default Root;