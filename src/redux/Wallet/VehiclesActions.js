import * as actionTypes from "./VehiclesTypes";

export const addVehicle = (vehicle) => {
  return {
    type: actionTypes.ADD_VEHICLE,
    payload: vehicle,
  };
};

export const removeVehicle = (vehicleId) => {
  return {
    type: actionTypes.REMOVE_VEHICLE,
    payload: {
      id: vehicleId,
    },
  };
};

export const updateVehicle = (vehicle) => {
  return {
    type: actionTypes.UPDATE_VEHICLE,
    payload: {
      id: vehicle.id,
      brand: vehicle.brand,
      model: vehicle.model,
      driver: vehicle.driver,
    },
  };
};

export const loadVehicle = (vehicle) => {
  return {
    type: actionTypes.LOAD_CURRENT_VEHICLE,
    payload: vehicle,
  };
};
