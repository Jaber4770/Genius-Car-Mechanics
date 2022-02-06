import React from 'react';
import './Expart.css';

const Expart = ({ expart }) => {
    const { img, description, expert, Experience, name } = expart;
    return (
            <div className='Expart col-lg-4 col-mg-6 col-sm-6 col-12 g-3'>
                <img className='img-brdr-rds' src={img} alt="img" />
                <h3>Name: {name}</h3>
                <h5>Experience: {Experience}</h5>
                <h5>Expart: {expert}</h5>
                <p>Expart details: {description}</p>
            </div>
    );
};

export default Expart;