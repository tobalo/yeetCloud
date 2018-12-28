import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {

    render(){

        return(
            <StripeCheckout 
                name="Yeetelligence"
                description="$10 for one mass market research survey"
                amount={1000}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}
export default Payments;