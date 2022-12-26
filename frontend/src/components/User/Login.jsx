import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Auth from "./Auth";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Auth>
      <div className="bg-white border flex flex-col gap-2 pt-10">
        <img
          draggable="false"
          className="mx-auto h-30 w-36 object-contain"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <form className="flex flex-col justify-center items-center gap-3 m-3 md:m-8">
          <TextField
            label="Email/Username"
            type="text"
            required
            size="small"
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            required
            size="small"
            fullWidth
          />
          <button className="bg-primary-blue font-medium py-2 rounded text-white w-full">
            Log In
          </button>
          <span>OR</span>
          <span className="text-sm font-medium text-blue-800">Forgot password?</span>
        </form>
      </div>

      <div className="bg-white border p-5 text-center">
        <span>Don't have an account?</span>
        <span className="text-blue-500"> Sign up</span>
      </div>
    </Auth>
  );
};

export default Login;
