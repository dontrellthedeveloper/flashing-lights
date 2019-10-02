import React from 'react';

import MenuItem1 from "../menu-item-1/menu-item-1.component";

import './directory1.styles.scss';

class Directory1 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'women-shoes',
                    imageUrl: 'https://ibb.co/8mhF08f',
                    id: 1,
                    linkUrl: 'shop/women-shoes'
                },
                {
                    title: 'men-shoes',
                    imageUrl: 'https://ibb.co/mCBksWn',
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
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem1 key={id} title={title} imageUrl={imageUrl} />
                    ))
                }
            </div>
        )
    }
}

export default Directory1;

