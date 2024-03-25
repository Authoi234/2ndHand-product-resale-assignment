import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Contexts/AuthContextProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: products = [], isPending, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts/${user.email}`);
            const data = res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className="text-3xl font-semibold">My Products</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Sale status</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                       {products.map((product, i )=>  <tr className='hover'>
                            <th>{i + 1}</th>
                            <td><img className='avatar w-20 rounded-full' src={product.img} alt="" /></td>
                            <td className='font-bold'>{product.name}</td>
                            <td>${product.resalePrice}</td>
                            <td>{product.status}</td>
                            <td><button className='btn bg-red-500 border border-red-500 rounded-none text-white hover:bg-white hover:text-red-500'>  </button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;