import React from 'react';
import './section1.scss'
import TextGroup from "../../components/TextGroup.jsx";

const Section2 = () => {
    return (
        <div className='section2'>
            <div className="container">
                <div className="section1-wrapper flex-change">
                    <div className='section1-images'>
                        <img src="/images/section-2-1.png" alt="section1" className='section21-img'/>
                        <img src="/images/section-2-2.png" alt="section2" className='section22-img'/>
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
