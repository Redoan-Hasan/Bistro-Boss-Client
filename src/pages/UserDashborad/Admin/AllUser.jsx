import React, { useState } from "react";
import OrderOnline from "../../../Components/OrderOnline";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../../../shared/Loader";
import { useQuery } from "@tanstack/react-query";

const AllUser = () => {
    
    // Dummy data for users - will be replaced with API call later
    const [users, setUsers] = useState([]);

    const {data} = useQuery


    const handleMakeAdmin = (user) => {
        // This function will be implemented later with API
        Swal.fire({
            title: "Are you sure?",
            text: `Make ${user.name} an admin?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Update UI for demonstration purposes
                const updatedUsers = users.map(u => 
                    u._id === user._id ? {...u, role: 'admin'} : u
                );
                setUsers(updatedUsers);
                
                Swal.fire({
                    title: "Success!",
                    text: `${user.name} is now an admin`,
                    icon: "success"
                });
            }
        });
    };

    const handleDeleteUser = (id) => {
        // This function will be implemented later with API
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Update UI for demonstration purposes
                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers);
                
                Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <div>
            <div>
                <OrderOnline textOne={"How many??"} textTwo={"MANAGE ALL USERS"} />
            </div>
            
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md my-8">
                {/* User Summary */}
                <div className="mb-6">
                    <h2 className="text-left font-cinzel font-bold text-xl">
                        TOTAL USERS: {users.length}
                    </h2>
                </div>
                
                {/* Users Table */}
                <div className="overflow-x-auto font-inter">
                    <table className="w-full border-collapse">
                        {/* Table Header */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white">
                                <th className="py-3 px-2 text-center rounded-tl-lg">#</th>
                                <th className="py-3 px-4 text-left">NAME</th>
                                <th className="py-3 px-4 text-left">EMAIL</th>
                                <th className="py-3 px-4 text-center">ROLE</th>
                                <th className="py-3 px-4 text-center rounded-tr-lg">ACTION</th>
                            </tr>
                        </thead>
                        
                        {/* Table Body */}
                        <tbody>
                            {users.map((user, index) => (
                                <React.Fragment key={user._id}>
                                    <tr>
                                        <td className="py-4 px-2 text-center">{index + 1}</td>
                                        <td className="py-4 px-4">{user.name}</td>
                                        <td className="py-4 px-4">{user.email}</td>
                                        <td className="py-4 px-4 text-center">
                                            {user.role === 'admin' ? (
                                                <span className="text-green-600 font-semibold">Admin</span>
                                            ) : (
                                                <button 
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="bg-[#D1A054] text-white p-2 rounded"
                                                >
                                                    <FaUserShield />
                                                </button>
                                            )}
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <button 
                                                onClick={() => handleDeleteUser(user._id)}
                                                className="bg-red-600 text-white p-2 rounded"
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                    {index < users.length - 1 && (
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

export default AllUser;