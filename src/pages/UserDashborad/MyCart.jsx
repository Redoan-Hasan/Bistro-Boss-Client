import React from 'react';
import OrderOnline from '../../Components/OrderOnline';
import { FaTrashAlt } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Loader from '../../shared/Loader';

const MyCart = () => {
    const [cart, refetch , isLoading] = useCart();
    const axiosSecure = useAxiosSecure();

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const totalOrders = cart.length;

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });
        
        if (result.isConfirmed) {
            try {
                await axiosSecure.delete(`/MyCart/${id}`);
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again."
                })
            }
        }
    }
    return (
        <div>
            {isLoading && <Loader />}
            <div>
                <OrderOnline textOne={"My Cart"} textTwo={"WANNA ADD MORE?"} />
            </div>
            
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md my-8">
                {/* Cart Summary and Pay Button */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="w-1/3 text-left font-cinzel font-bold text-xl">
                        TOTAL ORDERS: {totalOrders}
                    </div>
                    <div className="w-1/3 text-center font-cinzel font-bold text-xl">
                        TOTAL PRICE: ${totalPrice.toFixed(1)}
                    </div>
                    <div className="w-1/3 text-right">
                        <button className="bg-[#D1A054] text-white px-4 py-2 rounded font-cinzel">PAY</button>
                    </div>
                </div>
                
                {/* Cart Table */}
                <div className="overflow-x-auto font-inter">
                    <table className="w-full border-collapse">
                        {/* Table Header */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white">
                                <th className="py-3 px-2 text-center rounded-tl-lg">#</th>
                                <th className="py-3 px-4 text-left">ITEM IMAGE</th>
                                <th className="py-3 px-4 text-left">ITEM NAME</th>
                                <th className="py-3 px-4 text-right">PRICE</th>
                                <th className="py-3 px-4 text-center rounded-tr-lg">ACTION</th>
                            </tr>
                        </thead>
                        
                        {/* Table Body */}
                        <tbody>
                            {cart?.map((item, index) => (
                                <React.Fragment key={item._id}>
                                    <tr>
                                        <td className="py-4 px-2 text-center">{index + 1}</td>
                                        <td className="py-4 px-4">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover"/>
                                        </td>
                                        <td className="py-4 px-4">{item.name}</td>
                                        <td className="py-4 px-4 text-right">${item.price.toFixed(1)}</td>
                                        <td onClick={() => handleDelete(item._id)} className="py-4 px-4 text-center">
                                            <button className="bg-red-600 text-white p-2 rounded">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                    {index < cart?.length - 1 && (
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