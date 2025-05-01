import React from 'react';
import { Navigate } from 'react-router';
import useCheckIsAdmin from '../hooks/useCheckIsAdmin';
import AdminHome from '../pages/UserDashborad/Admin/adminHome';
import UserHome from '../pages/UserDashborad/UserHome';
import Loader from '../shared/Loader';

const IndexRouteHandler = () => {
    const [isAdmin, isAdminLoading] = useCheckIsAdmin();
    
    if (isAdminLoading) {
        return <Loader />;
    }
    
    // Render the appropriate component based on admin status
    return isAdmin ? <AdminHome /> : <UserHome />;
};

export default IndexRouteHandler;