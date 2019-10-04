import React from 'react';

import './menu-item-3.styles.scss';

const MenuItem3 = ({title, imageUrl}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className='menu-item-3'>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem3;