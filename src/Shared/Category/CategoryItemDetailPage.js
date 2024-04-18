import React, { useContext, useState } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { MdOutlineDateRange } from "react-icons/md";
import { useLoaderData } from 'react-router-dom';
import { BiDetail } from "react-icons/bi";
import { AuthContext } from '../../Contexts/AuthContextProvider';
import toast from 'react-hot-toast';

const CategoryItemDetailPage = () => {
    const [orderBookingData, setOrderBookingData] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(false)
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    console.log(data)

    const handleOrderBook = (orderData) => {
        setOrderBookingData(orderData);
        document.getElementById('order-booking-modal-on-detail-page').showModal();
    };

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
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingData)
        })
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    setBtnDisabled(true);
                    document.getElementById('order-booking-modal-on-detail-page').close();
                    toast.success(`${orderBookingData.name} is booked`);
                }
            })
            .catch(err => console.log(err.message));
    };

    return (
        <div className='flex justify-center items-center'>
            <div className='w-5/12 mx-auto text-start'>
                <img className='w-full' src={data.img} alt="" />
                <div className="divider"><BiDetail className='text-6xl'></BiDetail></div>
                <p className='text-lg font-semibold'>Sellers Discription</p>
                <h5 className="text-xl font-bold">{data.discription}</h5>
            </div>
            <div className='w-5/12 mx-auto text-start'>
                <p className="text-md font-mono font-medium">Posted on {data.timeWhenItPosted}</p>
                <p className="text-md font-medium">Cars Condition: {data.conditionType}</p>
                <div className="flex justify-between items-center"><h3 className="text-4xl font-mono font-bold">{data.name}</h3> <button className='btn btn-success btn-outline' onClick={() => handleOrderBook(data)} disabled={(data.status === 'sold' && true) ||  (btnDisabled === true && true)}>Book Now</button></div>
                <div className="divider"></div>
                <p className='text-lg font-semibold'>Sellers Name</p>
                <h5 className="text-2xl font-semibold">{data.sellersName}</h5>
                <p className='text-lg font-semibold'>Location</p>
                <h5 className="text-xl font-semibold">{data.location}</h5>
                <p className='text-lg font-semibold'>Location</p>
                <h5 className="text-xl font-semibold">{data.location}</h5>
                <div className="divider">
                    <MdOutlineDateRange className='text-amber-500 text-6xl'></MdOutlineDateRange>
                </div>
                <div className="flex justify-evenly items-center">
                    <div className='border p-2'>
                        <p className='text-lg font-semibold'>Year Of Purchase</p>
                        <h5 className="text-xl font-semibold text-orange-500">{data.yearOfPurchase}</h5>
                    </div>
                    <div className="divider divider-horizontal divider-warning"></div>
                    <div className='border p-2'>
                        <p className='text-lg font-semibold'>Years Of Use</p>
                        <h5 className="text-xl font-semibold text-orange-500">{data.yearsOfUse}</h5>
                    </div>
                </div>
                <div className="divider">
                    <FaDollarSign className='text-green-500 text-3xl'></FaDollarSign>
                </div>
                <div className='flex justify-between items-center'>
                    <h5 className='text-xl text-green-400 mx-3'>Resale Price: {data.resalePrice}</h5>
                    <div className="divider divider-horizontal divider-success"></div>
                    <h5 className='text-xl text-green-400 mx-3'>Original Price: {data.originalPrice}</h5>
                </div>
            </div>
            <dialog id="order-booking-modal-on-detail-page" className="modal">
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
                    <button onClick={() => document.getElementById('order-booking-modal-on-detail-page').close()} className='btn btn-accent my-2 mx-2'> Cancel</button>
                </div>
            </dialog>
        </div>
    );
};

export default CategoryItemDetailPage;