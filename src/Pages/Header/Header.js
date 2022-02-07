import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='div-width container'>
                <img className='width' src="https://i.ibb.co/MkgS9D9/favicon.jpg" alt="" />
            </div>
            <div>
                <NavLink to='home'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='contact'>Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;