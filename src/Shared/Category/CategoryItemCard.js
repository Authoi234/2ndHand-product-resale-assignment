import React from 'react';
import Tilt from 'react-parallax-tilt';
import '../../App.css';
import { FaCheck } from "react-icons/fa6";

const CategoryItemCard = ({ product, handleOrderBook }) => {
    return (
        <div>
            <div className="rounded-lg card w-full border border-b-slate-200 border-l-gray-100 inner-element relative animation-colorfull" style={{ boxShadow: '20px 20px 50px rgba(0,0,0,0.5)', backgroundColor: 'rgba(0,0,0,0.25)' }}>
                <Tilt scale={1.05} glareEnable={true} glareMaxOpacity={0.8} glareColor="white" glarePosition="all" glareBorderRadius="20px" className="background-stripes parallax-effect" perspective={700}>
                    <figure><img src={product.img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white" style={{ fontFamily: 'cursive' }}>{product.name}</h2>
                        <div className='text-start font-bold'>
                            <p className="text-lg text-white">Location: <span className="text-orange-500">{product.location}</span></p>
                            <p className="text-white text-lg mt-3">Resale Price: <span className="text-orange-600">$ {product.resalePrice}</span></p>
                            <p className="text-white text-lg mb-3">Original Price: <span className="text-orange-600">$ {product.originalPrice}</span></p>
                            <p className="text-white text-lg mt-3">Years of use: <span className="text-orange-600">{product.yearsOfUse}</span></p>
                            <p className="text-white text-lg mt-3">Year of purchase: <span className="text-orange-600">{product.yearOfPurchase}</span></p>
                            <p className="text-white text-lg">Time when it got Posted: <span className="text-orange-600">{product.timeWhenItPosted}</span></p>
                            <p className="text-white text-lg">Type: <span className="text-orange-600">{product.type}</span></p>
                            <p className="text-white text-lg">Condition Type: <span className="text-orange-600">{product.conditionType}</span></p>
                            <p className="divider"></p>
                            <p className="text-white text-lg flex">Seller's Name:{product.isUserVerified && <FaCheck className='text-2xl tooltip text-white bg-blue-500 mask mask-hexagon p-1 font-bold'></FaCheck>} <span className='text-orange-600'>{product.sellersName}</span></p>
                            <div className="divider divider-primary">Sellers Discription</div>
                            <p className="text-white text-lg">{product.discription}</p>
                        </div>
                    </div>
                </Tilt>
                <div className='mb-5 -mt-1'>
                    <button className=" btn btn-outline btn-secondary" onClick={() => handleOrderBook(product)}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryItemCard;