import React, { Component } from "react";
import axios from "axios";

class SuccessPayment extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <h1>Pay fail, please back home</h1>
          <p>Thanks!</p>
        </div>
      </div>
    );
  }
}

export default SuccessPayment;
