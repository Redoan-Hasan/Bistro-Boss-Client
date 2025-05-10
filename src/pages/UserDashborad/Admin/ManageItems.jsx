import OrderOnline from "../../../Components/OrderOnline";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useMenuAdmin from "../../../hooks/useMenuAdmin";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";

const ManageItems = () => {
  const [menuItems, refetch] = useMenuAdmin();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete functionality will be implemented later
        axiosSecure
          .delete(`/deleteMenuItem/${id}`)
          .then((result) => {
            if (result.data.deletedCount) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
          });
      }
    });
  };


  return (
    <div className="bg-[#F6F6F6] w-full h-screen overflow-y-auto">
      <OrderOnline
        textOne={"Hurry Up"}
        textTwo={"MANAGE ALL ITEMS"}
        margin={"my-0"}
      />

      <div className="max-w-4xl mx-auto bg-white p-6 my-8 rounded-lg">
        {/* Items Summary */}
        <div className="mb-6">
          <h2 className="text-left font-bold text-2xl">
            TOTAL ITEMS: {menuItems.length}
          </h2>
        </div>

        {/* Items Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="py-4 px-2 text-center bg-[#D1A054] text-white rounded-tl-lg"></th>
                <th className="py-4 px-4 text-left bg-[#D1A054] text-white ">
                  ITEM IMAGE
                </th>
                <th className="py-4 px-4 text-left bg-[#D1A054] text-white">
                  ITEM NAME
                </th>
                <th className="py-4 px-4 text-right bg-[#D1A054] text-white">
                  PRICE
                </th>
                <th className="py-4 px-4 text-center bg-[#D1A054] text-white">
                  ACTION
                </th>
                <th className="py-4 px-4 text-center bg-[#D1A054] text-white rounded-tr-lg">
                  ACTION
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {menuItems.map((item, index) => (
                <tr key={`${item._id}-${index}`} className="border-b border-gray-200">
                  <td className="py-4 px-2 text-center">{index + 1}</td>
                  <td className="py-4 px-4">
                    {/* <div className="w-16 h-16 bg-gray-200"></div> */}
                    <img className="w-16 h-16" src={item.image} alt="" />
                  </td>
                  <td className="py-4 px-4">{item.name}</td>
                  <td className="py-4 px-4 text-right">${item.price}</td>
                  
                  <td className="py-4 px-4 text-center">
                    <Link
                      to={`/UserDashboard/editMenu/${item._id}`}
                      className="bg-[#D1A054] text-white p-2 rounded inline-block"
                    >
                      <FaEdit />
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-600 text-white p-2 rounded"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
