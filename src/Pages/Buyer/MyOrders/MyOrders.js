import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    axios.get(`http://localhost:5000/orders/${user?.email}`)
        .then(function (response) {
            setOrders(response.data);
        })
        .catch(function (error) {
            console.log(error.message);
        })

    return (
        <div className='overflow-x-auto'>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th><p className="text-xl">Image</p></th>
                        <th><p className="text-xl">title</p></th>
                        <th><p className="text-xl">Price</p></th>
                        <th><p className="text-xl">Payments</p></th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map((order, i) => <tr className="hover">
                        <th>{i + 1}</th>
                        <td><img className='avatar w-20 rounded-3xl' src={order?.img} alt="" /></td>
                        <td>{order.productName}</td>
                        <td>{order.price}</td>
                        <td><button className="btn btn-primary">Pay</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;