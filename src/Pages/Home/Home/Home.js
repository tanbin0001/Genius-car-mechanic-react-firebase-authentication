import React from 'react';
import Experts from '../../Experts/Experts';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>

        </div>
    );
};

export default Home;