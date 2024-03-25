import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='md:absolute w-full lg:top-40 right-0 flex flex-col justify-center items-center'>
                <h3 className='md:text-white text-5xl font-bold'>2nd Hand Cars Resale</h3>
                <p className='md:text-white mt-3 text-xl w-1/2'>We Provide Trusted Service. We Sale you second hand products And they are in very good condition. You can trust Us, Trust Out policy.</p>
                <p className="mt-3 text-lg w-full md:w-1/2 mb-3 md:text-white">We sale 3 types of cars</p>
                <div className="flex items-center h-2">
                    <p className="md:text-white text-lg mx-2">Super Cars</p> 
                    <div className="divider divider-horizontal divider-success divider-start"></div>
                    <p className="md:text-white text-lg mx-2">Trucks</p>
                    <div className="divider divider-horizontal divider-success divider-star"></div>
                    <p className="md:text-white text-lg mx-2">Suv Cars</p>
                </div>
            </div>
            <video className='mb-10 w-full hero-overlay h-full' autoPlay loop muted>
                <source src={require('../../assets/videos/Introducing_ Upgraded Model 3.mp4')} type='video/mp4' />
            </video>
            <div className="divider divdier-neutral"></div>
        </div>
    );
};

export default Banner;