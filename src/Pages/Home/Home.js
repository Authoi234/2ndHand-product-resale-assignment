import React from 'react';
import Banner from '../Banner/Banner';
import CarsSample from '../CarsSample/CarsSample';
import Categories from '../Categories/Categories';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';

const Home = () => {    
    return (
        <div>
            <div>
                {/* Banner */}
                <Banner></Banner>
                
                {/* Advertised Items */}
                <AdvertisedItems></AdvertisedItems>

                {/* All of the Categories */}
                <Categories></Categories>

                {/* An Extra Section */}
                <CarsSample></CarsSample>
            </div>
        </div>
    );
};

export default Home;