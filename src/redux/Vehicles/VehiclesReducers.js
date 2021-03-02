import * as actionTypes from "./VehiclesTypes";

const INITIAL_STATE = {
  vehicleList: [],
  vehicle: {
    id: "",
    brand: "",
    model: "",
    driver: "",
  },
  currentVehicle: null,
};

const vehicleReducer = (state, action) => {
  switch (action.actionTypes) {
    case actionTypes.ADD_VEHICLE:
      return {};
    case actionTypes.REMOVE_VEHICLE:
      return {};
    case actionTypes.UPDATE_VEHICLE:
      return {};
    case actionTypes.LOAD_CURRENT_VEHICLE:
      return {};
    default:
      return state;
  }
};

export default vehicleReducer;
