import React from "react";
import Sidebar from "./Sidebar";

const Update = ({ children }) => {
    return (
        <>
        <div className="mx-auto my-24 xl:w-2/3 sm-pr-14 sm:pl-8">
            <div className="flex border rounded w-full bg-white">
                <Sidebar />
                { children }
            </div>
        </div>
        </>
    )
};

export default Update;