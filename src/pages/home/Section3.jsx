import React from 'react';
import './section1.scss'
import TextGroup from "../../components/TextGroup.jsx";

const Section2 = () => {
    return (
        <div className='section1'>
            <div className="container">
                <div className="section1-wrapper items-center">
                    <div className='section1-images'>
                        <img src="/images/section-3.png" alt="section1" className='section3-img'/>
                    </div>
                    <div className='section1-info'><TextGroup
                        heading='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. '/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;
