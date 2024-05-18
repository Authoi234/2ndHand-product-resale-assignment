import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContextProvider';
import toast from 'react-hot-toast';
import Loading from './../../Shared/Loading/Loading';
import AdvertisedItemsCard from './AdvertisedItemsCard';
import '../../App.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const AdvertisedItems = () => {
    const [orderBookingData, setOrderBookingData] = useState(null);
    const { user } = useContext(AuthContext)

    const { data: products, isPending, refetch, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://products-resale-assignment-server.vercel.app/advertisedItems');
            const data = await res.json();
            return data;

        }
    })
    console.log(products)

    // Handling Book Order

    const handleOrderBook = (orderData) => {
        setOrderBookingData(orderData);
        document.getElementById('order-booking-modal').showModal();
    }

    // Handling Submit Order

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

        fetch('https://products-resale-assignment-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                jwtauthorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(bookingData)
        })
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    refetch();
                    document.getElementById('order-booking-modal').close();
                    toast.success(`${orderBookingData.name} is booked`);
                }
            })
            .catch(err => console.log(err.message));
    }

    if (products?.length === 0) {
        return;
    }


    if (isPending) {
        return <div className='my-20'>
            <Loading></Loading>
            <div className="divider"></div>
        </div>
    }

    if (error) {
        return <div className="my-20">
            <h1 className="text-2xl text-red-600">Something went wrong in loading Advertised Items. Please check your internet connection</h1>
        </div>
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1401 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1400, min: 1071 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1070, min: 670 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 650, min: 0 },
            items: 1
        }
    };

    if (products.length >= 1) {
        return (
            <div className='px-7 py-10' style={{ backgroundImage: 'url(https://i.ibb.co/nD9XVBy/622956.webp)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <h1 className="text-4xl text-cyan-300 font-bold font-sans" style={{
                    textShadow: `2px 2px 2px #080808, 2px 2px 2px #080808, 2px 2px 2px #080808, 2px 2px 2px #080808, 2px 2px 2px #080808, 2px 2px 2px #080808, 2px 2px 2px #080808`
                }} >Advertised Products</h1>
                <div className='my-10 mx-auto w-full h-full'>

                    {/* React Multi Carousel */}

                    <Carousel responsive={responsive} containerClass='lg:flex lg:justify-center items-center px-3 py-3' slidesToSlide={1} swipeable showDots={true} infinite autoPlay>
                        {
                            products?.map(product => <AdvertisedItemsCard product={product} handleOrderBook={handleOrderBook} ></AdvertisedItemsCard>)
                        }
                    </Carousel>

                </div>

                {/* Order Booking Modal */}

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
                                <input className="input input-bordered w-full" name='phone' placeholder='Enter your Phone Number Here' type="tel" required />
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
    }
};

export default AdvertisedItems;