import React from 'react';

import './menu-item-3.styles.scss';

const MenuItem3 = ({title}) => (
    <div className='menu-item-3'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem3;