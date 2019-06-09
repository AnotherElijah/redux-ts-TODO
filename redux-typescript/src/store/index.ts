import {appReducer, taskReducer} from "./reducers";
import {combineReducers} from "redux";

export const reducers = combineReducers({appReducer: appReducer, taskReducer: taskReducer});

export type StateType = ReturnType<typeof reducers>;