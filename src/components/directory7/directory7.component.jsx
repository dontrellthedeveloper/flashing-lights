import React from 'react';

import MenuItem7 from "../menu-item-7/menu-item-7.component";

import './directory7.styles.scss';

class Directory7 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'men blazers',
                    imageUrl: 'https://i.ibb.co/R4BDY12/men-blazer-front-Cropped.jpg',
                    size: 'small',
                    id: 15,
                    linkUrl: 'shop/men-blazers'
                },
                {
                    title: 'men shirts',
                    imageUrl: 'https://i.ibb.co/fd0JfF8/men-shirt-front-Cropped.jpg',
                    size: 'small',
                    id: 16,
                    linkUrl: 'shop/men-shirts'
                },
                {
                    title: 'men vests',
                    imageUrl: 'https://i.ibb.co/mNrf236/men-vest-front-Cropped.jpg',
                    size: 'small',
                    id: 17,
                    linkUrl: 'shop/men-vests'
                },
                {
                    title: 'men pants',
                    imageUrl: 'https://i.ibb.co/cYBx7Kh/men-pants-front-Cropped.jpg',
                    size: 'small',
                    id: 18,
                    linkUrl: 'shop/men-pants'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem7 key={id} {...otherSectionProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory7;