import React from "react";
import Sidebar from "./Sidebar";
import Message from "./Message";

const Inbox = () => {
    return (
        <>
            <div className="mt-14 sm:mt-[4.7rem] pb-4 rounded h-[90vh] xl:w-2/3 mx-auto sm:pr-14 sm:pl-8">
                <div className="flex border h-full rounded w-full bg-white">
                    {/* Sidebar */}
                    < Sidebar />

                    {/* <div className="flex flex-col items-center justify-center w-full sm:w-4/6 gap-2">
                        <div className="w-24 h-24 flex items-center p-2 justify-center border-2 border-black rounded-full">
                                <img draggable="false" loading="lazy" className="w-full h-full rotate-12 object-contain" src="https://static.thenounproject.com/png/172101-200.png" alt="message" />
                        </div>
                        <h2 className="text-2xl font-thin">Your Messages</h2>
                        <p className="text-gray-400 text-sm">Send private photos and messages to a friend or group.</p>
                        <button className="bg-primary-blue rounded px-2.5 mt-2 py-1.5 text-white text-sm font-medium hover:drop-shadow-lg">Send Message</button>
                    </div> */}

                    <div className="flex flex-col justify-between w-full sm:w-4/6">
                        {/* header */}
                        <div className="flex py-3 px-6 border-b items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <div className="w-8 h-8 relative">
                                    <img className="rounded-full w-full h-full object-cover" src="https://media1.popsugar-assets.com/files/thumbor/uTHhSxK0UrK36Icb2Oj9XY4rWiU/0x112:3229x3341/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/03/697/n/1922398/f2ed98e15e8759cf135536.52531494_/i/Idris-Elba.jpg" alt="" />
                                </div>
                                <span className="font-medium cursor-pointer">idriselba</span>
                            </div>
                            <svg className="cursor-pointer" aria-label="View Thread Details" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                        </div>


                        {/* messages */}
                        <div className="w-full flex-1 flex flex-col gap-1.5 overflow-y-auto overflow-x-hidden p-4">
                            <>
                            <Message />
                            </>
                        </div>

                        {/* message input */}
                        <form action="" className="flex items-center gap-3 justify-between border rounded-full py-2.5 px-4 m-5 relative">
                            <span className="cursor-pointer hover:opacity-60">
                            <svg aria-label="Emoji" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                            </span>

                            <input className="flex-1 outline-none text-sm" type="text" placeholder="Message..." required />
                            <button className="text-primary-blue font-medium text-sm">Send</button>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}; 

export default Inbox;