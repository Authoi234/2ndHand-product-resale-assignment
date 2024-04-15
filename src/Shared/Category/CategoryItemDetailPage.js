import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CategoryItemDetailPage = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='flex justify-center items-center'>
            <div className='w-5/12 mx-auto text-start'>
                <img className='w-full' src={data.img} alt="" />
                <div className="divider"><FaDollarSign className='text-green-500 w-28'></FaDollarSign></div>
                <h5 className="text-xl font-bold">Origianl Price:  {data.originalPrice}$</h5>
            </div>
            <div className='w-5/12 mx-auto text-start'>
                <h3 className="text-4xl font-mono font-bold">{data.name}</h3>
                <div className="divider"></div>
                <p className='text-lg font-semibold'>Sellers Name</p>
                <h5 className="text-2xl font-semibold">{data.sellersName}</h5>
                <p className='text-lg font-semibold'>Location</p>
                <h5 className="text-xl font-semibold">{data.location}</h5>
            </div>
        </div>
    );
};

export default CategoryItemDetailPage;