import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
    const navData = [
        <li key={1} className='list-item list-hover-animation'><Link to="/">Home</Link></li>
    ]
    return (
        <div className="navbar bg-transparent backdrop-blur-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navData}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-2xl text-black flex"><img className='w-20' src={require("../../assets/images/2eVCvQ-LogoMakr.png")} alt="" /> Authois Car Resale</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navData}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;