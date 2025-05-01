import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const {logout} =useAuth();
  const navigate = useNavigate();


  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
    (error) => {
      return Promise.reject(error);
    });

  axiosSecure.interceptors.response.use((response) => {
    return response;
  },
    async(err) => {
      console.log(err.response.status);
      console.log(err);
        if(err.response.status === 401 || err.response.status === 403){
            await logout()
            .then(()=>{
              Swal.fire({
                icon:'error',
                title:"Session Expired",
                text:"Please login again"
              })
            })
            navigate('/');
        }
      return Promise.reject(err);
    });
  return axiosSecure;
};

export default useAxiosSecure;
