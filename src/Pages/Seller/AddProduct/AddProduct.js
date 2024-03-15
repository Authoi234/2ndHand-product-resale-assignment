import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <h1 className='text-2xl'>Add A Product</h1>
            <form>
                <label className="form-control md:max-w-md w-full my-0 mx-auto">
                    <div className="label"><span className="label-text font-semibold text-xl">Product Name</span></div>
                    <input className="input input-bordered w-full" name='name' type="text" required />
                </label>

                <label className="form-control md:max-w-md w-full my-0 mx-auto">
                    <div className="label"><span className="label-text font-semibold text-xl">Resale Price</span></div>
                    <input className="input input-bordered w-full" name='resalePrice' type="number" required />
                </label>

                <label className="form-control md:max-w-md w-full my-0 mx-auto">
                    <div className="label"><span className="label-text font-semibold text-xl">Original Price</span></div>
                    <input className="input input-bordered w-full" name='originalPrice' type="number" required />
                </label>

                <label className="form-control md:max-w-md w-full my-0 mx-auto">
                    <div className="label"><span className="label-text font-semibold text-xl">Condition Type</span></div>
                    <select className='select select-bordered' name='condition'>
                        <option value="Excellent" selected>Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                </label>

                <label className="form-control md:max-w-md w-full my-0 mx-auto">
                    <div className="label"><span className="label-text font-semibold text-xl">Mobile Number</span></div>
                    <input className="input input-bordered w-full" name='mobile' type="number" required />
                </label>

                <label className="form-control md:max-w-md w-full my-0 mx-auto">
                    <div className="label"><span className="label-text font-semibold text-xl">Location</span></div>
                    <input className="input input-bordered w-full" name='location' type="text" required />
                </label>

                <label className="form-control md:max-w-md w-full my-0 mx-auto">
                    <div className="label"><span className="label-text font-semibold text-xl">Product Category</span></div>
                    <input className="input input-bordered w-full" name='category' type="text" required />
                </label>

                <label className="form-control md:max-w-md w-full my-0 mx-auto">
                    <div className="label"><span className="label-text font-semibold text-xl">Discription</span></div>
                    <input className="input input-bordered w-full" name='discription' type="text" required />
                </label>

                <label className="form-control md:max-w-md w-full my-0 mx-auto">
                    <div className="label"><span className="label-text font-semibold text-xl">Years of use</span></div>
                    <input className="input input-bordered w-full" name='yearsofuse' type="number" required />
                </label>

                <label className="form-control md:max-w-md w-full my-0 mx-auto">
                    <div className="label"><span className="label-text font-semibold text-xl">Years of purchase</span></div>
                    <input className="input input-bordered w-full" name='yearsofbuy' type="number" required />
                </label>
                
                <button type="submit" className='btn btn-primary w-full md:max-w-md my-5'>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;