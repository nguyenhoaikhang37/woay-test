import React from 'react';
import './section1.scss'
import TextGroup from "../../components/TextGroup.jsx";

const Section1 = () => {
    return (
        <div className='section1'>
            <div className="container">
                <div className="section1-wrapper">
                    <div className='section1-images'>
                        <img src="/images/section-1-1.png" alt="section1" className='section1-img'/>
                        <img src="/images/section-1-2.png" alt="section2" className='section2-img'/>
                    </div>
                    <div className='section1-info'><TextGroup
                        heading='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
                        text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. '/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
