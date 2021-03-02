import React from "react";
import VehicleList from "../../components/Vehicles/VehicleList";
import { connect } from "react-redux";

function MyFleet() {
  return (
    <div className="container d-flex align-items-center page-section">
      <h3>No cars added yet.</h3>
      <VehicleList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.wallet.currentVehicle,
  };
};

export default connect(mapStateToProps)(MyFleet);
