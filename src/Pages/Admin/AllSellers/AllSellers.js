import React, { useState } from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import AdminLoading from '../AdminLoading';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../../Shared/ConfirmationModal';
import { toast } from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';

const AllSellers = () => {
    const [deleteModalData, setDeleteModalData] = useState(null);
    const [verifyData, setVerifyData] = useState(null);
    const { data: allSellers = [], error, isPending, refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch('https://products-resale-assignment-server.vercel.app/allSellers', {
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
                    toast.success(`Seller ${modalData.name} Deleted Successfully`);
                    refetch();
                }
            })
    }

    // Handle Verify

    const handleVerify = (modalData) => {
        fetch(`https://products-resale-assignment-server.vercel.app/verifyUser/${modalData?._id}`, {
            method: 'PUT',
            headers: {
                jwtauthorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success(`Seller ${modalData.name} Verified Successfully`);
                    refetch();
                }
            })
    }

    if (isPending) {
        <AdminLoading></AdminLoading>
    }

    console.log(allSellers)

    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold'>All Sellers</h1>
                <div className='text-end mr-5'>
                    <span className='text-xl font-semibold'><code>Desending by Email A-Z</code></span>
                </div>
                <div className="divider divider-neutral"></div>
            </div>
            <div >
                <div className='overflow-x-visible'>
                    <table className='table table-zebra'>
                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-lg'>Name</th>
                                <th className='text-lg'>Email</th>
                                <th className='text-lg'>Address</th>
                                <th className='text-lg'>phone</th>
                                <th className='text-lg'>Delete</th>
                                <th className='text-lg'>Verify</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allSellers?.map((seller, i) => <>
                                    <tr>
                                        <th className='font-bold text-xl'>{i + 1}</th>
                                        <td className='text-lg font-semibold'><div className='flex items-center'>{seller?.isUserVerified && <FaCheck className='text-white text-xl bg-blue-500 mask mask-decagon p-1 mx-0.5'></FaCheck>} {seller.name}</div></td>
                                        <td className='text-base font-medium flex items-center'><MdEmail className='mx-2'></MdEmail> {seller.email}</td>
                                        <td className='text-base font-medium'><address>{seller.address}</address></td>
                                        <td className='text-sm font-medium flex items-center'><MdPhone className='mx-2'></MdPhone> {seller.phone}</td>
                                        <td className=''><label htmlFor='confirm-modal' onClick={() => setDeleteModalData(seller)} className='btn btn-secondary'>Delete</label></td>
                                        <td className=''>{seller?.isUserVerified ? 'Verified' : <label htmlFor='confirm-modal' onClick={() => setVerifyData(seller)} className='btn btn-secondary btn-outline'>Verify</label>}</td>
                                    </tr>
                                </>)
                            }
                        </tbody>
                    </table >
                </div>
            </div>

            {/* Confirmation Modal */}

            {deleteModalData && <ConfirmationModal title={'Are you Sure? You want to delete'}
                message='It will permenently deleted and cant be undone'
                successAction={handleDelete}
                successBtnName='Delete'
                modalData={deleteModalData}
            ></ConfirmationModal>}

            {/* Confirmation Modal */}

            {verifyData && <ConfirmationModal title={'Please Sure that You want to Verify this user'}
                message='He will be verified and can be trusted'
                successAction={handleVerify}
                successBtnName='Verify'
                modalData={verifyData}
            ></ConfirmationModal>}
        </div >
    );
};

export default AllSellers;