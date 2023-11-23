import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h1>
                <Link to="/" className='link'>Home</Link>
            </h1>
            {/* <div className='menu'>
            </div> */}
        </div>
    );
};

export default Header;