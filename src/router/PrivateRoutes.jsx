import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';
import Loader from '../Pages/Loader';

const PrivateRoutes = ({children}) => {
    const {user,loading,roleloading,userStatus} = use(AuthContext)


     if(loading || roleloading){
        return <Loader></Loader>
     }

     if(!user || !userStatus=='active'){
        return <Navigate to='/login'></Navigate>
     }
    return children
};

export default PrivateRoutes;