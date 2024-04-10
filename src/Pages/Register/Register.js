import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import { AuthContext } from '../../Contexts/AuthContextProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [passwordType, setPasswordType] = useState('password');
    const [error, setError] = useState('');
    const [userRole, setUserRole] = useState('Buyer');
    const navigate = useNavigate();

    const handlePasswordShow = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        }
        else {
            setPasswordType('password');
        }
    }

    const handleRegister = (event) => {
        event.preventDefault();
        setError('');

        const form = event?.target;

        const name = form?.name.value;
        const email = form?.email.value;
        const password = form?.password.value;
        const phone = form?.phone.value;
        const address = form?.address.value;

        const user = {
            name,
            email,
            userRole,
            address,
            phone
        }

        createUser(email, password)
            .then(result => {
                updateUser(name)
                    .then(result => {

                        fetch('http://localhost:5000/user', {
                            method: 'POST',
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(user)
                        })
                            .then(result => {
                                console.log(result);
                                toast.success('Successfully Sign Up 😊' );
                                navigate('/home');

                            })
                            .catch(err => setError(err.message));
                    })
                    .catch(err => setError(err));
            })
            .catch(err => setError(err.message))
    }

    return (
        <div className=' flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-4xl text-center">Register</h2>
                <form onSubmit={handleRegister}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label"><span className="label-text font-semibold">Name</span></div>
                        <input className="input input-bordered w-full max-w-xs" type="text" placeholder='Your Name' name='name' required />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label"><span className="label-text font-semibold">Address</span></div>
                        <input className="input input-bordered w-full max-w-xs" type="text" placeholder='Your Address' name='address' required />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label"><span className="label-text font-semibold">Phone</span></div>
                        <input className="input input-bordered w-full max-w-xs" type="tel" placeholder='**********' name='phone' required />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label"><span className="label-text font-semibold">Email</span></div>
                        <input className="input input-bordered w-full max-w-xs" name='email' placeholder='Your Email' type="email" required />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label"><span className="label-text font-semibold">Password</span></div>
                        <div className='flex items-center'>
                            <input className="input input-bordered w-full max-w-xs" name='password' type={passwordType}  placeholder="Enter Your Password" required />
                            <span className='text-2xl border p-2.5 rounded-r-lg tooltip' data-tip="Password Show/Hide" onClick={handlePasswordShow}>{passwordType === 'text' ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        </div>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label"><span className="label-text font-semibold">Select Role</span></div>
                        <div className='flex items-center my-2'>
                            <input type="radio" value="Buyer" name='user-role' checked onChange={e => setUserRole(e.target.value)} className='radio checked:bg-green-600'/><span className='mx-2'> Buyer</span>
                        </div>
                        <div className='flex items-center my-2'>
                            <input type="radio" value="Seller" name='user-role' onChange={e => setUserRole(e.target.value)} className='radio checked:bg-blue-600'/><span className='mx-2'> Seller</span>
                        </div>
                    </label>
                    <input className='btn rainbow-bg text-white w-full my-3' type="submit" />
                </form>
                <p className="text-red-600 -mt-4">{error}</p>
                <p className='my-2 text-sm'>Already have an account ? <Link className='text-blue-400' to={'/login'}>Please Login</Link></p>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;