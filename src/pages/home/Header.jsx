import React from 'react';
import "./header.scss";


const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="header-wrapper">
                    <div className='logo'><h1>Content...</h1></div>
                    <nav className='menu'>
                        <ul>
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">Case Studies</a></li>
                            <li><a href="#!">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
