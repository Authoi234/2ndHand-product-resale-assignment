import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryItemCard from './CategoryItemCard';
import { AuthContext } from '../../Contexts/AuthContextProvider';

const CategoryItems = () => {
    const [orderBookingData, setOrderBookingData] = useState(null);
    const { user } = useContext(AuthContext)
    const data = useLoaderData();
    console.log(data);

    const handleOrderBook = (orderData) => {
        setOrderBookingData(orderData);
        document.getElementById('order-booking-modal').showModal();
    }

    const handleOrderSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='my-10'>
            <h1 className="text-black my-2 flex justify-center items-center text-3xl">There Are {data.length} Products Are Available</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4'>
                {
                    data.map(product => <CategoryItemCard handleOrderBook={handleOrderBook} product={product}></CategoryItemCard>)
                }
            </div>
            <dialog id="order-booking-modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <form onSubmit={handleOrderSubmit}>
                        <label className="form-control w-full">
                            <div className="label"><span className="label-text font-semibold">Buyer Name</span></div>
                            <input className="input input-bordered w-full" name='userName' value={user?.displayName} readOnly type="text" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label"><span className="label-text font-semibold">Buyer Email</span></div>
                            <input className="input input-bordered w-full" name='userEmail' value={user?.email} readOnly type="email" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label"><span className="label-text font-semibold">Product Name</span></div>
                            <input className="input input-bordered w-full" name='productName' value={orderBookingData.name} readOnly type="text" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label"><span className="label-text font-semibold">Product Price</span></div>
                            <input className="input input-bordered w-full" name='price' value={orderBookingData.resalePrice} readOnly type="number" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label"><span className="label-text font-semibold">Enter Your Phone</span></div>
                            <input className="input input-bordered w-full" name='phone' placeholder='Enter your Phone Number Here' type="number" required />
                        </label>
                        <label className="form-control w-full">
                            <div className="label"><span className="label-text font-semibold">Enter Your Meeting Location</span></div>
                            <input className="input input-bordered w-full" name='location' placeholder='Enter your meeting location here' type="text" required />
                        </label>
                        <button type="submit" className='btn btn-primary my-2'>Submit</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default CategoryItems;