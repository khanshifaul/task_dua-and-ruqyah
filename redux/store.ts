import { combineReducers, createStore } from "redux";
import { navigationReducer } from "./reducers/navigationReducer";

const rootReducer = combineReducers({
  navigation: navigationReducer,
});

export const store = createStore(rootReducer);
