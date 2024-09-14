import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface signUpState {
  fullName: string;
  email: string;
  contactNo: any;
  password: any;
  confirmPassword: any;
  isHidePassword: boolean;
  isHideConfirmPassword: boolean;
  countryCode:string;
  isOpenCountryPicker:boolean
  isLoading: boolean;
}

const initialState: signUpState = {
  fullName: "",
  email: "",
  contactNo: "",
  password: "",
  confirmPassword: "",
  isHidePassword: true,
  isHideConfirmPassword: true,
  isLoading: false,
  countryCode:"+91",
  isOpenCountryPicker: false
};

export const counterSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setContactNo: (state, action) => {
      state.contactNo = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setIsHidePassword: (state, action) => {
      state.isHidePassword = action.payload;
    },
    setIsHideConfirmPassword: (state, action) => {
      state.isHideConfirmPassword = action.payload;
    },
    setCountryCode: (state, action) => {
      state.countryCode = action.payload;
    },
    setIsOpenCountryPicker: (state, action) => {
      state.isOpenCountryPicker = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setFullName,
  setEmail,
  setContactNo,
  setPassword,
  setConfirmPassword,
  setIsHidePassword,
  setIsHideConfirmPassword,
  setIsLoading,
  setCountryCode,
  setIsOpenCountryPicker
} = counterSlice.actions;

export default counterSlice.reducer;
