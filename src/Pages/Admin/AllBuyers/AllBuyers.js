import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AdminLoading from '../AdminLoading';
import { MdEmail, MdPhone } from "react-icons/md";
import '../../../App.css';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal';

const AllBuyers = () => {
    const [modalData, setModalData] = useState(null);
    const { data: allBuyers = [], error, isPending, refetch } = useQuery({
        queryKey: 'allBuyers',
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allBuyers');
            const data = res.json();
            return data;
        }
    })

    const handleDelete = (modalData) => {
        console.log(modalData)
        fetch(`http://localhost:5000/user/${modalData._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Buyer ${modalData.name} Deleted Successfully`);
                    refetch();
                }
            })
    }

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
                <div className='overflow-x-auto'>
                    <table className='table table-zebra'>
                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-lg'>Name</th>
                                <th className='text-lg'>Email</th>
                                <th className='text-lg'>Address</th>
                                <th className='text-lg'>phone</th>
                                <th className='text-lg'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBuyers.map((buyer, i) => <>
                                    <tr>
                                        <th className='font-bold text-xl'>{i + 1}</th>
                                        <td className='text-lg font-semibold'>{buyer.name}</td>
                                        <td className='text-base font-medium flex items-center'><MdEmail className='mx-2'></MdEmail> {buyer.email}</td>
                                        <td className='text-base font-medium'><address>{buyer.address}</address></td>
                                        <td className='text-sm font-medium flex items-center'><MdPhone className='mx-2'></MdPhone> {buyer.phone}</td>
                                        <td className=''><label htmlFor='confirm-modal' onClick={() => setModalData(buyer)} className='btn btn-secondary'>Delete</label></td>
                                    </tr>
                                </>)
                            }
                        </tbody>
                    </table >
                </div>
            </div>
            {modalData && <ConfirmationModal title={'Are you Sure? You want to delete'}
                message='It will permenently deleted and cant be undone'
                successAction={handleDelete}
                successBtnName='Delete'
                modalData={modalData}
            ></ConfirmationModal>}
        </div>
    );
};

export default AllBuyers;