import React, { useContext } from "react";
import { VehicleContext } from "../../contexts/VehicleContext";
import "./MyFleet.scss";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";

function MyFleet() {
  const { vehicles } = useContext(VehicleContext);

  return (
    <div className="container-fluid page-section">
      {vehicles.length ? (
        vehicles.map((vehicle) => {
          return (
            <div
              key={vehicle.id}
              className="driver-card-container ml-auto mr-auto"
            >
              <div className="driver-working-status"></div>
              <div className="driver-vehicle-bar">
                <p className="driver-vehicle">
                  <b>{vehicle.brand}</b>
                  &nbsp;{vehicle.model}
                </p>
                <p><BiIcons.BiGasPump /> {vehicle.fuelType.toUpperCase()}</p>
              </div>
              <div className="driver-vehicle-details-bar">
                <div className="driver-vehicle-details-range">
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiPathDistance />
                    <span className="driver-vehicle-tag">
                      Max. dist. {vehicle.maxRange}
                    </span>
                  </div>
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiOak />
                    <span className="driver-vehicle-tag">
                      Max. dist. {vehicle.maxRange}
                    </span>
                  </div>
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiLBrick />
                    <span className="driver-vehicle-tag">
                      Max. dist. {vehicle.maxRange}
                    </span>
                  </div>
                </div>
                <div className="driver-vehicle-details-finance">
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiPackedPlanks />
                    <span>Some data</span>
                  </div>
                  <div className="driver-vehicle-details-text">
                    <GiIcons.Gi3DHammer />
                    <span>Some data</span>
                  </div>
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiBackForth />
                    <span>Some data</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="empty-container">
          <h1>No cars added yet.</h1>
        </div>
      )}
    </div>
  );
}

export default MyFleet;
