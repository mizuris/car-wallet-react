import React from "react";

import { connect } from "react-redux";
import { addVehicle } from "../../../redux/Wallet/VehiclesActions";

function SingleVehicle({ current, addVehicle }) {
  return (
    <div className="container d-flex align-items-center page-section">
      <div>
        <p>Brand: {current.brand}</p>
        <p>Model: {current.model}</p>
        <p>Driver: {current.driver}</p>
      </div>
      <div>
        <button onClick={() => addVehicle(current)}>Add vehicle</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.wallet.currentVehicle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addVehicle: (vehicle) => dispatch(addVehicle(vehicle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleVehicle);
