import React from "react";
import posts from "../data/posts.json";
import {Link} from "react-router-dom";
import BlogPage from "../pages/BlogPage";

function BlogPosts() {
    console.log(posts);

    const blogList = posts.map((post) => {
        return <p>{post.id} Titel: <Link to={`/blog/${post.id}`}>{post.title}</Link></p>
    });

    return (
        <>
            <h1>Blog Posts</h1>
            {blogList}
        </>
    )
}

export default BlogPosts