import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Avatar } from "@mui/material";
import Auth from "./Auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Auth>
      <div className="bg-white border flex flex-col gap-2 pt-10">
        <img
          draggable="false"
          className="mx-auto h-30 w-36 object-contain"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <form
          encType="multipart/form-data"
          className="flex flex-col justify-center items-center gap-3 md:m-8"
        >
          <TextField label="Email" required size="small" />
          <TextField label="Full Name" required size="small" />
          <TextField label="Username" size="small" required />
          <TextField label="Password" required size="small" />
          <div className="flex w-48 justify-between gap-3 items-center">
            <Avatar
              sx={{
                width: 48,
                height: 48,
              }}
            />
            <label>
              <input
                type="file"
                className="block w-full text-sm text-gray-400 file:mr-3 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:cursor-pointer file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
              />
            </label>
          </div>
          <button className="bg-primary-blue font-medium py-2 rounded text-white w-48">
            Sign up
          </button>
          <span className="my-3 text-gray-500">OR</span>
          <span className="text-sm font-medium text-blue-500">
            Forgot password?
          </span>
        </form>
      </div>

      <div className="bg-white border p-5 text-center">
        <span>Don't have an account?</span>{" "}
        <span className="text-primary-blue">Log in</span>
      </div>
    </Auth>
  );
};

export default SignUp;
