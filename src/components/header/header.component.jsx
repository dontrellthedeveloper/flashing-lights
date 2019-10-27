import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {auth} from '../../firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

import {ReactComponent as Logo2} from "../../assets/flashing-lights12.svg";

import {ReactComponent as Logo3} from "../../assets/telegram.svg";
import {ReactComponent as Logo4} from "../../assets/rss.svg";
import {ReactComponent as Logo5} from "../../assets/facebook.svg";
import {ReactComponent as Logo6} from "../../assets/instagram.svg";
import {ReactComponent as Logo7} from "../../assets/twitter.svg";
import {ReactComponent as Logo8} from "../../assets/youtube.svg";
import {ReactComponent as Logo9} from "../../assets/pinterest.svg";
import {ReactComponent as Logo10} from "../../assets/tumblr.svg";


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
        const {currentUser, hidden} = this.props;
        return (
            <div className='nav-wrapper'>
                <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
                    <div className='nav_text'>
                        <div className='header'>

                            <div to='/' className='logo-container'>
                                <Logo2 className='logo' />
                                <Link to='/' className='logo-container4'>
                                    <Logo5 className='logo5' />
                                    <Logo6 className='logo6' />
                                    <Logo7 className='logo7' />
                                    <Logo8 className='logo8' />
                                </Link>
                            </div>
                            <Link className='title-name' to='/'>
                                FLASHING LIGHTS
                            </Link>
                            <div className='options2'>
                                APPAREL
                            </div>
                            <div className='options'>
                                <Link className='option' to='/shop'>
                                    SHOP
                                </Link>
                                <Link className='option' to='/shop'>
                                    CONTACT
                                </Link>
                                {
                                    currentUser ? (
                                        <div className='option' onClick={() => auth.signOut()}>
                                            SIGN OUT
                                        </div>
                                    ) : (
                                        <Link className='option' to='/signin'>
                                            SIGN IN
                                        </Link>
                                    )
                                }
                                <CartIcon />
                                <Link to='/' className='logo-container3'>
                                    <Logo3 className='logo3' />
                                    <Logo4 className='logo4' />
                                    <Logo9 className='logo4' />
                                    <Logo10 className='logo4' />
                                </Link>
                            </div>
                            {hidden ? null : <CartDropdown />}
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});



export default connect(mapStateToProps)(Header);