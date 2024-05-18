import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoryCard from './CategoryCard';
import Loading from '../../Shared/Loading/Loading';

const Categories = () => {

    const { data: categories = [], isPending, error } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`https://products-resale-assignment-server.vercel.app/categories`);
            const data = await res.json();
            return data;
        }
    });

    if(isPending){
        return (
            <Loading></Loading>
        )
    }
    if (error) {
        return <h1 className="my-3 text-2xl text-red-500">404 Something went wrong, in data Loading. Please check your internet connection</h1>;
    }

    return (
        <div className='p-5 m-5 glasseffect mb-20'>
            <h2 className="text-4xl my-5 relative font-semibold">There Are {categories.length} Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    categories?.map(category => <CategoryCard category={category} key={category._id}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;