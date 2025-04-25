import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <img className="w-32" src="/assets/others/loader2.gif" alt="Loading..." />
            </div>
        );
    }

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
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
