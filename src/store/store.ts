import { legacy_createStore as createStore } from "redux";
import employeeReducer from "./employee/employeeReducer";
import { useDispatch } from "react-redux";

export const store  = createStore(employeeReducer);

// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch: () => AppDispatch = useDispatch;