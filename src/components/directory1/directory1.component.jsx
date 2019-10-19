import React from 'react';

import MenuItem1 from "../menu-item-1/menu-item-1.component";

import './directory1.styles.scss';

class Directory1 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'women shoes',
                    imageUrl: 'https://i.ibb.co/BP8bJMz/women-shoes-front-2-Cropped.jpg',
                    id: 1,
                    linkUrl: 'shop/women-shoes'
                },
                {
                    title: 'men shoes',
                    imageUrl: 'https://i.ibb.co/Rp02qB3/men-shoes-front-2-Cropped.jpg',
                    id: 2,
                    linkUrl: 'shop/men-shoes'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem1 key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory1;

