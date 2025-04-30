import axios from "axios";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  axiosSecure.interceptors.response.use((res) => {
    const token = localStorage.getItem("accessToken");
    res.headers.authorization = `Bearer ${token}`;
    return res;
  },
    (err) => {
      return Promise.reject(err);
    });

  axiosSecure.interceptors.response.use((res) => {
    return res;
  },
    (err) => {
        console.log(err);
      Swal.fire({
        icon: "error",
        title: "Error Occured",
        text: err.message,
      });
      return Promise.reject(err);
    });
  return axiosSecure;
};

export default useAxiosSecure;
