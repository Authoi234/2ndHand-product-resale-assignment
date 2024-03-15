import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <h1 className='text-2xl'>Add A Product</h1>
            <form>
                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Product Name</span></div>
                    <input className="input input-bordered w-full" name='name' type="text" required />
                </label>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Resale Price</span></div>
                    <input className="input input-bordered w-full" name='resalePrice' type="number" required />
                </label>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Original Price</span></div>
                    <input className="input input-bordered w-full" name='originalPrice' type="number" required />
                </label>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Condition Type</span></div>
                    <select className='select select-bordered' name='condition'>
                        <option value="Excellent" selected>Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                </label>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Mobile Number</span></div>
                    <input className="input input-bordered w-full" name='mobile' type="number" required />
                </label>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Location</span></div>
                    <input className="input input-bordered w-full" name='location' type="text" required />
                </label>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Product Category</span></div>
                    <input className="input input-bordered w-full" name='category' type="text" required />
                </label>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Discription</span></div>
                    <input className="input input-bordered w-full" name='discription' type="text" required />
                </label>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Years of use</span></div>
                    <input className="input input-bordered w-full" name='yearsofuse' type="number" required />
                </label>

                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Years of purchase</span></div>
                    <input className="input input-bordered w-full" name='yearsofbuy' type="number" required />
                </label>
                
                <button type="submit" className='btn btn-primary my-2'>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;