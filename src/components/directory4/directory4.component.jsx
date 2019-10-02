import React from 'react';

import MenuItem4 from "../menu-item-4/menu-item-4.component";

import './directory4.styles.scss';

class Directory4 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'women-shades',
                    imageUrl: 'https://ibb.co/VBybBYH',
                    size: 'medium',
                    id: 14,
                    linkUrl: 'shop/women-shades'
                },
                {
                    title: 'men-shades',
                    imageUrl: 'https://ibb.co/yNpDVv3',
                    size: 'medium',
                    id: 15,
                    linkUrl: 'shop/men-shades'
                },
                {
                    title: 'necklaces',
                    imageUrl: 'https://ibb.co/k5bmhm3',
                    size: 'medium',
                    id: 16,
                    linkUrl: 'shop/necklaces'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem4 key={id} title={title} />
                    ))
                }
            </div>
        )
    }
}

export default Directory4;