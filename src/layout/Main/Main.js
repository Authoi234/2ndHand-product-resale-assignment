import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Contexts/AuthContextProvider';

const Main = () => {
    
    const { user, logout } = useContext(AuthContext);

    const { data: savedUser = [], error, refetch } = useQuery({
        queryKey: ['savedUser', user, user?.email],
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

    return (
        <div>
            <Navbar logout={logout} user={user} savedUser={savedUser}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;