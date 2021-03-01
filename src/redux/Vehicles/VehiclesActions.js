import * as actionTypes from "./VehiclesTypes";

export const addVehicle = (vehicleId) => {
  return {
    type: actionTypes.ADD_VEHICLE,
    payload: {
      id: vehicleId,
    },
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

export const updateVehicle = (vehicleBrand, vehicleModel, vehicleDriver) => {
  return {
    type: actionTypes.UPDATE_VEHICLE,
    payload: {
      brand: vehicleBrand,
      model: vehicleModel,
      driver: vehicleDriver,
    },
  };
};

export const loadVehicle = (vehicle) => {
  return {
    type: actionTypes.LOAD_CURRENT_VEHICLE,
    payload: vehicle,
  };
};
