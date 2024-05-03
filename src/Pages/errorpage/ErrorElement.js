import React, { useContext } from 'react';
import iamge404 from '../../assets/images/404Image.jpg';
import { AuthContext } from '../../Contexts/AuthContextProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ErrorElement = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logout()
            .then(() => {
                toast.success('successfully signed out');
                navigate('/')
            })
            .catch(() => { })
    }

    return (
        <div>
            <div style={{
                backgroundImage: `url(${iamge404})`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh'
            }}>
                <div>
                    <h1 className="text-5xl text-white my-16 font-bold" style={{
                        textShadow: `0 1px 0 #ccc, 0 2px 0 #ccc,
                    0 3px 0 #ccc, 0 4px 0 #ccc,
                    0 5px 0 #ccc, 0 6px 0 #ccc,
                    0 20px 30px rgba(0, 0, 0, 0.5) `
                    }}>An Error Occured!</h1>
                    <button className="btn btn-secondary btn-outline btn-lg my-16 backdrop-blur-md" onClick={handleLogOut} style={{ boxShadow: '2px 5px' }}>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;