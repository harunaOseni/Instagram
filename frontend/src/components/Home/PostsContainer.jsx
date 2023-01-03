import React from "react";
import StoriesContainer from "./StoriesContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import PostItem from "./PostItem";

const PostContainer = () => {
    return (
        <div className="flex flex-col w-full lg:w-2/3 sm:mt-6 sm:px-8 mb-8">
            <StoriesContainer />
            <div className="w-full mt-1 sm:mt-6 flex flex-col space-y-4">
                <PostItem />
            </div>
        </div>
    )
}; 

export default PostContainer;