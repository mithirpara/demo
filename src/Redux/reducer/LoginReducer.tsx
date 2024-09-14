import { createSlice } from "@reduxjs/toolkit";

export interface loginState {
  email: string;
  password: any;
  isHidePassword: boolean;
  isCheckbox: boolean;
  isLoading: boolean;
}

const initialState: loginState = {
  email: "test@email.com",
  password: "1",
  isHidePassword: true,
  isCheckbox: true,
  isLoading: false,
};

export const counterSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsHidePassword: (state, action) => {
      state.isHidePassword = action.payload;
    },
    setIsCheckbox: (state, action) => {
      state.isCheckbox = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setEmail,
  setPassword,
  setIsLoading,
  setIsHidePassword,
  setIsCheckbox,
} = counterSlice.actions;

export default counterSlice.reducer;
