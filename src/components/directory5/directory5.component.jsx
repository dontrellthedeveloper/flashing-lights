import React from 'react';

import MenuItem5 from "../menu-item-5/menu-item-5.component";

import './directory5.styles.scss';

class Directory5 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'all women',
                    imageUrl: 'https://i.ibb.co/R9Xqk6S/women-all-front.jpg',
                    size: 'large',
                    id: 22,
                    linkUrl: 'shop/all-women'
                },
                {
                    title: 'all men',
                    imageUrl: 'https://i.ibb.co/YPkjs4v/men-all-products-front-Cropped.jpg',
                    size: 'large',
                    id: 23,
                    linkUrl: 'shop/all-men'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem5 key={id} {...otherSectionProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory5;