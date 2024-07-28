import { useEffect, useState } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
    const [auth, setAuth] = useState(!!localStorage.getItem("user"));

  useEffect(() => {
    setAuth(!!localStorage.getItem("user")) 
   }, []);

  return auth ? <Outlet /> : <Navigate to="/Dashboard" /> ;
}


export default ProtectedLayout;