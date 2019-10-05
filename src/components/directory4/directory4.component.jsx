import React from 'react';

import MenuItem4 from "../menu-item-4/menu-item-4.component";

import './directory4.styles.scss';

class Directory4 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'women shades',
                    imageUrl: 'https://i.ibb.co/Yj9JjBD/woman-shades-front-Cropped.jpg',
                    size: 'medium',
                    id: 19,
                    linkUrl: 'shop/women-shades'
                },
                {
                    title: 'men shades',
                    imageUrl: 'https://i.ibb.co/b6Fx7wf/men-shades-front-Cropped.jpg',
                    size: 'medium',
                    id: 20,
                    linkUrl: 'shop/men-shades'
                },
                {
                    title: 'necklaces',
                    imageUrl: 'https://i.ibb.co/7jMkGkg/necklace-front-Cropped.jpg',
                    size: 'medium',
                    id: 21,
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
                        <MenuItem4 key={id} title={title}
                        imageUrl={imageUrl}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory4;