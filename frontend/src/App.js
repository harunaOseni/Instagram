import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import Header from "./components/Navbar/Header";
import UpdateProfile from "./components/User/Update/UpdateProfile";
import UpdatePassword from "./components/User/Update/UpdatePassword";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


const Home = lazy(() => import("./components/Home/Home"));
const Login = lazy(() => import("./components/User/Login"));
const SignUp = lazy(() => import("./components/User/SignUp"));
const ForgotPassword = lazy(() => import("./components/User/ForgotPassword"));
const ResetPassword = lazy(() => import("./components/User/ResetPassword"));
const Profile = lazy(() => import("./components/User/Profile"));
const Update = lazy(() => import("./components/User/Update/Update"));
const Inbox = lazy(() => import("./components/Chats/Inbox"));
const NotFound = lazy(() => import("./components/Errors/NotFound"));

function App() {
  return (
    <>
      {/* <Header /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />
            <Route path="/:username" element={<Profile />} />
            <Route path="/accounts/edit" element={
              <Update>
                <UpdateProfile />
              </Update>
            }
            />
            <Route path="/accounts/password/change" element={
              <Update>
                <UpdatePassword />
              </Update>
            }
            />
            <Route path="/direct/inbox" element={<Inbox />} />
            <Route path="/direct/t/:chatId/:userId" element={<Inbox />} />
            <Route path="/error" element={<NotFound />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
