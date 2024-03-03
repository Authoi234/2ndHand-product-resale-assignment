import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='my-20 mx-auto'>
        <span className="loading loading-spinner loading-lg"></span>
        <hr style={{background: 'linear-gradient(transparent, red, orange, yellow, green, blue, indigo, violet)', width: '4px', height: '100px', }} className='animate-spin my-1 mx-auto' />
    </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;