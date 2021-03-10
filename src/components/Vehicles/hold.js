<div className="container-fluid page-section text-center">
      {vehicles.length ? (
        <h1 style={{ color: "#FFFFFF" }}>Your garage</h1>
      ) : null}
      <div className="container">
        {vehicles.length ? (
          vehicles.map((vehicle) => {
            return (
              <div key={vehicle.id} className="vehicle-card">
                <div className="edit">
                  <RiIcons.RiEdit2Fill />
                </div>
                <div
                  className="remove"
                  onClick={(id) => {
                    removeVehicle((id = vehicle.id));
                  }}
                >
                  <MdIcons.MdRemoveCircle />
                </div>
                <div className="vehicle-card-img-container">
                  <img
                    src={vehicle.photo}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                  />
                </div>
                <div className="vehicle-card-body">
                  <Row>
                    <Col>
                      <h2>
                        <strong>{vehicle.brand}</strong> {vehicle.model}
                      </h2>
                      <h5>{vehicle.registrationNum}</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span className="vehicle-card-type">
                        Year of production: <strong>{vehicle.prodYear}</strong>
                      </span>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6}>
                      <span className="vehicle-card-type">
                        <FaIcons.FaCar /> {vehicle.bodyType}
                      </span>
                    </Col>
                    <Col sm={6}>
                      <span className="vehicle-card-type">
                        <FaIcons.FaGasPump /> {vehicle.fuelType}
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="details-col" sm={6}>
                      <div>
                        <CgIcons.CgAssign />
                        <span className="ml-2">
                          Tank capacity: {vehicle.tankCapacity} l
                        </span>
                      </div>
                      <div>
                        <RiIcons.RiGasStationLine />
                        <span className="ml-2">
                          Avg. fuel cons.:{vehicle.fuelConsumption} l/100 km
                        </span>
                      </div>
                      <div>
                        <RiIcons.RiPinDistanceFill />
                        <span className="ml-2">
                          Avg. dist. per tank:{" "}
                          {(
                            vehicle.tankCapacity / vehicle.fuelConsumption
                          ).toFixed(0) * 100}{" "}
                          km
                        </span>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <span>
                        <a
                          target="blank"
                          href={`https://www.google.com/search?q=${vehicle.brand}+${vehicle.model}+${vehicle.prodYear}`}
                        >
                          <CgIcons.CgLink />
                        </a>
                      </span>
                    </Col>
                  </Row>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty">
            <h2>No cars added</h2>
            <p>Add now</p>
            <Button
              variant="danger"
              onClick={() => history.push("/fleet-config")}
            >
              Add vehicle
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
