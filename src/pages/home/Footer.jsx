import React from 'react';
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-logo-content">
                        <div className='logo'><h1>Content...</h1></div>
                        <p className='logo-content'>
                            Got questions? Reach us at hey@email.com
                        </p>
                    </div>
                    <div className="footer-info">
                        <ul>
                            <p>MENU</p>
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">About</a></li>
                            <li><a href="#!">Contact us</a></li>
                            <li><a href="#!">FAQ</a></li>
                        </ul>
                        <ul>
                            <p>Social</p>
                            <li><a href="#!">Twitter</a></li>
                            <li><a href="#!">Instagram</a></li>
                            <li><a href="#!">Facebook</a></li>
                        </ul>
                        <ul>
                            <p>Legal</p>
                            <li><a href="#!">Terms of Use</a></li>
                            <li><a href="#!">Privace Policy</a></li>
                            <li><a href="#!">Legal Notice</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
