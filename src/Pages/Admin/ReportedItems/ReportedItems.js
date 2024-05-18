import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import { FaCheck } from 'react-icons/fa';
import ConfirmationModal from '../../../Shared/ConfirmationModal';
import toast from 'react-hot-toast';

const ReportedItems = () => {
    const [modalData, setModalData] = useState(null);
    const { data: reportedItems = [], refetch, isPending } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: async () => {
            const res = await fetch('https://products-resale-assignment-server.vercel.app/reportedProducts', {
                headers: {
                    jwtauthorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    // Handle Delete

    const handleDelete = (modalData) => {
        console.log(modalData)
        fetch(`https://products-resale-assignment-server.vercel.app/reportedProducts/${modalData?._id}`, {
            method: 'DELETE',
            headers: {
                jwtauthorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Product ${modalData.name} Deleted Successfully`);
                    refetch();
                }
            })
    }

    if (isPending) {
        <Loading></Loading>
    }

    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold'>Reported Items</h1>
                <div className="divider divider-neutral"></div>
            </div>
            <div >
                {reportedItems?.map((item, index) => <>
                    <div className="card lg:card-side bg-base-100 shadow-xl text-start border md:my-5 md:mx-5">
                        <div className='flex'>
                            <div className='md:w-96 w-full md:h-80 border-2 mx-3'><img className='w-full h-full' src={item.img} alt="" /></div>
                            <div className='my-3 hidden md:inline'>
                                <div className='py-3'>
                                    <hr />
                                    <h4 className="text-sm">Sellers Discription</h4>
                                    <h1 className='text-md'>{item.discription}</h1>
                                </div>
                                <div className='py-3'>
                                    <hr />
                                    <h4 className="text-sm">Sellers Name</h4>
                                    <h1 className='text-md flex items-center'>-{item?.isUserVerified && <FaCheck className='mask mask-hexagon-2 p-1 text-lg bg-green-500 text-white'></FaCheck>} {item.sellersName}</h1>
                                    <hr />
                                </div>
                                <div className="py-3 text-md font-medium">
                                    <p>Type: {item.type}</p>
                                    <p>condition: {item.conditionType}</p>
                                    <p>Sellers Mobile: {item.mobile}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">{index + 1} <div className="divider my-0"></div></h2>
                            <h2 className="text-4xl font-bold">{item.name}</h2>
                            <div className=' md:flex'>
                                <div className='md:mx-2 font-medium text-lg'>
                                    <p>year Of Purchase: {item.yearOfPurchase}</p>
                                    <p>Resale Price: {item.resalePrice}$</p>
                                    <p>Original Price: {item.originalPrice}$</p>
                                    <p>Years Of Use: {item.yearsOfUse}</p>
                                    <p>status: {item.status}</p>
                                </div>
                                <div className='my-3 md:hidden'>
                                    <div className='py-3'>
                                        <hr />
                                        <h4 className="text-sm">Sellers Discription</h4>
                                        <h1 className='text-md'>{item.discription}</h1>
                                    </div>
                                    <div className='py-3'>
                                        <hr />
                                        <h4 className="text-sm">Sellers Name</h4>
                                        <h1 className='text-md flex items-center'>-{item?.isUserVerified && <FaCheck className='mask mask-hexagon-2 p-1 text-lg bg-green-500 text-white'></FaCheck>} {item.sellersName}</h1>
                                        <hr />
                                    </div>
                                    <div className="py-3 text-md font-medium">
                                        <p>Type: {item.type}</p>
                                        <p>condition: {item.conditionType}</p>
                                        <p>Sellers Mobile: {item.mobile}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className='mx-16 btn bg-red-500 text-white hover:text-red-500 hover:bg-white hover:border transition-all hover:border-red-500' htmlFor='confirm-modal' onClick={() => setModalData(item)}>Delete</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                )}
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

export default ReportedItems;