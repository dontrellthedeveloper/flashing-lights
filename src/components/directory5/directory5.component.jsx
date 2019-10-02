import React from 'react';

import MenuItem5 from "../menu-item-5/menu-item-5.component";

import './directory5.styles.scss';

class Directory5 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'all-women',
                    imageUrl: 'https://ibb.co/5MtqNcZ',
                    size: 'large',
                    id: 17,
                    linkUrl: 'shop/all-women'
                },
                {
                    title: 'all-men',
                    imageUrl: 'https://ibb.co/sbw3YpL',
                    size: 'large',
                    id: 18,
                    linkUrl: 'shop/all-men'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem5 key={id} title={title} />
                    ))
                }
            </div>
        )
    }
}

export default Directory5;