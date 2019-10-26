import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './footer.styles.scss';

import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";


const Footer  = ({total}) => (
    <div className='footer'>
        <div className='options'>
            <Link className='option' to='/checkout'>
                Total: $ {total}
            </Link>
        </div>
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Footer);