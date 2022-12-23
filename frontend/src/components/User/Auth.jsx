import React from "react";
import homepage from "../../assests/images/homepage.webp";

const Auth = ({ children }) => {
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-screen md:w-2/3 py-8 mx-auto">
        <div className="hidden md:block bg-[url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')] my-10 h-full">
          <img
            draggable="false"
            className="mr-[80px] mt-[1.8rem] ml-[155px]"
            src={homepage}
            alt="homepage"
          />
        </div>
        <div className="flex flex-col gap-3 w-full md:w-2/5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Auth;
