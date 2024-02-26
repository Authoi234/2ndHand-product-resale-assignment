import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import CarsSample from '../CarsSample/CarsSample';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Categories></Categories>
                <CarsSample></CarsSample>
            </div>
        </div>
    );
};

export default Home;