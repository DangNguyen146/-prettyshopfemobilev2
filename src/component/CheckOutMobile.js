import React, { Component } from 'react';
import axios from 'axios';
import { apiUrl } from "./../config/config";

class MakePayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stripeAPIToken: "pk_test_51N2ZUwGbNfGYxOL2iWVl4sOW60Np5jHOIMGdochH1tTyxvKWJ1nwRdsPGiYSQDCQPOKeaU4DA1jpolRDd6NIvZD800wlKgggv1",
            stripe: '',
            token: this.props.match.params.token,
            sessionId: null,
            checkoutBodyArray: [],
        };
    }

    configureStripe() { }

    getAllItems() {
        axios
            .get(`${apiUrl}cart/?token=${this.state.token}`)
            .then((response) => {
                if (response.status === 200) {
                    let products = response.data;
                    console.log(products);
                    let len = Object.keys(products.cartItems).length;
                    for (let i = 0; i < len; i++)
                        this.setState((prevState) => ({
                            checkoutBodyArray: [
                                ...prevState.checkoutBodyArray,
                                {
                                    imageUrl: products.cartItems[i].product.imageURL,
                                    productName: products.cartItems[i].product.name,
                                    quantity: products.cartItems[i].quantity,
                                    price: products.cartItems[i].product.price,
                                    productId: products.cartItems[i].product.id,
                                    userId: products.cartItems[i].userId,
                                },
                            ],
                        }));

                }
                console.log(this.state.checkoutBodyArray);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    goToCheckout() {
        axios
            .post(
                apiUrl + 'order/create-checkout-session',
                this.state.checkoutBodyArray
            )
            .then((response) => {
                localStorage.setItem('sessionId', response.data.sessionId);
                return response.data;
            })
            .then((session) => {
                return this.state.stripe.redirectToCheckout({
                    sessionId: session.sessionId,
                });
            });
    }

    componentDidMount() {
        this.getAllItems();
        this.setState({
            stripe: window.Stripe(this.state.stripeAPIToken),
        });
    }

    render() {
        return (
            <div className="container text-center bg-dark text-light">
                <h1>You will be redirected to payment page</h1>

                <div className="alert alert-primary w-100 text-center">
                    While making payment use card number 4242424242424242 and enter random
                    cvv(3 digit)
                </div>

                <button
                    className="btn btn-success"
                    id="proceed-to-checkout"
                    onClick={this.goToCheckout.bind(this)}
                >
                    Make payment
                </button>
            </div>
        );
    }
}

export default MakePayment;