import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../../App.css'
import { format } from 'date-fns';
import { AuthContext } from './../../../Contexts/AuthContextProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_ImgbbHostKey;

    // Handle Add Product

    const handleAddProduct = (data) => {
        setLoading(true);

        // Taking All Of the Data

        const dateOfPost = format(date, "PP")
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const type = data?.category?.split(' ')[1];
        const categoryId = parseInt(data.category.split(' ')[0]);
        const name = data?.name;
        const location = data?.location;
        const resalePrice = parseInt(data?.resalePrice);
        const originalPrice = parseInt(data?.originalPrice);
        const yearsOfUse = parseInt(data?.yearsofuse);
        const discription = data?.discription;
        const timeWhenItPosted = dateOfPost;
        const sellersName = user?.displayName;
        const isUserVerified = false;
        const conditionType = data?.condition;
        const yearOfPurchase = parseInt(data?.yearofbuy);
        const mobile = parseInt(data?.mobile);
        const email = user?.email;

        // Fetching

        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: 'POST',
            body: formData
        }).then(res => {
            setLoading(true);
            return res.json();
        })
            .then(result => {
                console.log(result)
                if (result?.success || result?.status === 200) {
                    const img = result?.data.url;

                    const product = {
                        categoryId,
                        img,
                        name,
                        location,
                        resalePrice,
                        originalPrice,
                        yearsOfUse,
                        timeWhenItPosted,
                        sellersName,
                        type,
                        isUserVerified,
                        conditionType,
                        discription,
                        yearOfPurchase,
                        mobile,
                        email
                    }

                    fetch(`http://localhost:5000/addProduct`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            jwtauthorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => {
                            res.json();
                            setLoading(true);
                        })
                        .then(data => {
                            console.log(data)
                            toast.success('Product is added');
                            reset();
                            setLoading(false);
                            navigate('/dashboard/myProducts')
                        })
                }
            })
            .catch(err => {
                setLoading(false);
                toast.success('Please try later. May image bb Web server is down');
            })
    }

    return (
        <div className=''>
            {loading && <div className="w-full h-full fixed bg-black bg-opacity-50"><span className='loading loading-spinner relative top-1/4 w-20 text-error'></span></div>}
            <div className='transparent-form'>
                <h1 className='text-3xl text-white font-semibold mb-3'>Add A Product</h1>
                <form onSubmit={handleSubmit(handleAddProduct)} className='md:max-w-lg mx-auto my-0 p-5 '>
                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Product Name</span></div>
                        <input className="input input-bordered w-full text-white" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }} name='name' type="text" {...register("name")} required />
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Resale Price</span></div>
                        <div className="flex justify-center items-center"><span className='text-white font-bold px-2 py-[7px]' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>$</span><input className="input input-bordered w-full text-white" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }} name='resalePrice' {...register("resalePrice")} type="number" required /></div>
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Original Price</span></div>
                        <div className="flex justify-center items-center"><span className='text-white font-bold px-2 py-[7px]' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>$</span><input className="input input-bordered w-full text-white" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }} name='originalPrice' {...register("originalPrice")} type="number" required /></div>
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Condition Type</span></div>
                        <select className='select select-bordered  text-white' style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }} name='condition' {...register("condition")}>
                            <option value="Excellent" selected>Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Mobile Number</span></div>
                        <input className="input input-bordered w-full text-white" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }} name='mobile' type="tel" {...register("mobile")} required />
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Location</span></div>
                        <input className="input input-bordered w-full text-white" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }} name='location' {...register("location")} type="text" required />
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Product Category</span></div>
                        <select className='select select-bordered  text-white' style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }} name='category' {...register("category")}>
                            <option value="1 Supercar" selected>Supercar</option>
                            <option value="2 SUVcar">SUV car</option>
                            <option value="3 Sedancar">Sedan car</option>
                        </select>
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Discription</span></div>
                        <input className="input input-bordered w-full text-white" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }} name='discription' {...register("discription")} type="text" required />
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Years of use</span></div>
                        <input className="input input-bordered w-full text-white" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }} name='yearsofuse' type="number" {...register("yearsofuse")} required />
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Year of purchase</span></div>
                        <input className="input input-bordered w-full text-white" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }} name='yearofbuy' {...register("yearofbuy")} type="number" required />
                    </label>
                    <div className="form-control md:max-w-md w-full my-3 mx-auto p-2 border-2 border-gray-300 border-dashed">
                        <input
                            className="file-input file-input-bordered w-full bg-pink-400" type="file" accept='image/*' {...register("image", { required: "Photo is required" })}
                        />
                    </div>
                    <button type="submit" className='btn btn-primary w-full md:max-w-md my-5'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;