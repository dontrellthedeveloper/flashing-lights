import React from 'react';

import MenuItem1 from "../menu-item-1/menu-item-1.component";

import './directory8.styles.scss';

class Directory8 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'women watches',
                    imageUrl: 'https://i.ibb.co/YW1vzNz/women-watches-front-3-Cropped.jpg',
                    id: 11,
                    linkUrl: 'shop/women-watches'
                },
                {
                    title: 'men watches',
                    imageUrl: 'https://i.ibb.co/XCB4hfJ/men-watches-front-2-Cropped.jpg',
                    id: 14,
                    linkUrl: 'shop/men-watches'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem1 key={id} {...otherSectionProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory8;