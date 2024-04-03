import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt';

const AdvertisedItemsCard = ({product, handleOrderBook}) => {
    return (
        <div className="text-center mb-2 rounded-lg card border border-b-cyan-300 border-l-cyan-100 inner-element relative my-0 mx-auto backdrop-blur-sm" style={{ boxShadow: 'inset 20px 20px 80px 10px cyan', backgroundColor: 'rgba(0,0,0,0.3)', width: '95%', }}>
            <Tilt scale={1.05} glareEnable={true} glareMaxOpacity={0.9} glareColor="white" glarePosition="all" glareBorderRadius="20px" className="background-stripes parallax-effect " perspective={700}>
                <figure className='-mt-8 pl-1'><img src={product.img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white" style={{ fontFamily: 'cursive' }}>{product.name}</h2>
                    <div className='text-start font-bold'>
                        <p className="text-lg text-white">Location: <span className="text-orange-500">{product.location}</span></p>
                        <p className="text-white text-lg mt-0.5">Resale Price: <span className="text-orange-600">$ {product.resalePrice}</span></p>
                        <p className="text-white text-lg mb-0.5">Original Price: <span className="text-orange-600">$ {product.originalPrice}</span></p>
                        <p className="text-white text-lg mt-0.5">Years of use: <span className="text-orange-600">{product.yearsOfUse}</span></p>
                        <p className="text-white text-lg mt-0.5">Year of purchase: <span className="text-orange-600">{product.yearOfPurchase}</span></p>
                        <p className="text-white text-lg">Time when it got Posted: <span className="text-orange-600">{product.timeWhenItPosted}</span></p>
                        <p className="text-white text-lg">Type: <span className="text-orange-600">{product.type}</span></p>
                        <p className="text-white text-lg">Condition Type: <span className="text-orange-600">{product.conditionType}</span></p>
                        <p className="text-white text-lg flex">Seller's Name:{product.isUserVerified && <FaCheck className='text-2xl tooltip text-white bg-blue-500 mask mask-hexagon p-1 font-bold'></FaCheck>} <span className='text-orange-600'>{product.sellersName}</span></p>
                        <div className="divider divider-primary text-white">Sellers Discription</div>
                        <p className="text-white text-lg">{product.discription}</p>
                    </div>
                </div>
            </Tilt>
            <div className='mb-2 -mt-5'>
                <p className="text-lg font-semibold my-2 text-white">Sale Status: {product.status}</p>
                <button className=" btn btn-outline btn-secondary shadow-xl shadow-indigo-500/50" onClick={() => handleOrderBook(product)} disabled={product.status === 'sold' && true}>Book Now</button>
            </div>
        </div>
    );
};

export default AdvertisedItemsCard;