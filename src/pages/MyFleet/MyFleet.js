import { Container } from "react-bootstrap";
import React, { useContext } from "react";
import { DriverContext } from "../../contexts/DriverContext";
import "./MyFleet.scss";

function MyFleet() {
  const { drivers } = useContext(DriverContext);
  return drivers.length ? (
    <Container className="d-flex align-items-center page-section">
      <ul>
        {drivers.map((driver) => {
          return (
            <>
              <li key={driver.id} className="drivers-list">
                {driver.name}
              </li>
              <li key={driver.id} className="drivers-list">
                {driver.surname}
              </li>
              <li key={driver.id} className="drivers-list">
                {driver.vehicle.brand}
              </li>
              <li key={driver.id} className="drivers-list">
                {driver.vehicle.model}
              </li>
            </>
          );
        })}
      </ul>
    </Container>
  ) : (
    <Container>
      <h2>No drivers added yet.</h2>
    </Container>
  );
}

export default MyFleet;
