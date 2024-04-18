import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import '../../App.css';
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ConfirmationModal from '../ConfirmationModal';
import toast from 'react-hot-toast';

const CategoryItemCard = ({ product, handleOrderBook }) => {
    const [btnDisbled, setBtnDisabled] = useState(false)
    const [modalData, setModalData] = useState(null);

    const handleReport = (modalData) => {
        console.log(modalData)
        fetch(`http://localhost:5000/reportProduct/${modalData._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setBtnDisabled(true)
                    toast.success(`${modalData.name} was reported to admin Successfully`);
                }
            })
    }

    return (
        <div>
            <div className="rounded-lg card w-full border border-b-slate-200 border-l-gray-100 inner-element relative animation-colorfull" style={{ boxShadow: '20px 20px 50px rgba(0,0,0,0.5)', backgroundColor: 'rgba(0,0,0,0.25)' }}>
                <Tilt scale={1.05} glareEnable={true} glareMaxOpacity={0.8} glareColor="white" glarePosition="all" glareBorderRadius="20px" className="background-stripes parallax-effect" perspective={700}>
                    <figure><Link to={`/categoryItem/${product._id}`}><img src={product.img} alt="" /></Link></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white cursor-pointer font-mono underline underline-offset-4 font-bold decoration-blue-800" style={{ fontFamily: 'cursive' }}><Link to={`/categoryItem/${product._id}`}>{product.name}</Link></h2>
                        <div className='text-start font-bold'>
                            <p className="text-lg text-white">Location: <span className="text-orange-500">{product.location.toString().slice(0, 5)}...<Link className='underline text-black font-normal text-base' to={`/categoryItem/${product._id}`}>See More</Link></span></p>
                            <p className="text-white text-lg mt-3">Resale Price: <span className="text-orange-600">$ {product.resalePrice.toString().slice(0, 5)}...<Link className='underline text-black font-normal text-base' to={`/categoryItem/${product._id}`}>See More</Link></span></p>
                            <p className="text-white text-lg mb-3">Original Price: <span className="text-orange-600">$ {product.originalPrice.toString().slice(0, 5)}...<Link className='underline text-black font-normal text-base' to={`/categoryItem/${product._id}`}>See More</Link></span></p>
                            <p className="text-white text-lg mt-3">Years of use: <span className="text-orange-600">{product.yearsOfUse.toString().slice(0, 5)}...<Link className='underline text-black font-normal text-base' to={`/categoryItem/${product._id}`}>See More</Link></span></p>
                            <p className="text-white text-lg mt-3">Year of purchase: <span className="text-orange-600">{product.yearOfPurchase.toString().slice(0, 5)}...<Link className='underline text-black font-normal text-base' to={`/categoryItem/${product._id}`}>See More</Link></span></p>
                            <p className="text-white text-lg">Time when it got Posted: <span className="text-orange-600">{product.timeWhenItPosted.toString().slice(0, 5)}...<Link className='underline text-black font-normal text-base' to={`/categoryItem/${product._id}`}>See More</Link></span></p>
                            <p className="text-white text-lg">Type: <span className="text-orange-600">{product.type}</span></p>
                            <p className="text-white text-lg">Condition Type: <span className="text-orange-600">{product.conditionType.toString().slice(0, 5)}...<Link className='underline text-black font-normal text-base' to={`/categoryItem/${product._id}`}>See More</Link></span></p>
                            <p className="divider"></p>
                            <p className="text-white text-lg flex">Seller's Name:{product.isUserVerified && <FaCheck className='text-2xl tooltip text-white bg-blue-500 mask mask-hexagon p-1 font-bold'></FaCheck>} <span className='text-orange-600'>{product.sellersName}</span></p>
                            <div className="divider divider-primary">Sellers Discription</div>
                            <p className="text-white text-lg">{product.discription.slice(0, 38)}.....<Link className='underline text-black font-normal text-base' to={`/categoryItem/${product._id}`}>See More</Link></p>
                        </div>
                    </div>
                </Tilt>
                <div className='mb-5 -mt-1'>
                    <div className='flex justify-evenly items-center my-2'><p className="text-lg font-semibold my-2 text-white">Sale Status: <span className="uppercase text-red-500">{product.status}</span></p><label htmlFor='confirm-modal' onClick={() => setModalData(product)} className='btn btn-error text-white px-2' disabled={ (product.isReported === true && true) || btnDisbled === true}>Report To Admin</label></div> 
                    <Link to={`/categoryItem/${product._id}`} className='btn btn-secondary text-lg my-0 mx-auto'>Details Page | Purchase Page</Link>
                    <div className="divider"></div>
                    <button className=" btn btn-outline btn-secondary w-3/5 my-0 mx-auto" onClick={() => handleOrderBook(product)} disabled={product.status === 'sold' && true}>Book Now</button>
                </div>
            </div>
            {modalData && <ConfirmationModal title={'Are you Sure? You want to Report to Admin about this product'}
                message='it will be reported and cant be trusted and admin can delete it. if there are any problem in this product report'
                successAction={handleReport}
                successBtnName='Report'
                modalData={modalData}
            ></ConfirmationModal>}
        </div>
    );
};

export default CategoryItemCard;