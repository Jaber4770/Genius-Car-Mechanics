import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../images/404-Page/3828537.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className='img-width' src={NotFoundImg} alt="" />
            <br />
            <Link to='/'>
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;