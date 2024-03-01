import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryItemCard from './CategoryItemCard';

const CategoryItems = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='my-10'>
            <h1 className="text-black my-2 flex justify-center items-center text-3xl">There Are {data.length} Products Are Available</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4'>
                {
                    data.map(product => <CategoryItemCard product={product}></CategoryItemCard>)
                }
            </div>
        </div>
    );
};

export default CategoryItems;