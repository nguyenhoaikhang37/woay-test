import React from 'react';
import './card-list.scss'
import Card from "../../components/Card.jsx";

const CardList = () => {
    return (
        <div className='card-list'>
            <div className="container">
                <div className="card-list-wrapper">
                    <div className='card-item'><Card /></div>
                    <div className='card-item'><Card /></div>
                    <div className='card-item'><Card /></div>
                </div>
            </div>
        </div>
    );
};

export default CardList;
