import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>

            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
                <Link to='/friends'>Friends</Link>
            </nav>

            <p>Common Header</p>

        </div>
    );
};

export default Header;