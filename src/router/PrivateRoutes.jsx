import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loading,roleloading,userStatus} = use(AuthContext)


     if(loading || roleloading){
        return <p>Loading...</p>
     }

     if(!user || !userStatus=='active'){
        return <Navigate to='/login'></Navigate>
     }
    return children
};

export default PrivateRoutes;