import React from 'react';

import MenuItem2 from "../menu-item-2/menu-item-2.component";

import './directory2.styles.scss';

class Directory2 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'women purses',
                    imageUrl: 'https://i.ibb.co/pwQzWj5/women-purses-front-2-Cropped.jpg',
                    size: 'medium',
                    id: 3,
                    linkUrl: 'shop/women-purses'
                },
                {
                    title: 'women bags',
                    imageUrl: 'https://i.ibb.co/r2xP9PC/women-bags-front-2-Cropped.jpg',
                    size: 'medium',
                    id: 4,
                    linkUrl: 'shop/women-bags'
                },
                {
                    title: 'men bags',
                    imageUrl: 'https://i.ibb.co/hKbmBrn/men-bags-front-3-Cropped.jpg',
                    size: 'medium',
                    id: 5,
                    linkUrl: 'shop/men-bags'
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

export default Directory2;