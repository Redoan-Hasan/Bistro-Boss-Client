import OrderOnline from "../../../Components/OrderOnline";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../../../shared/Loader";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    // const [users, setUsers] = useState([]);

    const {data : users = [], isLoading , refetch} = useQuery({
        queryKey : ['users'],
        queryFn : async() => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleMakeAdmin = (user) => {
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
                axiosSecure.patch(`/users/admin/${user._id}`)
                // eslint-disable-next-line no-unused-vars
                .then(res => {
                    refetch();
                    Swal.fire({
                        title: "Success!",
                        text: `${user.name} is now an admin`,
                        icon: "success"
                    });
                })
                .catch(err => {
                    Swal.fire({
                        icon:'error',
                        title:"Error Occured",
                        text:err.message
                    })
                })
                
            }
        });
    };

    const handleDeleteUser = (id) => {
        console.log(id);
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
                axiosPublic.delete(`/users/${id}`)
                // eslint-disable-next-line no-unused-vars
                .then(res =>{
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                    });
                })
                .catch(err => {
                    Swal.fire({
                        icon:'error',
                        title:"Error Occured",
                        text:err.message
                    })
                })
            }
        });
    };

    return (
        <div>
            {isLoading && <Loader />}
            <div>
                <OrderOnline textOne={"How many??"} textTwo={"MANAGE ALL USERS"} />
            </div>
            
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md my-8">
                {/* User Summary */}
                <div className="mb-6">
                    <h2 className="text-left font-cinzel font-bold text-xl">
                        TOTAL USERS: {users?.length}
                    </h2>
                </div>
                
                {/* Users Table */}
                <div className="overflow-x-auto font-inter">
                    {isLoading && <Loader />}
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
                            {users?.map((user, index) => (
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