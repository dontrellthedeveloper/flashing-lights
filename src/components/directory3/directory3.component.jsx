import React from 'react';

import MenuItem3 from "../menu-item-3/menu-item-3.component";

import './directory3.styles.scss';

class Directory3 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'business dresses',
                    imageUrl: 'https://i.ibb.co/RvJZL1R/women-business-dress-front-2-Cropped.jpg',
                    size: 'small',
                    id: 6,
                    linkUrl: 'shop/business-dresses'
                },
                {
                    title: 'summer dresses',
                    imageUrl: 'https://i.ibb.co/98dY9jJ/women-summer-dress-front-2-Cropped.jpg',
                    size: 'small',
                    id: 7,
                    linkUrl: 'shop/summer-dresses'
                },
                {
                    title: 'women vests',
                    imageUrl: 'https://i.ibb.co/Yy4D5jM/women-vest-front-2-Cropped.jpg',
                    size: 'small',
                    id: 8,
                    linkUrl: 'shop/women-vests'
                },
                {
                    title: 'women pants',
                    imageUrl: 'https://i.ibb.co/GnZDyqR/women-pants-front-2-Cropped.jpg',
                    size: 'small',
                    id: 9,
                    linkUrl: 'shop/women-pants'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem3 key={id} {...otherSectionProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory3;