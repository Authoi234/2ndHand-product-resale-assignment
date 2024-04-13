import React from 'react';
import iamge404 from '../../assets/images/404Image.jpg';
import { Link } from 'react-router-dom';

const Error404Page = () => {
    return (
        <div>
             <div style={{
               background: `transparent url(${iamge404}) no-repeat center center`,
               width: '100%',
               height: '100vh'
             }}>
                <Link to={'/'} className='btn bg-transparent backdrop-blur-lg hover:btn-primary absolute top-1/2 text-black font-bold'>Go Back</Link>
             </div>
        </div>
    );
};

export default Error404Page;