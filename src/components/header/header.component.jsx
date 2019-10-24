import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {ReactComponent as Logo2} from "../../assets/flashing-lights12.svg";


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
            const isTop = window.scrollY < 0;
            if(isTop !== true) {
                this.setState({scrolled: true});
            } else {
                this.setState({scrolled: false})
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }


    render()  {
        return (
            <div className='nav-wrapper'>
                <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
                    <div className='nav_text'>
                        <div className='header'>
                            <Link to='/' className='logo-container'>
                                <Logo2 className='logo' />
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
                                {
                                    this.props.currentUser ? (
                                        <div className='option' onClick={() => auth.signOut()}>
                                            SIGN OUT
                                        </div>
                                    ) : (
                                        <Link className='option' to='/signin'>
                                            SIGN IN
                                        </Link>
                                    )
                                }
                                <CartIcon/>
                            </div>
                            {this.props.hidden ? null : <CartDropdown />}
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});



export default connect(mapStateToProps)(Header);