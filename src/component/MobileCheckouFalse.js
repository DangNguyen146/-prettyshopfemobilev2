import React, { Component } from "react";
import axios from "axios";

class SuccessPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }


  render() {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <h1>Pay fail, try agani</h1>
          <p>Thanks!</p>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

export default SuccessPayment;
