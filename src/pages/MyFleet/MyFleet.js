import React, { useContext } from "react";
import { VehicleContext } from "../../contexts/VehicleContext";
import "./MyFleet.scss";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";

function MyFleet() {
  const { vehicles } = useContext(VehicleContext);
  console.log(vehicles);
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
                <p>
                  <BiIcons.BiGasPump /> {vehicle.fuelType}
                </p>
              </div>
              <div className="driver-vehicle-details-bar">
                <div className="driver-vehicle-details-range">
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiPathDistance />
                    <span className="driver-vehicle-tag">
                      Tank cap. {vehicle.tankCapacity}
                    </span>
                  </div>
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiOak />
                    <span className="driver-vehicle-tag">
                      Fuel consumption {vehicle.fuelConsumption}
                    </span>
                  </div>
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiLBrick />
                    <span className="driver-vehicle-tag">
                      Average dist.{" "}
                      {(vehicle.tankCapacity / vehicle.fuelConsumption) * 100}
                    </span>
                  </div>
                </div>
                <div className="driver-vehicle-details-finance">
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiPackedPlanks />
                    <span>Reg num {vehicle.registrationNum}</span>
                  </div>
                  <div className="driver-vehicle-details-text">
                    <GiIcons.Gi3DHammer />
                    <span>Body type {vehicle.bodyType}</span>
                  </div>
                  <div className="driver-vehicle-details-text">
                    <GiIcons.GiBackForth />
                    <span>Prod year {vehicle.prodYear}</span>
                  </div>
                </div>
              </div>
              {vehicle.photo && (
                <img
                  style={{ maxWidth: "300px" }}
                  src={vehicle.photo}
                  alt="#"
                />
              )}
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
