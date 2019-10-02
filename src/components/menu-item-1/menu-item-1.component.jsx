import React from 'react';

import './menu-item-1.styles.scss';

const MenuItem1 = ({title, imageUrl }) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className='menu-item-1'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem1;