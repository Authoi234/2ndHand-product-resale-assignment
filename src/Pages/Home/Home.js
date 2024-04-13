import React from 'react';
import Banner from '../Banner/Banner';
import CarsSample from '../CarsSample/CarsSample';
import Categories from '../Categories/Categories';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';

const Home = () => {    
    return (
        <div>
            <div>
                <Banner></Banner>
                <AdvertisedItems></AdvertisedItems>
                <Categories></Categories>
                <CarsSample></CarsSample>
            </div>
        </div>
    );
};

export default Home;