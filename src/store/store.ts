import { applyMiddleware, legacy_createStore as createStore } from "redux";
import employeeReducer from "./employee/employeeReducer";
import { useDispatch } from "react-redux";
import logger from "redux-logger";

export const store  = createStore(
    employeeReducer,
    undefined,
    applyMiddleware(logger)
);


// export type AppDispatch = typeol f store.dispatch;





// export const useAppDispatch: () => AppDispatch = useDispatch;