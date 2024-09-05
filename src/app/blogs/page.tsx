"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { TBlog } from "@/types";

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-cache",
  // });
  // const blogs = await res.json();

  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-center text-4xl my-5">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h2>
      <p className="w-2/4 text-center mx-auto text-gray-500 italic">
        Welcome to Blogiz, a platform where ideas come to life and stories are
        shared. Whether our blog offers a space to diverse topics, learn new
        things, and engage with a vibrant community.
      </p>

      <div className="grid grid-cols-3 gap-4 py-12">
        {blogs?.map((blog: TBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
