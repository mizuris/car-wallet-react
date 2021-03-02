import { combineReducers } from "redux";
import vehicleReducer from "./Wallet/VehiclesReducers";

const rootReducer = combineReducers({
    wallet: vehicleReducer,
});

export default rootReducer;