import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, img, description, time } = service;
    return (
        <div className='service'>
            <img className='img-brdr-rds' src={img} alt="img" />
            <h2>Name: {name}</h2>
            <h3>Price: {price}Tk</h3>
            <p>Required time: {time}</p>
            <p>Task details: {description}</p>
        </div>
    );
};

export default Service;