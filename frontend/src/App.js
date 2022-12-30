import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import Header from "./components/Navbar/Header";

const Login = lazy(() => import("./components/User/Login"));
const SignUp = lazy(() => import("./components/User/SignUp"));
const ForgotPassword = lazy(() => import("./components/User/ForgotPassword"));
const ResetPassword = lazy(() => import("./components/User/ResetPassword"));
const Profile = lazy(() => import("./components/User/Profile"));

function App() {
  return (
    <>
      <Header />
      <Profile />
    </>
  );
}

export default App;
