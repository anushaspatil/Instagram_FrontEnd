import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileUser from "./pages/Profileuser";
import Navbar from "./components/Navbar";
// import ProtectedLayout from "./components/routes/ProtectedLayout";
// import NextSignup from "./pages/NextSignup"

const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <ToastContainer />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/auth/signup' element={<Signup />} />
    <Route path="/dashboard"  element={<Dashboard />}/>
    <Route path="/profileuser"  element={<ProfileUser />}/>
    <Route path="/navbar"  element={<Navbar />}/>


    {/* <Route path='/dashboard' element={
     < ProtectedLayout>
          <Dashboard />
     </ProtectedLayout>
     } /> */}
    {/* <Route path="/auth/signup/info" element={<NextSignup />} />  */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

