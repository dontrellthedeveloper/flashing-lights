import React from 'react';

import './menu-item-4.styles.scss';

const MenuItem4 = ({title, imageUrl }) => (
    <div  className='menu-item-2'>
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

export default MenuItem4;