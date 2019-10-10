import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item-6.styles.scss';

const MenuItem6 = ({title, imageUrl, history, linkUrl, match }) => (
    <div  className='menu-item-3'
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

export default withRouter(MenuItem6);