import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { FaHome, FaCalendarAlt, FaWallet, FaShoppingCart, FaUtensils, FaBars, FaTimes } from 'react-icons/fa';
import { MdRateReview } from 'react-icons/md';
import { BsCalendarCheck } from 'react-icons/bs';
import useCart from '../hooks/useCart';

const DashBoardRoot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart] = useCart() || [];

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const userNavItems = [
        { to: 'UserHome', icon: <FaHome />, label: 'USER HOME' },
        { to: '/dashboard/reservation', icon: <FaCalendarAlt />, label: 'RESERVATION' },
        { to: '/dashboard/paymentHistory', icon: <FaWallet />, label: 'PAYMENT HISTORY' },
        { to: 'MyCart', icon: <FaShoppingCart />, label: 'MY CART', count: cart?.length },
        { to: '/dashboard/addReview', icon: <MdRateReview />, label: 'ADD REVIEW' },
        { to: '/dashboard/myBooking', icon: <BsCalendarCheck />, label: 'MY BOOKING' },
    ];

    const commonNavItems = [
        { to: '/', icon: <FaHome />, label: 'HOME' },
        { to: '/ourMenu', icon: <FaUtensils />, label: 'MENU' },
        { to: '/ourShop/salad', icon: <FaShoppingCart />, label: 'SHOP' },
        { to: '/contactUs', icon: <FaHome />, label: 'CONTACT' },
    ];

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 font-cinzel">
            {/* Toggle Button for Small and Medium Devices */}
            <button 
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 bg-[#D1A054] text-white p-2 rounded-full shadow-lg"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar */}
            <div className={`
                fixed inset-y-0 left-0 transform z-40
                lg:relative lg:translate-x-0 lg:w-64
                transition duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                bg-[#D1A054] text-black
                flex flex-col
                overflow-y-auto
            `}>
                {/* Logo */}
                <div className="p-4 text-center">
                    <Link to="/" className="flex flex-col items-center">
                        <h1 className="text-black text-2xl font-bold uppercase">
                            BISTRO BOSS
                        </h1>
                        <p className="text-black tracking-[0.2em] text-sm">
                            RESTAURANT
                        </p>
                    </Link>
                </div>

                <div className="flex-1 p-4">
                    {/* User Dashboard Navigation */}
                    <ul className="space-y-2 text-base">
                        {userNavItems.map((item, index) => (
                            <li key={index}>
                                <NavLink 
                                    to={item.to} 
                                    onClick={closeSidebar}
                                    className={({ isActive }) => `
                                        flex items-center p-2 rounded-lg text-base
                                        ${isActive 
                                            ? 'text-white font-bold' 
                                            : 'text-black hover:text-white/80'}
                                        transition-colors duration-200
                                        ${!isOpen && 'md:justify-center lg:justify-start'}
                                    `}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span className={`ml-3 ${!isOpen && 'md:hidden lg:inline'}`}>{item.label}</span>
                                    {item.count > 0 && (
                                        <span className={`ml-auto bg-white text-[#D1A054] px-2 py-1 rounded-full text-xs ${!isOpen && 'md:hidden lg:inline'}`}>
                                            {item.count}
                                        </span>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="border-t border-black/20 my-4"></div>

                    {/* Common Navigation */}
                    <ul className="space-y-2">
                        {commonNavItems.map((item, index) => (
                            <li key={index}>
                                <NavLink 
                                    to={item.to} 
                                    onClick={closeSidebar}
                                    className={({ isActive }) => `
                                        flex items-center p-2 rounded-lg
                                        ${isActive 
                                            ? 'text-white font-bold' 
                                            : 'text-black hover:text-white/80'}
                                        transition-colors duration-200
                                        ${!isOpen && 'md:justify-center lg:justify-start'}
                                    `}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span className={`ml-3 ${!isOpen && 'md:hidden lg:inline'}`}>{item.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-8 lg:p-10 md:ml-16 lg:ml-0 transition-all duration-300">
                <Outlet />
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={closeSidebar}
                ></div>
            )}
        </div>
    );
};

export default DashBoardRoot;