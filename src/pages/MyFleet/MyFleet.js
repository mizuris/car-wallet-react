import { Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";
import { DriverContext } from "../../contexts/DriverContext";
import "./MyFleet.scss";

function MyFleet() {
  const { drivers } = useContext(DriverContext);
  return drivers.length ? (
    <Container className="page-section driver-details-card">

    </Container>
  ) : (
    <Container>
      <h2>No drivers added yet.</h2>
    </Container>
  );
}

export default MyFleet;
