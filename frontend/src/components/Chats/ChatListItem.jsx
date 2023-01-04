import React from "react";

const ChatListItem = () => {
    return (
        <div className="flex gap-3 items-center py-2 px-3 cursor-pointer hover:bg-gray-100">
            <div className="w-14 h-14 relative">
                <img className="w-full h-full rounded-full object-cover" src="https://media1.popsugar-assets.com/files/thumbor/uTHhSxK0UrK36Icb2Oj9XY4rWiU/0x112:3229x3341/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/03/697/n/1922398/f2ed98e15e8759cf135536.52531494_/i/Idris-Elba.jpg" alt="" />
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
            </div>
            <div className="flex flex-col items-start">
                <span className="text-sm">idriselba</span>
                <span className="text-sm truncate w-36 text-gray-400">Hey man thinking of a collaboration</span>
            </div>
        </div>
    )
}; 

export default ChatListItem;