import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item-1.styles.scss';

const MenuItem1 = ({title, imageUrl, history, linkUrl, match }) => (
    <div
        className='menu-item-1'
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image'
             style={{
                 backgroundImage: `url(${imageUrl})`
             }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem1);