import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
    const {user} = useAuth();
    if(user){
        return children;
    }
    return ()=>{
        <Navigate to="/login" />;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You need to be logged in!'
          })
    }
};

export default PrivateRoute;
