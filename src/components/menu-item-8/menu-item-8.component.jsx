import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item-8.styles.scss';

const MenuItem8 = ({title, imageUrl, history, linkUrl, match }) => (
    <div  className='menu-item-6'
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

export default withRouter(MenuItem8);