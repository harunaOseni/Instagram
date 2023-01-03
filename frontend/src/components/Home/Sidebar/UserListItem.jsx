import React from "react";

const UserListItem = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex space-x-3 items-center">
                <img draggable="false" className="w-9 h-9 rounded-full object-cover" src="https://media1.popsugar-assets.com/files/thumbor/uTHhSxK0UrK36Icb2Oj9XY4rWiU/0x112:3229x3341/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/03/697/n/1922398/f2ed98e15e8759cf135536.52531494_/i/Idris-Elba.jpg" alt="" />
                <div className="flex flex-col gap-0.5">
                    <span className="text-black text-sm font-semibold hover:underline">idriselba</span>
                    <span className="text-gray-400 text-xs">New to Instagram</span>
                </div>
                <button className="text-xs font-medium text-blue-500">Follow</button>
            </div>
        </div>
    )
}; 

export default UserListItem;