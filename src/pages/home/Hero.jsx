import React from 'react';
import './hero.scss'
import Button from "../../components/Button.jsx";

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-info">
                        <h1 className="hero-heading">Another landing page for startups</h1>
                        <p className='hero-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <Button>Get Started</Button>
                    </div>
                    <div className="hero-images">
                        <img src="/images/hero.png" alt="hero"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
