import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from "../../assets/crown.svg";



import './header.styles.scss';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 87;
            if(isTop !== true) {
                this.setState({scrolled: true});
            } else {
                this.setState({scrolled: false})
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }


    render()  {
        return (
            <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
                <div className='nav_text'>
                    <div className='header'>
                        <Link to='/' className='logo-container'>
                            <Logo className='logo' />
                        </Link>
                        <Link className='title-name' to='/'>
                            FLASHING LIGHTS
                        </Link>
                        <div className='options'>
                            <Link className='option' to='/shop'>
                                SHOP
                            </Link>
                            <Link className='option' to='/shop'>
                                CONTACT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        );
    }



}



export default Header;