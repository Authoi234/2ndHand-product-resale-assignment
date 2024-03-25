import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../../App.css"
import { AuthContext } from '../../Contexts/AuthContextProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const [passwordType, setPasswordType] = useState('password');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const handlePasswordShow = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        }
        else {
            setPasswordType('password');
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        setLoginError('');

        const form = event?.target;

        const email = form?.email.value;
        const password = form?.password.value;

        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully logged In.');
                navigate(from);
            })
            .catch(error => {
                setLoginError(error.message);
                toast.error(`An error occured, ${error.message}`)
            })
    }

    return (
        <div className='h-[550px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-4xl text-center mb-5">Login</h2>
                <form onSubmit={handleLogin}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label"><span className="label-text font-semibold">Email</span></div>
                        <input className="input input-bordered w-full max-w-xs" name='email' type="email" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label"><span className="label-text font-semibold">Password</span></div>
                        <div className='flex items-center'>
                            <input className="input input-bordered w-full max-w-xs" name='password' type={passwordType} />
                            <span className='text-2xl border p-2.5 rounded-r-lg tooltip' data-tip="Password Show/Hide" onClick={handlePasswordShow}>{passwordType === 'text' ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        </div>
                    </label>
                    <input className='btn rainbow-bg text-white w-full my-3' type="submit" />
                </form>
                <p className="text-red-600 my-3">{loginError}</p>
                <p className='my-2 text-sm'>New to Authois 2nd hand Car Resale ? <Link className='text-blue-400' to={'/register'}>Please create a new account</Link></p>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;