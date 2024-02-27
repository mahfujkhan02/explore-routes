import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>

            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/post'>Posts</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
            </nav>

            <p>Common Header</p>

        </div>
    );
};

export default Header;