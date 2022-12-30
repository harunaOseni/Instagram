import React from "react";
import {
  profileIcon,
  savedIcon,
  settingsIcon,
  switchAccountIcon,
} from "./SvgIcons";
import { toast } from "react-toastify";
import { ClickAwayListener } from "@mui/material";

const ProfileDetails = () => {
  const tabs = [
    {
      title: "Profile",
      icon: profileIcon,
      redirect: `/kevin`,
    },
    {
      title: "Saved",
      icon: savedIcon,
      redirect: `/kevin`,
    },
    {
      title: "Settings",
      icon: settingsIcon,
      redirect: "/accounts/edit",
    },
    {
      title: "Switch Account",
      icon: switchAccountIcon,
      redirect: "/",
    },
  ];

  return (
    <ClickAwayListener>
      <div className="absolute w-56 bg-white rounded drop-shadow top-14  right-0 md:right-72 md:top-14 border">
        <div className="absolute right-5 -top-2 rotate-45 h-4 w-4 bg-white rounded-sm border-l border-t"></div>

        <div className="flex flex-col w-full overflow-hidden">
          {tabs.map((tab, index) => (
            <span
              key={index}
              className="flex items-center gap-3 p-2.5 text-sm pl-4 cursor-pointer hover:bg-gray-50"
            >
              {tab.icon}
              {tab.title}
            </span>
          ))}
          <button className="flex rounded-b border-t-2 items-center gap-3 p-2.5 text-sm pl-4 cursor-pointer hover:bg-gray-50">
            Logout
          </button>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default ProfileDetails;
