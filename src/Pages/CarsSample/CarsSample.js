import React from 'react';
import video from '../../assets/videos/lamborghini.mp4';

const CarsSample = () => {
    return (
        <div className='py-10 mx-10'>
            <div className="lg:flex lg:justify-center lg:items-center text-start">
                <div className="mt-3 mx-4 w-full lg:w-[50%]">
                    <h1 className="text-4xl font-bold">You can trust us</h1>
                    <h1 className="text-2xl my-3 font-semibold">This is a very trusted international website. Many companies and thousands of people trust us.</h1>
                    <div className="my-2">
                        <h2 className='text-2xl'>We have many Facilities</h2>
                        <ul className='list-disc'>
                            <li><h4 className="text-xl my-1">All Cars Are Fully Good Condition And Free Painted 🎨</h4></li>
                            <li><h4 className="text-xl my-1">All Cars Are in full speed. 🏎</h4></li>
                            <li><h4 className="text-xl my-1">Any Car not have a single scratch</h4></li>
                        </ul>
                    </div>
                    <h4 className="text-2xl my-2 font-medium">We have cars of many companies. Eg. <span className='font-bold'>Tesla, Lamborghini, McLaren, Ferrari, Bugatti, Audi, Toyota Fortuner, Toyota, Mahindra Scorpio, Mahindra Thar, Land Rover, Land Cruiser, Taka Nano, Tata Punch, Supra, Porsche, Nissan, BMW and more. </span></h4>
                </div>
                <video className='lg:w-1/2 w-full hero-overlay' height={1000} autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>
            </div>
        </div>
    );
};

export default CarsSample;