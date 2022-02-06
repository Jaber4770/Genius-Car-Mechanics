import React from 'react';
import Exparts from '../Exparts/Exparts';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='img-div-style'>
                <img className='banner-width' src="https://i.ibb.co/CP7jjsN/Banner.jpg" alt="" />
            </div>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;