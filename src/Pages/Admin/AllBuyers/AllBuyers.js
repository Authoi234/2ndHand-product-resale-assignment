import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AdminLoading from '../AdminLoading';
import { MdEmail, MdNumbers } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import '../../../App.css';

const AllBuyers = () => {
    const { data: allBuyers = [], error, isPending, refetch } = useQuery({
        queryKey: 'allBuyers',
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allBuyers');
            const data = res.json();
            return data;
        }
    })

    if (isPending) {
        <AdminLoading></AdminLoading>
    }

    console.log(allBuyers)

    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold'>All Buyers</h1>
                <div className='text-end mr-5'>
                    <span className='text-xl font-semibold'><code>Desending by Email A-Z</code></span>
                </div>
                <div className="divider divider-neutral"></div>
            </div>
            <div >
                {
                    allBuyers.map((buyer, i) => <>
                        <div>
                            <div className='stats stats-vertical lg:stats-horizontal shadow w-full py-5'>
                                <div className="stat">
                                    <div className="stat-figure text-primary ">
                                        <MdNumbers className='w-8 h-8 text-secondary'></MdNumbers>
                                    </div>
                                    <div className="stat-title">Index</div>
                                    <div className="stat-value text-primary text-xl">{i + 1} No.</div>
                                    <div className="stat-desc">this is the index of the buyer</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-figure text-primary ">
                                        <FaUser className='w-8 h-8 text-secondary'></FaUser>
                                    </div>
                                    <div className="stat-title">Name</div>
                                    <div className="stat-value text-primary text-lg">{buyer.name}</div>
                                    <div className="stat-desc">this is the name of the buyer</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-figure text-primary ">
                                        <MdEmail className='w-8 h-8 text-secondary'></MdEmail>
                                    </div>
                                    <div className="stat-title">Email</div>
                                    <div className="stat-value text-primary text-lg">{buyer.email}</div>
                                    <div className="stat-desc">this is the email of the buyer</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-figure text-primary ">
                                        <FaLocationDot className='w-8 h-8 text-secondary'></FaLocationDot>
                                    </div>
                                    <div className="stat-title">Address</div>
                                    <div className="stat-value text-primary text-lg">{buyer.address}</div>
                                    <div className="stat-desc">this is the address of the buyer</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-figure text-primary ">
                                        <FaPhone className='w-8 h-8 text-secondary'></FaPhone>
                                    </div>
                                    <div className="stat-title">Phone</div>
                                    <div className="stat-value text-primary text-lg">{buyer.phone}</div>
                                    <div className="stat-desc">this is the phone of the buyer</div>
                                </div>
                            </div>
                            <div className="divider divider-primary"></div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default AllBuyers;