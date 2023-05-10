import React, { Component } from 'react';


class MakePayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stripeAPIToken: "pk_test_51N2ZUwGbNfGYxOL2iWVl4sOW60Np5jHOIMGdochH1tTyxvKWJ1nwRdsPGiYSQDCQPOKeaU4DA1jpolRDd6NIvZD800wlKgggv1",
            stripe: '',
            sessionId: this.props.match.params.sessionId,
            checkoutBodyArray: [],
            loading: false
        };
    }

    configureStripe() { }


    goToCheckout() {
        return this.state.stripe.redirectToCheckout({
            sessionId: this.state.sessionId,
        });
    }

    componentDidMount() {
        this.setState({
            stripe: window.Stripe(this.state.stripeAPIToken),
        });
    }

    render() {
        return (
            <div className="container text-center ">
                <h1>You will be redirected to payment page</h1>

                <div className="alert alert-primary w-100 text-center">
                    While making payment use card number 4242424242424242 and enter random
                    cvv(3 digit)
                </div>

                <button
                    className="btn btn-success"
                    id="proceed-to-checkout"
                    onClick={this.goToCheckout.bind(this)}
                    disabled={this.state.loading}
                >
                    {this.state.loading ? (
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        'Make payment'
                    )}

                </button>

            </div>
        );
    }
}

export default MakePayment;
