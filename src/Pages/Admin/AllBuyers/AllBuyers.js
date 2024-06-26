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
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch('https://products-resale-assignment-server.vercel.app/allBuyers', {
                headers: {
                    jwtauthorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    // Handle Delete

    const handleDelete = (modalData) => {
        console.log(modalData)
        fetch(`https://products-resale-assignment-server.vercel.app/user/${modalData?._id}`, {
            method: 'DELETE',
            headers: {
                jwtauthorization: `bearer ${localStorage.getItem('accessToken')}`
            }
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
                                allBuyers?.map((buyer, i) => <>
                                    <tr>
                                        <th className='font-bold text-xl'>{i + 1}</th>
                                        <td className='text-lg font-semibold'>{buyer?.name}</td>
                                        <td className='text-base font-medium flex items-center'><MdEmail></MdEmail>{buyer.email}</td>
                                        <td className='text-base font-medium'><address>{buyer.address}</address></td>
                                        <td className='text-sm font-medium flex items-center'><MdPhone className='mx-2'></MdPhone> {buyer?.phone ? buyer?.phone : 'logged by social mendia'}</td>
                                        <td className=''><label htmlFor='confirm-modal' onClick={() => setModalData(buyer)} className='btn btn-secondary'>Delete</label></td>
                                    </tr>
                                </>)
                            }
                        </tbody>
                    </table >
                </div>
            </div>

            {/* Confirmation Modal */}

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