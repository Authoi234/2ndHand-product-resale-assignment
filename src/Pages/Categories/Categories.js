import React from 'react';
import '../../App.css';
import Tilt from 'react-parallax-tilt';
import '../../App.css';



const Categories = () => {
    return (
        <div className='p-5 m-5 glasseffect mb-20'>
            <h2 className="text-4xl my-5">There Are three Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Tilt className="background-stripes parallax-effect" perspective={500}>
                    <div className="rounded-lg card md:w-96 w-full bg-transparent backdrop-blur-lg border border-b-slate-200 border-l-gray-100 inner-element relative " style={{ boxShadow: '20px 20px 50px rgba(0,0,0,0.5)' }}>
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" /></figure>
                        <div className="card-body" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
                            <h2 className="card-title text-white">Shoes!</h2>
                            <p className='text-white'></p>
                            <div className="card-actions justify-end text-white">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default Categories;