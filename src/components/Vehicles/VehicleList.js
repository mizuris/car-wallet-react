import React from "react";
import Vehicle from "./Vehicle/Vehicle";

import { connect } from "react-redux";

function VehicleList({ vehiclesData }) {
  return (
    <div>
      {vehiclesData.map((vehicle) => (
        <Vehicle key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    vehiclesData: state.wallet.vehicles,
  };
};

export default connect(mapStateToProps)(VehicleList);
