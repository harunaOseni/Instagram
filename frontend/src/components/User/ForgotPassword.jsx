import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Auth from "./Auth";

const ForgotPassword = () => {
  return (
    <Auth>
      <div className="bg-white border flex flex-col gap-2 p-4 pt-10">
        <img
          draggable="false"
          className="mx-auto h-30 w-36 object-contain"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <form
          action=""
          className="flex flex-col justify-center items-center gap-3 m-3 md:m-8"
        >
          <TextField
            label="Email"
            required
            variant="outlined"
            fullWidth
            size="small"
          />
          <button className="bg-primary-blue font-medium py-2 rounded text-white w-full">
            Submit
          </button>
          <span className="text-gray-500 my-3">OR</span>
          <span className="text-sm font-medium text-blue-800">
            Forgot Password
          </span>
        </form>
      </div>

      <div className="bg-white border p-5 text-center">
        <span>
          Don't have an account?
          <span className="text-primary-blue"> Sign up</span>
        </span>
      </div>
    </Auth>
  );
};

export default ForgotPassword;
