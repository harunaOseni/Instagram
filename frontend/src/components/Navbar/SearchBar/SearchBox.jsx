import axios from "axios";
import React, { useState, useEffect } from "react";
import { searchIcon } from "../SvgIcons";

const SearchBox = () => {
  return (
    <div className="hidden sm:flex items-center gap-3 pl-4 ml-36 w-64 py-2 bg-[#efefef] rounded-lg relative">
      {searchIcon}
      <input
        type="search"
        className="bg-transparent text-sm border-none outline-none flex-1 pr-3"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
