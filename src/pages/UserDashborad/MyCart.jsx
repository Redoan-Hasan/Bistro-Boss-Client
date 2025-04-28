import React from 'react';
import OrderOnline from '../../Components/OrderOnline';
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {
    // Static cart data (you'll replace with dynamic data later)
    const cartItems = [
        { id: 1, name: 'Roast Duck Breast', price: 14.5, image: '/assets/menu/salad-bg.jpg' },
        { id: 2, name: 'Tuna Nicoise', price: 14.5, image: '/assets/menu/salad-bg.jpg' },
        { id: 3, name: 'Escalope de Veau', price: 14.5, image: '/assets/menu/salad-bg.jpg' },
        { id: 4, name: 'Chicken and Walnut Salad', price: 14.5, image: '/assets/menu/salad-bg.jpg' },
        { id: 5, name: 'Fish Parmentier', price: 14.5, image: '/assets/menu/salad-bg.jpg' },
        { id: 6, name: 'Roasted Pork Belly', price: 14.5, image: '/assets/menu/salad-bg.jpg' },
    ];

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    const totalOrders = cartItems.length;

    return (
        <div className="font-cinzel">
            <div>
                <OrderOnline textOne={"My Cart"} textTwo={"WANNA ADD MORE?"} />
            </div>
            
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md my-8">
                {/* Cart Summary and Pay Button */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h2 className="text-xl font-bold mb-2 md:mb-0">TOTAL ORDERS: {totalOrders}</h2>
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-bold">TOTAL PRICE: ${totalPrice.toFixed(1)}</h2>
                        <button className="bg-[#D1A054] text-white px-4 py-2 rounded">PAY</button>
                    </div>
                </div>
                
                {/* Cart Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        {/* Table Header */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white">
                                <th className="py-3 px-2 text-center">#</th>
                                <th className="py-3 px-4 text-left">ITEM IMAGE</th>
                                <th className="py-3 px-4 text-left">ITEM NAME</th>
                                <th className="py-3 px-4 text-right">PRICE</th>
                                <th className="py-3 px-4 text-center">ACTION</th>
                            </tr>
                        </thead>
                        
                        {/* Table Body */}
                        <tbody>
                            {cartItems.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    <tr>
                                        <td className="py-4 px-2 text-center">{index + 1}</td>
                                        <td className="py-4 px-4">
                                            <div className="w-16 h-16 bg-gray-200"></div>
                                        </td>
                                        <td className="py-4 px-4">{item.name}</td>
                                        <td className="py-4 px-4 text-right">${item.price.toFixed(1)}</td>
                                        <td className="py-4 px-4 text-center">
                                            <button className="bg-red-600 text-white p-2 rounded">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                    {index < cartItems.length - 1 && (
                                        <tr>
                                            <td colSpan="5" className="border-b border-gray-200"></td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;