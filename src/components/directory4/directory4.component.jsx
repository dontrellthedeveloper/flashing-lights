import React from 'react';

import MenuItem4 from "../menu-item-4/menu-item-4.component";

import './directory4.styles.scss';

class Directory4 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'women shades',
                    imageUrl: 'https://i.ibb.co/BygVHKq/women-shades-front-2-Cropped.jpg',
                    size: 'medium',
                    id: 19,
                    linkUrl: 'shop/women-shades'
                },
                {
                    title: 'men shades',
                    imageUrl: 'https://i.ibb.co/2gJRB36/men-shades-front-3-Cropped.jpg',
                    size: 'medium',
                    id: 20,
                    linkUrl: 'shop/men-shades'
                },
                {
                    title: 'necklaces',
                    imageUrl: 'https://i.ibb.co/p3KymZP/necklaces-front-2-Cropped.jpg',
                    size: 'medium',
                    id: 21,
                    linkUrl: 'shop/necklaces'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem4 key={id} {...otherSectionProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory4;