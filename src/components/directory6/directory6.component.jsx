import React from 'react';

import MenuItem2 from "../menu-item-2/menu-item-2.component";

import './directory6.styles.scss';

class Directory6 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'women hats',
                    imageUrl: 'https://i.ibb.co/nrfghYg/women-hats-front-2-Cropped.jpg',
                    id: 10,
                    linkUrl: 'shop/women-hats'
                },
                {
                    title: 'belts',
                    imageUrl: 'https://i.ibb.co/LhmPbJL/belts-front-2-Cropped.jpg',
                    id: 12,
                    linkUrl: 'shop/belts'
                },
                {
                    title: 'men hats',
                    imageUrl: 'https://i.ibb.co/GxZ63HN/men-hats-front-2-Cropped.jpg',
                    id: 13,
                    linkUrl: 'shop/men-hats'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem2 key={id} {...otherSectionProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory6;