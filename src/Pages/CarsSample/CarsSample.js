import React from 'react';
import video from '../../assets/videos/lamborghini.mp4';

const CarsSample = () => {
    return (
        <div className='py-10 mx-10'>
                <div className="lg:flex lg:justify-center lg:items-center text-start">
                    <div className="mt-3 mx-4 w-full lg:w-[50%]">
                        <h1 className="text-4xl font-semibold">You can trust us</h1>
                        <h4 className="text-2xl my-2">All Cars Are Fully Good Condition And Free Painted 🎨</h4>
                        <h4 className="text-2xl my-2">All Cars Are in full speed. 🏎</h4>
                        <h4 className="text-2xl my-2">Any Car not have a single scratch</h4>
                        <h4 className="text-2xl my-2">We have cars of many companies. Eg. Tesla, Lamborghini, Ferrari, Toyota Fortuner and more.</h4>
                    </div>
                    <video className='lg:w-1/2 w-full hero-overlay' height={1000} autoPlay loop muted>
                        <source src={video} type='video/mp4' />
                    </video>
                </div>
        </div>
    );
};

export default CarsSample;