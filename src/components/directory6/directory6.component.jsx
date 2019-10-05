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
                    imageUrl: 'https://i.ibb.co/s95W47k/women-hats-front-cropped.jpg',
                    id: 10,
                    linkUrl: 'shop/women-hats'
                },
                {
                    title: 'women watches',
                    imageUrl: 'https://i.ibb.co/r2ZPgY9/watches-front-cropped.jpg',
                    id: 11,
                    linkUrl: 'shop/women-watches'
                },
                {
                    title: 'belts',
                    imageUrl: 'https://i.ibb.co/PxWkr2r/belt-front-3.jpg',
                    id: 12,
                    linkUrl: 'shop/belts'
                },
                {
                    title: 'men watches',
                    imageUrl: 'https://i.ibb.co/rxTG4pN/men-watches-front.jpg',
                    id: 14,
                    linkUrl: 'shop/men-watches'
                },
                {
                    title: 'men hats',
                    imageUrl: 'https://i.ibb.co/W01MkQM/men-hats-front-cropped.jpg',
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
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem8 key={id} title={title}
                                   imageUrl={imageUrl}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory6;