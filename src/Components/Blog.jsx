import { useEffect } from "react";
import { useState } from "react";
import Blog1 from "./Blog1";


const Blog = ({handleAddBookMark}) => {

    const [blogs , setBlogs]= useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then (data=> setBlogs(data))

    }, [])


    return (
        <div className="md:w-2/3">
            <h1>blogs: {blogs.length}</h1>
            {
                blogs.map(blog=><Blog1 key={blog.id} handleAddBookMark={handleAddBookMark} blog={blog}></Blog1>)
            }
            
        </div>
    );
};

export default Blog;