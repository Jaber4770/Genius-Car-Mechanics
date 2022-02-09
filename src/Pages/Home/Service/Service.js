import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, img, description, time } = service;
    return (
        <div className='service'>
            <img className='img-brdr-rds' src={img} alt="img" />
            <h3>Name: {name}</h3>
            <h4>Price: {price}Tk</h4>
            <p>Required time: {time}</p>
            <p>Task details: {description}</p>
            <Link to={`/booking/${id}`}>
                <button type="button" className="btn btn-outline-primary">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;