import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item-2.styles.scss';

const MenuItem2 = ({title, imageUrl, history, linkUrl, match }) => (
    <div
        className='menu-item-2'
          onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem2);