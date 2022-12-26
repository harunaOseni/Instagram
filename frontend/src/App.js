import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";

const Login = lazy(() => import("./components/User/Login"));
const SignUp = lazy(() => import("./components/User/SignUp"));

function App() {
  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
