import React, { Component } from "react";
import axios from "axios";

class SuccessPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      sessionId: null,
    };
  }

  componentDidMount() {
    this.setState({
      token: localStorage.getItem("token"),
      sessionId: localStorage.getItem("sessionId"),
    });
    this.saveOrder();
  }

  saveOrder() {
    axios
      .post(`${this.props.baseURL}order/add?token=${this.state.token}&sessionId=${this.state.sessionId}`)
      .then(() => {
        window.location.href = "/order";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <h1>Pay success, please back home</h1>
          <p>Thanks!</p>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

export default SuccessPayment;
