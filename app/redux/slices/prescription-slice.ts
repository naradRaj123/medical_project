import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  advice: null,
  medicine : null,
  scan : null,
  diagnosis: null,
  test: null,
};



const prescriptionsSlice = createSlice({
  name: "prescriptions",
  initialState: initialState,
  reducers: {
    addAdvice: (state, action) => {
      state.advice = action.payload;
    },
    addMedicine: (state, action) => {
        state.medicine = action.payload;
    },
    addScan: (state, action) => {
        state.scan = action.payload;
    },
    addDiagnosis: (state, action) => {
        state.diagnosis = action.payload;
    },
    addTest: (state, action) => {
        state.test = action.payload;
    },
  },
});

export const { addAdvice, addMedicine, addScan, addDiagnosis, addTest } = prescriptionsSlice.actions;

export const selectAdvice = (state) => state.prescriptions.advice;
export const selectPatientDetails=(state)=>state.prescriptions.medicine;

export default prescriptionsSlice.reducer;
