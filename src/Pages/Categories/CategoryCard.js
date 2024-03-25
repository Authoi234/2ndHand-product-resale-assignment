import React from 'react';
import Tilt from 'react-parallax-tilt';
import '../../App.css';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <div>
            <Tilt className="background-stripes parallax-effect bg-transparent backdrop-blur-md" perspective={510}>
                <div className="rounded-lg card md:w-96 w-full border border-b-slate-200 border-l-gray-100 inner-element relative " style={{ boxShadow: '20px 20px 50px rgba(0,0,0,0.5)' }}>
                    <figure><img src={category?.img} alt="" /></figure>
                    <div className="card-body" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
                        <h2 className="card-title font-mono text-white">{category?.categoryName}</h2>
                        <p className='text-white text-sm'>{category?.discription}</p>
                        <div className="card-actions justify-end text-white">
                            <button className="btn btn-primary"><Link to={`/category/${category?.categoryId}`}>See Cars</Link></button>
                        </div>
                    </div>
                </div>
            </Tilt>
        </div>
    );
};

export default CategoryCard;