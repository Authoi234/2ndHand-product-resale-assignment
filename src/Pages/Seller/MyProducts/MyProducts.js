import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [modalData, setModalData] = useState();

    const { data: products = [], isPending, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts/${user?.email}`);
            const data = res.json();
            return data;
        }
    })


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'Delete'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Product Deleted');
            })
    }

    const handleAdvertise = (id) => {
        if (window.confirm('Are you sure? you want to Advertise🎉?') === true) {
            fetch(`http://localhost:5000/setAdvertised/${id}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    refetch();
                    toast.success('Product is set on Advertise');
                })
        }
        else {
            return;
        }
    }

    if (isPending) {
        return <span className='loading loading-spinner loading-lg flex justify-center items-center'></span>
    }

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
                        {products?.map((product, i) => <tr>
                            <th>{i + 1}</th>
                            <td><img className='avatar w-20 rounded-full' src={product?.img} alt="" /></td>
                            <td className='font-bold'>{product?.name}</td>
                            <td>${product?.resalePrice}</td>
                            <td>{product?.status}</td>
                            <td><label htmlFor='confirm-modal' onClick={() => setModalData(product)} className='btn btn-error btn-outline'>Delete</label></td>
                            {product?.status === 'sold' ? <td> This product is sold </td> : <td>{product.isAdvertised ? 'This is on advertised' : <button onClick={() => handleAdvertise(product._id)} className='btn btn-accent rounded-none btn-outline'>Advertise</button>}</td>}
                        </tr>)}
                    </tbody>
                </table>
            </div>

           
            {modalData && <div>
                <input type="checkbox" id="confirm-modal" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you Sure? You want to delete</h3>
                        <p className="py-4">It will permenently deleted and cant be undone</p>
                        <div className="modal-action">
                            <label htmlFor="confirm-modal" className="btn">Close</label>
                            <label htmlFor="confirm-modal" onClick={() => handleDelete(modalData._id)} className="btn btn-error">Delete</label>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    );
};

export default MyProducts;