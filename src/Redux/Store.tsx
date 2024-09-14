import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/LoginReducer";
import SignUpReducer from "./reducer/SignUpReducer";


export const store = configureStore({
  reducer: {
    login: loginReducer,
    signUp: SignUpReducer,
   
    
  },
});

export default store;
