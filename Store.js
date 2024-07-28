import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../redux/featureSlice/Auth.slice"

const Store = configureStore({
  reducer: {
    auth : authReducer,
  },
})

export default Store;