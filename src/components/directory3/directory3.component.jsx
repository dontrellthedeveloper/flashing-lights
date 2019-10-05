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
                    imageUrl: 'https://i.ibb.co/NN75d4v/women-business-dress-front-Cropped.jpg',
                    size: 'small',
                    id: 6,
                    linkUrl: 'shop/business-dresses'
                },
                {
                    title: 'summer dresses',
                    imageUrl: 'https://i.ibb.co/QcRV4zc/women-summer-dress-front-Cropped.jpg',
                    size: 'small',
                    id: 7,
                    linkUrl: 'shop/summer-dresses'
                },
                {
                    title: 'women vests',
                    imageUrl: 'https://i.ibb.co/MZhDshG/women-vest-front-Cropped.jpg',
                    size: 'small',
                    id: 8,
                    linkUrl: 'shop/women-vests'
                },
                {
                    title: 'women pants',
                    imageUrl: 'https://i.ibb.co/HFTKfLq/women-pants-front-Cropped.jpg',
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
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem3 key={id} title={title}
                        imageUrl={imageUrl}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory3;