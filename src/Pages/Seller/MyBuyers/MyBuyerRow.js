import React from 'react';
import { FaUser } from "react-icons/fa";

const MyBuyerRow = ({ index, myBuyer }) => {
    return (
        <tr className='w-full'>
            <th>{index + 1}</th>
            <th className='avatar'><FaUser className='btn btn-circle btn-outline p-0.5'></FaUser></th>
            <td><h1 className="font-semibold text-xl">{myBuyer.name}</h1></td>
            <td><h1 className="font-semibold text-xl">{myBuyer.email}</h1></td>
            <td className='text-lg ring-1 ring-red-500'>Your Buyer</td>
        </tr>
    );
};

export default MyBuyerRow;