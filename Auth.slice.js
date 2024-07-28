import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// const userFromLocalStorage = localStorage.getItem('user');

const initialState = {
  loading : false,
  currentUser: null,
  // currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,

}

const Base_URL = "http://localhost:8088"

export const registerUser = createAsyncThunk('user/register' , async(userObj) => {
  try{
  const response = await axios.post(`${Base_URL}/users/createUser`, userObj);
  console.log(response.data);
  toast.success(response?.data?.msg);
  return response?.data?.user;
  }
  catch(err){
    console.log(err);
  }
} )

const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers : {
      logout : (state)=>{
        localStorage.removeItem('user')
        state.currentUser = null;
      }
  },
  extraReducers :(builder) => { 
    builder.addCase(registerUser.pending, (state)=>{
      state.loading = true;
    })
    builder.addCase(registerUser.fulfilled, (state,action)=>{
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.loading = false;
      state.currentUser = action.payload;
  })
}
});

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;