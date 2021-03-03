import React from "react";
import VehicleList from "../../components/Vehicles/VehicleList";
import { connect } from "react-redux";

function MyFleet(props) {
  return (
    <div className="container d-flex align-items-center page-section">
      <h3>No cars added yet.</h3>
      <VehicleList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    vehicle: state.vehicles,
  };
};

export default connect(mapStateToProps)(MyFleet);
