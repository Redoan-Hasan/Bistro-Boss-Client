import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (user) {
        return children;
    }
    
    // Show alert when user is not logged in
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to be logged in!'
    });
    
    // Return Navigate component directly
    return <Navigate to="/login"  state={{ from: location }} replace />;
};

export default PrivateRoute;
