import * as actionTypes from "./VehiclesTypes";

const INITIAL_STATE = {
  vehicles: [
    {
      id: 1,
      brand: "Honda",
      model: "Accord",
      driver: "Piotr",
    },
    {
      id: 2,
      brand: "Fiat",
      model: "Bravo",
      driver: "Pałka",
    },
  ],
  currentVehicle: null,
};

const vehicleReducer = (state = INITIAL_STATE, action) => {
  switch (action.actionTypes) {
    case actionTypes.ADD_VEHICLE:
      const vehicle = action.payload;
      return {
        ...state,
        vehicles: state.vehicles.push(vehicle),
      };
    case actionTypes.REMOVE_VEHICLE:
      return {
        ...state,
        vehicles: state.vehicles.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case actionTypes.UPDATE_VEHICLE:
      return {
        ...state,
      };
    case actionTypes.LOAD_CURRENT_VEHICLE:
      return {
        ...state,
        currentVehicle: action.payload,
      };
    default:
      return state;
  }
};

export default vehicleReducer;
