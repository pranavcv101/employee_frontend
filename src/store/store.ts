import { applyMiddleware, legacy_createStore as createStore } from "redux";
import employeeReducer from "./employee/employeeReducer";
import { useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import baseApi from "../api-services/api";

// export const store  = createStore(
//     employeeReducer,
//     undefined,
//     applyMiddleware(logger)
// );
// // export type AppDispatch = typeol f store.dispatch;
// // export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = configureStore({
    reducer: {
        employee : employeeReducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware)=> 
        getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = useSelector<RootState, any>