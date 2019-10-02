import React from 'react';

import MenuItem2 from "../menu-item-2/menu-item-2.component";

import './directory2.styles.scss';

class Directory2 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'women-purses',
                    imageUrl: 'https://ibb.co/T0b34Y9',
                    size: 'medium',
                    id: 3,
                    linkUrl: 'shop/women-purses'
                },
                {
                    title: 'women-bags',
                    imageUrl: 'https://ibb.co/L9GddGL',
                    size: 'medium',
                    id: 4,
                    linkUrl: 'shop/women-bags'
                },
                {
                    title: 'men-bags',
                    imageUrl: 'https://ibb.co/4ZkKzT3',
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
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem2 key={id} title={title} />
                    ))
                }
            </div>
        )
    }
}

export default Directory2;