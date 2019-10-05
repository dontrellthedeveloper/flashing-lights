import React from 'react';

import './menu-item-6.styles.scss';

const MenuItem6 = ({title, imageUrl }) => (
    <div  className='menu-item-3'>
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

export default MenuItem6;