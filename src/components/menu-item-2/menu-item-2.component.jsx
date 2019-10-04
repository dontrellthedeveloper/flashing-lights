import React from 'react';

import './menu-item-2.styles.scss';

const MenuItem2 = ({title, imageUrl}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className='menu-item-2'>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem2;