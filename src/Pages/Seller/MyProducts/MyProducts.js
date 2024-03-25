import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [modalData, setModalData] = useState(null);

    const { data: products = [], isPending, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts/${user.email}`);
            const data = res.json();
            return data;
        }
    })

    const handleDelete = (product) => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'Delete',
            headers: {

            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged) {
                toast.success(`Successfully Deleted ${product.name}`);
                document.getElementById('delete-confirm-modal').close();
            }
        })
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
                        {products.map((product, i) => <tr className='hover'>
                            <th>{i + 1}</th>
                            <td><img className='avatar w-20 rounded-full' src={product.img} alt="" /></td>
                            <td className='font-bold'>{product.name}</td>
                            <td>${product.resalePrice}</td>
                            <td>{product.status}</td>
                            <td><button onClick={() => {document.getElementById('delete-confirm-modal').showModal(); setModalData(product)}} className='btn bg-red-500 border-2 hover:border-red-500 rounded-none text-white hover:bg-white hover:text-red-500'> Delete </button></td>
                            <td><button className='btn bg-cyan-400 border-2 hover:border-cyan-400 hover:scale-105 rounded-none text-white hover:bg-white hover:text-cyan-400'> Advertise </button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <dialog id="delete-confirm-modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure ? you want to Delete</h3>
                    <p className="py-4">It will be deleted permanently, and cant be undone.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-neutral" onClick={() => setModalData(null)}>Close</button>
                        </form>
                        <button className='btn btn-primary' onClick={() => handleDelete(modalData)}>Delete</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyProducts;