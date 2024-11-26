import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Blog from "../Blog/Blog";
import { Helmet } from "react-helmet";

const Blogs = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('./blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);

    return (
        <div className=" bg-gray-100 pb-16">
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <NavBar></NavBar>
            {/* Header Section */}
            <div className="text-center z-1 bg-purple-600 mb-8 pt-7">
                <h1 className="text-3xl font-bold text-white mb-2">Blogs</h1>
                <p className="text-white pb-7">
                    Explore the latest gadgets that will take your experience to <br /> the next
                    level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>
            <div className="max-w-[1280px] mx-auto grid grid-cols-3">
                {
                    blog.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;