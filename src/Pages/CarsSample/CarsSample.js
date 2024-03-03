import React from 'react';
import adsPhoto from '../../assets/images/chair.3ca333d1fa050f6e6eb4.png';

const CarsSample = () => {
    return (
        <div className='py-10 mx-10 bg-white'>
                <div className="lg:flex lg:justify-center lg:items-center text-start">
                    <div className="mt-3 mx-4 w-full lg:w-[50%]">
                        <h1 className="text-4xl font-semibold">You can trust us</h1>
                        <h4 className="text-2xl my-2">All Cars Are Fully Good Condition And Free Painted 🎨</h4>
                        <h4 className="text-2xl my-2">All Cars Are in full speed. 🏎</h4>
                        <h4 className="text-2xl my-2">Any Car not have a single scratch</h4>
                        <h4 className="text-2xl my-2">We have cars of many companies. Eg. Tesla, Lamborghini, Ferrari, Toyota Fortuner and more.</h4>
                    </div>
                    <video className='lg:w-[50%] w-full hero-overlay' height={1000} autoPlay loop muted>
                        <source src={require('../../assets/videos/lamborghini.mp4')} type='video/mp4' />
                    </video>
                </div>
                <div id='ads' className='card bg-white w-1/4 -mt-20 border'>
                    <div className="flex items-center justify-between">
                        <p className="text-red-400 p-1 text-sm">ADS</p>
                        <button className='mr-3' onClick={() => document.querySelector('#ads').className = "hidden"}>X</button>
                    </div>
                    <h2 className="text-lg p-1">Our Another Website</h2>
                    <h2 className="text-xl py-1">Doctors Portal</h2>
                    <img className='w-full' src={adsPhoto} alt="" />
                </div>
        </div>
    );
};

export default CarsSample;