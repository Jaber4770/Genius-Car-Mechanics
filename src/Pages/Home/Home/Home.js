import React from 'react';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='img-div-style'>
                <img className='banner-width' src="https://i.ibb.co/CP7jjsN/Banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;