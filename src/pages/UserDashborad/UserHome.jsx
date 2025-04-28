import React from 'react';
import { FaCalendarAlt, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { MdRateReview } from 'react-icons/md';
import { BsCalendarCheck } from 'react-icons/bs';

const UserHome = () => {
    // Static user data (you'll make this dynamic)
    const userName = "Awlad Hossain";
    const stats = {
        orders: 6,
        reviews: 2,
        bookings: 1,
        payments: 3
    };

    return (
        <div className="w-full p-4 font-cinzel">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Hi, Welcome Back!</h2>
            
            {/* Activity Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Menu Card */}
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 text-white p-4 rounded-lg flex items-center justify-between">
                    <div className="text-4xl">
                        <FaWallet />
                    </div>
                    <div className="text-right">
                        <h3 className="text-3xl font-bold">205</h3>
                        <p>Menu</p>
                    </div>
                </div>
                
                {/* Shop Card */}
                <div className="bg-gradient-to-r from-amber-500 to-amber-400 text-white p-4 rounded-lg flex items-center justify-between">
                    <div className="text-4xl">
                        <FaShoppingCart />
                    </div>
                    <div className="text-right">
                        <h3 className="text-3xl font-bold">103</h3>
                        <p>Shop</p>
                    </div>
                </div>
                
                {/* Contact Card */}
                <div className="bg-gradient-to-r from-pink-500 to-pink-400 text-white p-4 rounded-lg flex items-center justify-between">
                    <div className="text-4xl">
                        <FaCalendarAlt />
                    </div>
                    <div className="text-right">
                        <h3 className="text-3xl font-bold">03</h3>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            
            {/* User Info and Activities Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* User Profile */}
                <div className="bg-[#FFEFD5] p-6 rounded-lg flex flex-col items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-amber-400 mb-4 overflow-hidden">
                        {/* Placeholder circle for profile image */}
                        <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold">{userName}</h3>
                </div>
                
                {/* Activities */}
                <div className="bg-[#FFF8DC] p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">Your Activities</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center text-blue-500">
                            <FaShoppingCart className="mr-2" /> 
                            <span>Orders: {stats.orders}</span>
                        </li>
                        <li className="flex items-center text-green-500">
                            <MdRateReview className="mr-2" /> 
                            <span>Reviews: {stats.reviews}</span>
                        </li>
                        <li className="flex items-center text-amber-500">
                            <BsCalendarCheck className="mr-2" /> 
                            <span>Bookings: {stats.bookings}</span>
                        </li>
                        <li className="flex items-center text-orange-500">
                            <FaWallet className="mr-2" /> 
                            <span>Payment: {stats.payments}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserHome;