import React from "react";
import posts from "../data/posts.json";
import {useParams} from "react-router-dom";

function BlogPage() {
    let {id} = useParams();
    const post = id - 1;
    console.log(posts[post].title);
    console.log(posts[post].content);
    return (
        <>
            <h5>Dit is post {id}</h5>
            <h1>{posts[post].title}</h1>
            <p>{posts[post].content}</p>
        </>
    )
}

export default BlogPage