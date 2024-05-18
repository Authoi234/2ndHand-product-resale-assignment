import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../../App.css"
import { AuthContext } from '../../Contexts/AuthContextProvider';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const [passwordType, setPasswordType] = useState('password');
    const [loginError, setLoginError] = useState('');
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const handlePasswordShow = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        }
        else {
            setPasswordType('password');
        }
    }


    const handleLogin = (data) => {
        setLoginError('');

        signInUser(data.email, data.password)
            .then(result => {
                fetch(`http://localhost:5000/jwt/${data.email}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.accessToken) {
                            localStorage.setItem('accessToken', data.accessToken);
                            toast.success('User Loggede In Successfully');
                            return navigate(location?.state?.from?.pathname ? location?.state?.from?.pathname : '/')
                        }
                    })
            })
            .catch(error => {
                setLoginError(error.message);
                toast.error(`An error occured, ${error.message}`)
            })
    }

    const signInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                fetch(`http://localhost:5000/jwt/${result.user.email}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.accessToken) {
                            localStorage.setItem('accessToken', data.accessToken);
                            toast.success('User Loggede In Successfully');
                            return navigate(location?.state?.from?.pathname ? location?.state?.from?.pathname : '/')
                        }
                    })
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
                <form onSubmit={handleSubmit(handleLogin)}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label"><span className="label-text font-semibold">Email</span></div>
                        <input className="input input-bordered w-full max-w-xs" name='email' {...register('email', { required: true })} type="email" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label"><span className="label-text font-semibold">Password</span></div>
                        <div className='flex items-center'>
                            <input className="input input-bordered w-full max-w-xs" name='password' type={passwordType} {...register('password', { required: true })} />
                            <span className='text-2xl border p-2.5 rounded-r-lg tooltip' data-tip="Password Show/Hide" onClick={handlePasswordShow}>{passwordType === 'text' ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        </div>
                    </label>
                    <input className='btn rainbow-bg text-white w-full my-3' type="submit" />
                </form>
                <p className="text-red-600 my-3">{loginError}</p>
                <p className='my-2 text-sm'>New to Authois 2nd hand Car Resale ? <Link className='text-blue-400' to={'/register'}>Please create a new account</Link></p>
                <button className='btn btn-outline w-full group' onClick={signInWithGoogle}><FaGoogle className='text-blue-500 p-1 rounded-full text-2xl group-hover:bg-white'></FaGoogle> CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;