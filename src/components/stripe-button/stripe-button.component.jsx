import React from 'react';
import StripeCheckout from "react-stripe-checkout";

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_EbIR9f6HtiLls2gU3eHb1Nf200EIB6qUMF';

  const onToken = token => {
      console.log(token);
      alert('Payment Successful');
  };

  return (
      <StripeCheckout
        label='Pay Now'
        name='Flashing Lights Apparel'
        billingAddress
        shippingAddress
        image='https://i.ibb.co/Y2x94KZ/flashing-lights-logo-purple.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
  )
};

export default StripeCheckoutButton;