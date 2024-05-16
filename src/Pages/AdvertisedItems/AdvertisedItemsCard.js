import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';

const AdvertisedItemsCard = ({ product }) => {
    console.log(product)
    return (
        <div className="text-center px-3 py-3 mb-2 rounded-lg card border border-b-cyan-300 border-l-cyan-100 inner-element backdrop-blur-sm w-11/12 " style={{ boxShadow: 'inset 5px 5px 20px 4px cyan', backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <Tilt scale={1.05} glareEnable={true} glareMaxOpacity={0.9} glareColor="white" glarePosition="all" glareBorderRadius="20px" className="background-stripes parallax-effect " perspective={700}>
                <div className="p-1 bg-transparent">
                    <h1 className="text-2xl bg-white font-extrabold font-sans">
                        {product.name}
                    </h1>

                    <img src={product.img} className='w-full' alt="" />
                </div>
            </Tilt>
            <Link to={`/categoryItem/${product._id}`} className='w-full'><button className='w-full font-semibold text-blue-600 py-1 underline active:scale-90 transition-all underline-offset-2 decoration-2 decoration-black bg-white'>Shop Now</button></Link>
        </div>
    );
};

export default AdvertisedItemsCard;