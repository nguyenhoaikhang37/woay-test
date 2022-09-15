import React from 'react';
import './interested.scss'
import Button from "../../components/Button.jsx";

const Interested = () => {
    return (
        <div className='interested'>
            <div className="container">
                <h2 className='interested-heading'>Interested in our Services?</h2>
                <Button>Let’s Talk</Button>
            </div>
        </div>
    );
};

export default Interested;
