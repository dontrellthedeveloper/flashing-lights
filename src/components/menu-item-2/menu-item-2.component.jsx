import React from 'react';

import './menu-item-2.styles.scss';

const MenuItem2 = ({title}) => (
    <div className='menu-item-2'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem2;