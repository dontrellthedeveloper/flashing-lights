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
                    imageUrl: 'https://i.ibb.co/ykYj6dH/women-purse-front-Cropped.jpg',
                    size: 'medium',
                    id: 3,
                    linkUrl: 'shop/women-purses'
                },
                {
                    title: 'women bags',
                    imageUrl: 'https://i.ibb.co/6Dd00d3/women-bag-front-Cropped.jpg',
                    size: 'medium',
                    id: 4,
                    linkUrl: 'shop/women-bags'
                },
                {
                    title: 'men bags',
                    imageUrl: 'https://i.ibb.co/Z69G587/men-bag-front-Cropped.jpg',
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