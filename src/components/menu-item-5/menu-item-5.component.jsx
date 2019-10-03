import React from 'react';

import './menu-item-5.styles.scss';

const MenuItem5 = ({title, imageUrl, size}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className={`${size} menu-item-1`}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem5;