import React from "react";
import PostContainer from "./PostsContainer";
import Sidebar from "./Sidebar/Sidebar";


const Home = () => {
    return (
        <>
            <div className="flex h-full md:w-4/5 lg:w-4/6 mt-14 mx-auto">
                <PostContainer />
                < Sidebar />
            </div>
        </>
    )
};

export default Home;