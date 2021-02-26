import React, { Component } from "react";

export default class AddCarInputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicleBrand: "",
      vehicleModel: "",
    };
  }

  handleBrandChange = (e) => {
    this.setState({
      vehicleBrand: e.target.value,
    });
  };

  handleModelChange = (e) => {
    this.setState({
      vehicleModel: e.target.value,
    });
  };

  render() {
    return (
      <>
        <label>Car brand name</label>
        <input
          type="text"
          value={this.state.vehicleBrand}
          onChange={this.handleBrandChange}
        />
        <label>Car model name</label>
        <input
          type="text"
          value={this.state.vehicleModel}
          onChange={this.handleModelChange}
        />
      </>
    );
  }
}
