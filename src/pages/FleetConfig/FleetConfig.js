import React from "react";
import { Link } from "react-router-dom";

export default function FleetConfig() {
  return (
    <div className="container d-flex align-items-center page-section">
      <Link to="/vehicle-add">
        <button className="btn btn-danger">Add vehicle</button>
      </Link>
    </div>
  );
}
