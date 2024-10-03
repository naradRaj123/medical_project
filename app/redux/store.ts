// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION__?: () => (args: any) => any;
//   }
// }

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import authSlice from "./slices/auth-slice";
import patientSlice from "./slices/patient-slice";
import locationSlice from "./slices/location-slice";
import prescriptionSlice from "./slices/prescription-slice";

const rootReducer = combineReducers({
  [myApi.reducerPath]: myApi.reducer,
  auth: authSlice,
  patient: patientSlice,
  location: locationSlice,
  prescription: prescriptionSlice,
});

const isDev = true;

// const devToolsExtension =
//   isDev &&
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
  // devTools: isDev && devToolsExtension, // Pass the devTools option here
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
