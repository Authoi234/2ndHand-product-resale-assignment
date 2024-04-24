import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'; 
import PaymentsCheckForm from './PaymentsCheckForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h3 className="text-3xl my-6 font-semibold">Payment for {data.productName}</h3>
            <p className="text-xl font-bold">Please Pay <strong>${data.price}</strong> for your {data.productName}, You Ordered</p>
            <div className='my-5 mx-auto w-1/3'>
                <Elements stripe={stripePromise}>
                    <PaymentsCheckForm
                        order={data}
                    ></PaymentsCheckForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;