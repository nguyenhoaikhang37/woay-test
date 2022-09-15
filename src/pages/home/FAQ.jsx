import React from 'react';
import './faq.scss'
import Accordion from "../../components/Accordion.jsx";

const Faq = () => {
    return (
        <div className='faq'>
            <div className="container">
                <h2 className='faq-heading'>Frequently Ask Questions</h2>
                <div className="faq-list">
                    <div className='faq-item'>
                        <Accordion/>
                    </div>
                    <div className='faq-item'>
                        <Accordion/>
                    </div>
                    <div className='faq-item'>
                        <Accordion/>
                    </div>
                    <div className='faq-item'>
                        <Accordion/>
                    </div>
                    <div className='faq-item'>
                        <Accordion/>
                    </div>
                    <div className='faq-item'>
                        <Accordion/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
