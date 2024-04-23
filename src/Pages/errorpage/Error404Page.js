import React from 'react';
import iamge404 from '../../assets/images/404Image.jpg';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const Error404Page = () => {
  const ranodmNumGenerate = () => {
    const random = Math.random() * 30;
    const floor = Math.floor(random);
    return floor + 'rem';
  };

  return (
    <div>
      <div style={{
        background: `transparent url(${iamge404}) no-repeat center center`,
        width: '100%',
        height: '100vh'
      }}>

        {/* stars of left side */}

        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>
        <FaStar className='text-yellow-300 absolute animate-spin' style={{
          top: ranodmNumGenerate(),
          left: ranodmNumGenerate()
        }} ></FaStar>

        {/* starts of right side */}

        <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>
              <FaStar className='text-yellow-300 absolute animate-spin' style={{
                top: ranodmNumGenerate(),
                right: ranodmNumGenerate()
              }} ></FaStar>

        <Link to={'/'} className='btn bg-transparent backdrop-blur-lg hover:btn-primary absolute top-1/2 text-black font-bold'>Go Back</Link>
      </div>
    </div>
  );
};

export default Error404Page;