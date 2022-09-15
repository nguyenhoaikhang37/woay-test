import React from 'react';
import './TextGroup.scss'

const TextGroup = ({heading,text}) => {
    return (
        <div className='text-group'>
            <h2 className='text-group-heading'>{heading}</h2>
            <p className='text-group-text'>{text}</p>
        </div>
    );
};

export default TextGroup;
