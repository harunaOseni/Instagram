import React, { useEffect } from "react";
import { toast } from "react-toastify";
import PostItem from "./PostItem";

const PostContainer = () => {
    return (
        <div className="grid grid-cols-3 gap-1 sm:gap-8 my-1 mb-8">
            <PostItem />
        </div>
    )
}

export default PostContainer;