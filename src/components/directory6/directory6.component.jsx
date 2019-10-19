import React from 'react';

import MenuItem8 from "../menu-item-8/menu-item-8.component";

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
                    title: 'women watches',
                    imageUrl: 'https://i.ibb.co/YW1vzNz/women-watches-front-3-Cropped.jpg',
                    id: 11,
                    linkUrl: 'shop/women-watches'
                },
                {
                    title: 'belts',
                    imageUrl: 'https://i.ibb.co/LhmPbJL/belts-front-2-Cropped.jpg',
                    id: 12,
                    linkUrl: 'shop/belts'
                },
                {
                    title: 'men watches',
                    imageUrl: 'https://i.ibb.co/XCB4hfJ/men-watches-front-2-Cropped.jpg',
                    id: 14,
                    linkUrl: 'shop/men-watches'
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
                        <MenuItem8 key={id} {...otherSectionProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory6;