import React from 'react';
import Tilt from 'react-parallax-tilt';
import '../../App.css';
import { FaCheck } from "react-icons/fa6";

const CategoryItemCard = ({ product }) => {
    return (
        <div>
            <Tilt scale={1.05} glareEnable={true} glareMaxOpacity={0.7} glareColor="white" glarePosition="all" glareBorderRadius="20px" className="background-stripes parallax-effect animation-colorfull" perspective={700}>
                <div className="rounded-lg card w-full border border-b-slate-200 border-l-gray-100 inner-element relative" style={{ boxShadow: '20px 20px 50px rgba(0,0,0,0.5)' }}>
                    <figure><img src={product.img} alt="" /></figure>
                    <div className="card-body" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
                        <h2 className="card-title text-white" style={{ fontFamily: 'cursive' }}>{product.name}</h2>
                        <div className='text-start font-bold'>
                            <p className="text-lg text-white">Location: <span className="text-orange-500">{product.location}</span></p>
                            <p className="text-white text-lg mt-3">Resale Price: <span className="text-orange-600">{product.resalePrice}</span></p>
                            <p className="text-white text-lg mb-3">Original Price: <span className="text-orange-600">{product.originalPrice}</span></p>
                            <p className="text-white text-lg mt-3">Years of use: <span className="text-orange-600">{product.yearsOfUse}</span></p>
                            <p className="text-white text-lg">Time when it got Posted: <span className="text-orange-600">{product.timeWhenItPosted}</span></p>
                            <p className="text-white text-lg">Time when it got Posted: <span className="text-orange-600">{product.timeWhenItPosted}</span></p>
                            <p className="divider"></p>
                            <p className="text-white text-lg flex">Seller's Name:{product.isUserVerified && <FaCheck className='text-3xl text-blue-500 font-bold'></FaCheck>} <span className='text-orange-600'>{product.sellersName}</span></p>
                        </div>
                        <div className='mt-3'>
                            <button className=" btn btn-outline btn-secondary active:scale-75">Book Now</button>
                        </div>
                    </div>
                </div>
            </Tilt>
        </div>
    );
};

export default CategoryItemCard;