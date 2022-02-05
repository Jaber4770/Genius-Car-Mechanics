import React from 'react';

const Service = ({service}) => {
    const {name, price, img, description, time} = service;
    return (
        <div>
            <div>
                <img src={img} alt="img" />
                <h1>Name: {name}</h1>
                <h3>Price: {price}Tk</h3>
                <p>Required time: {time}</p>
                <p>Task details: {description}</p>
            </div>
        </div>
    );
};

export default Service;