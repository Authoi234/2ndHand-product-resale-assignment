import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryItemCard from './CategoryItemCard';
import { AuthContext } from '../../Contexts/AuthContextProvider';
import toast from 'react-hot-toast';

const CategoryItems = () => {
    const [orderBookingData, setOrderBookingData] = useState(null);
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    console.log(data);

    const handleOrderBook = (orderData) => {
        setOrderBookingData(orderData);
        document.getElementById('order-booking-modal').showModal();
    }

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        
        const bookingData = {
            productId: orderBookingData._id,
            email: user.email,
            productName: orderBookingData.name,
            price: orderBookingData.resalePrice,
            phone: e.target.phone.value,
            location: e.target.location.value,
            img: orderBookingData.img,
            name: user.displayName,
            sellersEmail: orderBookingData.email
        }
        console.log(bookingData);
        
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                jwtauthorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(bookingData)
        })
        .then(result => {
            console.log(result);
            if (result.status === 200) {
                document.getElementById('order-booking-modal').close();
                toast.success(`${orderBookingData.name} is booked`);
                }
            })
            .catch(err => console.log(err.message));
    }

    console.log(data)

    return (
        <div className='my-10'>
            <h1 className=" my-2 flex justify-center items-center text-3xl">There Are {data.length} Products Are Available</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4'>
                {
                    data?.map((product, i) => <CategoryItemCard handleOrderBook={handleOrderBook} product={product} key={i}></CategoryItemCard>)
                }
            </div>
            <dialog id="order-booking-modal" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleOrderSubmit}>
                        <label className="form-control w-full">
                            <div className="label"><span className="label-text font-semibold">Your Name</span></div>
                            <input className="input input-bordered w-full" name='userName' value={user?.displayName} readOnly type="text" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label"><span className="label-text font-semibold">Your Email</span></div>
                            <input className="input input-bordered w-full" name='userEmail' value={user?.email} readOnly type="email" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label"><span className="label-text font-semibold">Product Name</span></div>
                            <input className="input input-bordered w-full" name='productName' value={orderBookingData?.name} readOnly type="text" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label"><span className="label-text font-semibold">Product Price</span></div>
                            <input className="input input-bordered w-full" name='price' value={orderBookingData?.resalePrice} readOnly type="number" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label"><span className="label-text font-semibold">Enter Your Phone</span></div>
                            <input className="input input-bordered w-full" name='phone' placeholder='Enter your Phone Number Here' type="number" required />
                        </label>
                        <label className="form-control w-full">
                            <div className="label"><span className="label-text font-semibold">Enter Your Meeting Location</span></div>
                            <input className="input input-bordered w-full" name='location' placeholder='Enter your meeting location here' type="text" required />
                        </label>
                        <button type="submit" className='btn btn-primary my-2 mx-2'>Submit</button>
                    </form>
                    <button onClick={() => document.getElementById('order-booking-modal').close()} className='btn btn-accent my-2 mx-2'> Cancel</button>
                </div>
            </dialog>
        </div>
    );
};

export default CategoryItems;