import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements, } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PaymentsCheckForm = ({ order }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [proccessing, setProccessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const { price, name, email, _id } = order;

    // Creating Payment Intent

    useEffect(() => {
        fetch('https://products-resale-assignment-server.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                jwtauthorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then((res) => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price]);

    // Handling Submit

    const handleSubmit = async (event) => {
        event.preventDefault();

        setCardError('');

        // Checking Conditions

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        });

        if (error) {
            setCardError(error.message);
            return;
        }
        else {
            setCardError('');
        }

        // Confirming Card Payment

        setSuccess('');
        setProccessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            }
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {
            console.log('card info', card)
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                orderId: _id
            }

            // Store payment

            fetch('https://products-resale-assignment-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    jwtauthorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                        navigate('/dashboard')
                        toast.success('Congrats! your payment completed');
                    }
                })

        }

    }

    return (
        <>
            {/* Form */}
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                iconColor: 'blue',
                                fontSmoothing: 'antialiased',
                                fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                                fontWeight: '500',
                                fontSize: '20px',
                                backgroundColor: '#e9f5f5',
                                lineHeight: '40px',
                                letterSpacing: '1px',
                                textAlign: 'center',
                                padding: '5px',
                                textShadow : "yellow 1px 0 10px",
                                textTransform: 'uppercase',
                                color: 'cyan',
                                '::placeholder': {
                                    color: 'cyan',
                                },
                            },
                            ':-webkit-autofill': {
                                color: '#fce883',
                            },
                            invalid: {
                                iconColor: 'red',
                                color: 'red',
                                textShadow: 'red 1px 0 10px'
                            },
                        },
                    }}
                />
                <button className='btn btn-md mt-4 bg-cyan-400 hover:btn-secondary transition-all text-lg' type="submit" disabled={!stripe || !clientSecret || proccessing}>
                    PAY
                </button>
            </form>
            <p className='font-bold text-lg text-red-500 my-6'>{cardError}</p>
            {
                success && <div className='my-5'>
                    <p className="text-green-500 text-lg font-semibold my-2">{success}</p>
                    <p className="text-green-500 text-lg font-semibold my-2">Your Transaction Id is: <span className='font-bold text-green-600 my-2'>{transactionId}</span></p>
                </div>
            }
        </>
    )
};

export default PaymentsCheckForm;