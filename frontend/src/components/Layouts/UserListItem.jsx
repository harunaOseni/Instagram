import React, { useState } from "react";

const UserListItem = () => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex space-x-3 ">
        <img
          src="https://media1.popsugar-assets.com/files/thumbor/uTHhSxK0UrK36Icb2Oj9XY4rWiU/0x112:3229x3341/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/03/697/n/1922398/f2ed98e15e8759cf135536.52531494_/i/Idris-Elba.jpg"
          alt=""
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-black text-sm font-semibold hover:underline">idriselba</span>
          <span className="text-gray-400 text-sm">Idris Elba</span>
        </div>
      </div>

      <button className="font-medium bg-primary-blue  text-sm text-white hover:shadow rounded px-7 py-1.5">Follow</button>
    </div>
  );
};

export default UserListItem;
