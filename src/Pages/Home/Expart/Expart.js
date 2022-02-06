import React from 'react';
import './Expart.css'

const Expart = ({ expart }) => {
    const { img, description, Experience, name } = expart;
    return (
        <div className='Expart'>
            <img className='img-brdr-rds' src={img} alt="img" />
            <h3>Name: {name}</h3>
            <h3>Experience: {Experience}</h3>
            <p>Expart details: {description}</p>
        </div>
    );
};

export default Expart;