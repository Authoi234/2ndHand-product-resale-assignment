import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContextProvider';
import { useQuery } from '@tanstack/react-query';

const AdminRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    const { data: savedUser = [] } = useQuery({
        queryKey: ['savedUser', user?.uid],
        queryFn: async () => {
            const res = await fetch(`https://products-resale-assignment-server.vercel.app/users/${user?.email}`, {
                headers: {
                    jwtauthorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    if (savedUser?.userRole === 'Admin') {
        return children;
    };

    return;
};

export default AdminRoute;