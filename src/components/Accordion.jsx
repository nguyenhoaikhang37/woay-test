import React from 'react';
import './accordion.scss'

const Accordion = ({text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?'}) => {
    return (
        <div className='accordion'>
            <div className='accordion-icon'><i className="fa-solid fa-plus"></i></div>
            <div className='accordion-text'>{text}</div>
        </div>
    );
};

export default Accordion;
