import React from 'react';

import './menu-item-8.styles.scss';

const MenuItem8 = ({title, imageUrl }) => (
    <div  className='menu-item-6'>
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

export default MenuItem8;