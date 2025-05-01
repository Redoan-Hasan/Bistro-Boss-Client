import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import useCheckIsAdmin from '../hooks/useCheckIsAdmin';
import Loader from '../shared/Loader';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isAdmin , isAdminLoading] = useCheckIsAdmin();

    if(loading || isAdminLoading){
        return <Loader />;
    }

    if (user && isAdmin) {
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

export default AdminRoute;