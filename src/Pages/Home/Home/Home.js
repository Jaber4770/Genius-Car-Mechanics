import React from 'react';
import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';
import Header from '../../Header/Header';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;