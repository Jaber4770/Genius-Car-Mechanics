import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, img, description, time } = service;
    return (
        <div className='service'>
            <img className='img-brdr-rds' src={img} alt="img" />
            <h3>Name: {name}</h3>
            <h4>Price: {price}Tk</h4>
            <p>Required time: {time}</p>
            <p>Task details: {description}</p>
        </div>
    );
};

export default Service;