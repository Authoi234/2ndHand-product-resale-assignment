import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import Loading from '../../../Shared/Loading/Loading';
import MyBuyerRow from './MyBuyerRow';

const MyBuyers = () => {
    const { user } = useContext(AuthContext);
    const [myBuyers, setMyBuyers] = useState([]);
    const [buyersLoading, setBuyersLoading] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myBuyers/${user.email}`)
        .then(res => {
            setBuyersLoading(true);
            return res.json();
        })
        .then(data => {
            setMyBuyers(data);
            return setBuyersLoading(false);
        })
    }, [user.email]);

    console.log(myBuyers)

    if (buyersLoading) {
        <Loading></Loading>
    }

    return (
        <div className='mx-10'>
            <h1 className='text-center text-3xl font-bold'>My Buyers</h1>
            <div className='overflow-x-auto my-2'>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th><p className="text-lg"></p></th>
                            <th><p className="text-lg"></p></th>
                            <th><p className="text-lg">Name</p></th>
                            <th><p className="text-lg">Email</p></th>
                            <th><p className="text-lg">Phone</p></th>
                            <th><p className="text-lg">Address</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBuyers?.map((myBuyer, i) => <MyBuyerRow key={i} myBuyer={myBuyer} index={i}></MyBuyerRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyers;