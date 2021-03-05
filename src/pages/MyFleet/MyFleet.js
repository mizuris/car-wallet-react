import React, { useContext } from "react";
import { DriverContext } from "../../contexts/DriverContext";
import "./MyFleet.scss";
import * as GiIcons from "react-icons/gi";

function MyFleet() {
  const { drivers } = useContext(DriverContext);

  return (
    <div className="container-fluid page-section">
      {drivers.length ? (
        drivers.map((driver) => {
          return (
            <div
              key={driver.id}
              className="driver-card-container ml-auto mr-auto"
            >
              <div className="driver-working-status"></div>
              <div className="driver-name-bar">
                <p className="driver-name">
                  {driver.name} <b>{driver.surname}</b>
                </p>
              </div>
              <div className="driver-vehicle-bar">
                <p className="driver-vehicle">
                  <b>{driver.vehicle.brand}</b>
                  &nbsp;{driver.vehicle.model}
                </p>
              </div>
              <div className="driver-vehicle-details-bar">
                <div className="driver-vehicle-details-range">
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiPathDistance />
                    <span className="driver-vehicle-tag">
                      Max. dist. {driver.vehicle.maxRange}
                    </span>
                  </div>
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiOak />
                    <span className="driver-vehicle-tag">
                      Max. dist. {driver.vehicle.maxRange}
                    </span>
                  </div>
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiLBrick />
                    <span className="driver-vehicle-tag">
                      Max. dist. {driver.vehicle.maxRange}
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
