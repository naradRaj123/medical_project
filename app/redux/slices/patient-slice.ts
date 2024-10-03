import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patient: null,
  patiendDetails : null,
};



const patientSlice = createSlice({
  name: "patient",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.patient = action.payload;
    },
    getPatientDetails:(state,action)=>{
      state.patiendDetails=action.payload;
    },
  },
});

export const { add, getPatientDetails } = patientSlice.actions;

export const selectPatient = (state) => state.patient.patient;
export const selectPatientDetails=(state)=>state.patient.patiendDetails;

export default patientSlice.reducer;
