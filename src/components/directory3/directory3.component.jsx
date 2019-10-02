import React from 'react';

import MenuItem3 from "../menu-item-3/menu-item-3.component";

import './directory3.styles.scss';

class Directory3 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'business-dresses',
                    imageUrl: 'https://ibb.co/8xXqLhC',
                    size: 'small',
                    id: 6,
                    linkUrl: 'shop/business-dresses'
                },
                {
                    title: 'summer-dresses',
                    imageUrl: 'https://ibb.co/PYnyd3Y',
                    size: 'small',
                    id: 7,
                    linkUrl: 'shop/summer-dresses'
                },
                {
                    title: 'women-vests',
                    imageUrl: 'https://ibb.co/hLMRyMZ',
                    size: 'small',
                    id: 8,
                    linkUrl: 'shop/women-vests'
                },
                {
                    title: 'women-pants',
                    imageUrl: 'https://ibb.co/QbvJ37M',
                    size: 'small',
                    id: 9,
                    linkUrl: 'shop/women-pants'
                },
                {
                    title: 'men-blazers',
                    imageUrl: 'https://ibb.co/1Jdm73Z',
                    size: 'small',
                    id: 10,
                    linkUrl: 'shop/men-blazers'
                },
                {
                    title: 'men-shirts',
                    imageUrl: 'https://ibb.co/3mhK2df',
                    size: 'small',
                    id: 11,
                    linkUrl: 'shop/men-shirts'
                },
                {
                    title: 'men-vests',
                    imageUrl: 'https://ibb.co/fDVjys4',
                    size: 'small',
                    id: 12,
                    linkUrl: 'shop/men-vests'
                },
                {
                    title: 'men-pants',
                    imageUrl: 'https://ibb.co/2Z95f03',
                    size: 'small',
                    id: 13,
                    linkUrl: 'shop/men-pants'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem3 key={id} title={title} />
                    ))
                }
            </div>
        )
    }
}

export default Directory3;