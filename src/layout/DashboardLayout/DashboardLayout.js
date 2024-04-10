import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { MdDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Contexts/AuthContextProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);

    const { data: savedUser = [] } = useQuery({
        queryKey: ['savedUser', user?.uid],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const navMenu = <>
        {savedUser?.userRole === 'Buyer' && <>
            <li className='text-xl'><Link to={'/dashboard'}>My Orders</Link></li>
        </>}
        {savedUser?.userRole === 'Seller' && <>
            <li className='text-xl'><Link to={'/dashboard/addProduct'}>Add A Product</Link></li>
            <li className='text-xl'><Link to={'/dashboard/myProducts'}>My Products</Link></li>
            <li className='text-xl'><Link to={'/dashboard/myBuyers'}>My Buyers</Link></li>
        </>}
        {savedUser?.userRole === 'Admin' && <>
            <li className='text-xl'><Link to={'/dashboard/allBuyers'}>All Buyers</Link></li>
            <li className='text-xl'><Link to={'/dashboard/allSellers'}>All Sellers</Link></li>
        </>}
    </>

    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navMenu}
                            </ul>
                        </div>
                        <h1 className="btn btn-ghost text-2xl"><MdDashboard></MdDashboard></h1>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navMenu}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to={'/'} ><FaHome className='text-2xl mr-2'></FaHome></Link>
                    </div>
                </div>
                <div className="divider divider-accent"></div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;