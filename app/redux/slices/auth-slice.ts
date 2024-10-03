import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  isStudent: false,
  isAdmin: false,
  // we can add more roles here...
};

const loadState = () => {
  try {
    if(typeof window !== "undefined"){
    const serializedState = localStorage.getItem("authState");
    return serializedState ? JSON.parse(serializedState) : undefined;
    }
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    if(typeof window !== "undefined"){
      localStorage.setItem("authState", serializedState);
    }
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadState() || initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.bearerToken = action.payload?.result?.token;
      state.userId = action.payload?.result?._id; 
      state.isStudent = action.payload?.role === "REGULAR";
      state.isAdmin = action.payload?.role === "ADMIN";
      saveState(state);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.bearerToken = null;
      state.userId = null;
      state.isStudent = false;
      state.isAdmin = false;
      saveState(state);
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectBearerToken = (state) => state.auth.bearerToken;
export const selectUserId = (state) => state.auth.userId;
export const selectIsStudent = (state) => state.auth.isStudent;
export const selectIsAdmin = (state) => state.auth.isAdmin;

export default authSlice.reducer;
