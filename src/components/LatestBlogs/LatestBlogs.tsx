import { TBlog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: TBlog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-center text-4xl my-5">
        Latest Blogs From <span className="text-accent">Blogiz</span>
      </h2>
      <p className="w-2/4 text-center mx-auto text-gray-500 italic">
        Welcome to Blogiz, a platform where ideas come to life and stories are
        shared. Whether our blog offers a space to diverse topics, learn new
        things, and engage with a vibrant community.
      </p>

      <div className="grid grid-cols-2 gap-4 my-6">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 my-6">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
