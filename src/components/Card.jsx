import React from 'react';
import './Card.scss'

const Card = () => {
    return (
        <div className='card'>
            <img src="/images/icon-1.svg" alt="icon"/>
            <p className="card-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </div>
    );
};

export default Card;
