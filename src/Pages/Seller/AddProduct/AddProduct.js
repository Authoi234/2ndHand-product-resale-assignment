import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../../App.css'

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [date, setDate] = useState(new Date());

    const handleAddProduct = (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        console.log(formData)

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgbbHostKey}`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
        .then(data => {
            if (data.success) {
                
            }
        })
    }

    return (
        <div className='transparent-form'>
            <h1 className='text-3xl text-white font-semibold mb-3   '>Add A Product</h1>
                <form onSubmit={handleSubmit(handleAddProduct)} className='md:max-w-lg mx-auto my-0 p-5 '>
                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Product Name</span></div>
                        <input className="input input-bordered w-full text-white" style={{backgroundColor: 'rgba(0,0,0, 0.5)'}} name='name' type="text" {...register("name")} required />
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Resale Price</span></div>
                        <div className="flex justify-center items-center"><span className='text-white font-bold px-2 py-[7px]' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>$</span><input className="input input-bordered w-full text-white" style={{backgroundColor: 'rgba(0,0,0, 0.5)'}} name='resalePrice' {...register("resalePrice")} type="number" required /></div>
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Original Price</span></div>
                        <div className="flex justify-center items-center"><span className='text-white font-bold px-2 py-[7px]' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>$</span><input className="input input-bordered w-full text-white" style={{backgroundColor: 'rgba(0,0,0, 0.5)'}} name='originalPrice' {...register("originalPrice")} type="number" required /></div>
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Condition Type</span></div>
                        <select className='select select-bordered  text-white' style={{backgroundColor: 'rgba(0,0,0, 0.5)'}} name='condition' {...register("condition")}>
                            <option value="Excellent" selected>Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Mobile Number</span></div>
                        <input className="input input-bordered w-full text-white" style={{backgroundColor: 'rgba(0,0,0, 0.5)'}} name='mobile' type="number" {...register("mobile")} required />
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Location</span></div>
                        <input className="input input-bordered w-full text-white" style={{backgroundColor: 'rgba(0,0,0, 0.5)'}} name='location' {...register("location")} type="text" required />
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Product Category</span></div>
                        <select className='select select-bordered  text-white' style={{backgroundColor: 'rgba(0,0,0, 0.5)'}} name='category' {...register("category")}>
                            <option value="Supercar" selected>Supercar</option>
                            <option value="SUV car">SUV car</option>
                            <option value="Sedan car">Sedan car</option>
                        </select>
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Discription</span></div>
                        <input className="input input-bordered w-full text-white" style={{backgroundColor: 'rgba(0,0,0, 0.5)'}} name='discription' {...register("discription")} type="text" required />
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Years of use</span></div>
                        <input className="input input-bordered w-full text-white" style={{backgroundColor: 'rgba(0,0,0, 0.5)'}} name='yearsofuse' type="number" {...register("yearsofuse")} required />
                    </label>

                    <label className="form-control md:max-w-md w-full my-0 mx-auto">
                        <div className="label"><span className="label-text font-semibold text-xl text-white">Year of purchase</span></div>
                        <input className="input input-bordered w-full text-white" style={{backgroundColor: 'rgba(0,0,0, 0.5)'}} name='yearofbuy' {...register("yearofbuy")} type="number" required />
                    </label>
                    <div className="form-control md:max-w-md w-full my-3 mx-auto p-2 border-2 border-gray-300 border-dashed">
                        <input
                            className="file-input file-input-bordered w-full text-black bg-pink-400" type="file" accept='image/*' {...register("image", { required: "Photo is required" })}
                        />
                    </div>
                    <button type="submit" className='btn btn-primary w-full md:max-w-md my-5'>Submit</button>
                </form>
        </div>
    );
};

export default AddProduct;