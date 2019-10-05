import React from 'react';

import './menu-item-5.styles.scss';

const MenuItem5 = ({title, imageUrl, size }) => (
    <div  className={`${size} menu-item-1`}>
        <div className='background-image'
             style={{
                 backgroundImage: `url(${imageUrl})`
             }}
        >
        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem5;






