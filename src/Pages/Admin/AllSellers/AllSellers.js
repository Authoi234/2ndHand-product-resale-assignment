import React, { useState } from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import AdminLoading from '../AdminLoading';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../../Shared/ConfirmationModal';
import { toast } from 'react-hot-toast';

const AllSellers = () => {
    const [deleteModalData, setDeleteModalData] = useState(null);
    const [verifyData, setVerifyData] = useState(null);
    const { data: allSellers = [], error, isPending, refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allSellers');
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
                    toast.success(`Seller ${modalData.name} Deleted Successfully`);
                    refetch();
                }
            })
    }

    const handleVerify = (modalData) => {
        fetch(`http://localhost:5000/verifyUser/${modalData._id}`, {
            method: 'PUT'
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
                                <th className='text-lg'>Verify</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allSellers?.map((seller, i) => <>
                                    <tr>
                                        <th className='font-bold text-xl'>{i + 1}</th>
                                        <td className='text-lg font-semibold'>{seller.name}</td>
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
            {deleteModalData && <ConfirmationModal title={'Are you Sure? You want to delete'}
                message='It will permenently deleted and cant be undone'
                successAction={handleDelete}
                successBtnName='Delete'
                modalData={deleteModalData}
            ></ConfirmationModal>}

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