import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import Header from "./components/Navbar/Header";
import UpdateProfile from "./components/User/Update/UpdateProfile";
import UpdatePassword from "./components/User/Update/UpdatePassword";

const Home = lazy(() => import("./components/Home/Home"));
const Login = lazy(() => import("./components/User/Login"));
const SignUp = lazy(() => import("./components/User/SignUp"));
const ForgotPassword = lazy(() => import("./components/User/ForgotPassword"));
const ResetPassword = lazy(() => import("./components/User/ResetPassword"));
const Profile = lazy(() => import("./components/User/Profile"));
const Update = lazy(() => import("./components/User/Update/Update"));
const Inbox = lazy(() => import("./components/Chats/Inbox"));

function App() {
  return (
    <>
      <Header />
      {/* <Update>
        <UpdatePassword />
      </Update> */}
      <Inbox />
    </>
  );
}

export default App;
