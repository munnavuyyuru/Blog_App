import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashPosts = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  console.log(userPosts);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
      const data = await res.json();

      if (res.ok) {
        setUserPosts(data.posts);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);

  return (
    <div
      // ✅ Responsive scroll: scroll only on mobile, full width above sm
      className="table-auto overflow-x-auto sm:overflow-x-visible max-w-full 
      md:mx-auto p-3 
      scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 
      dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500"
    >
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <Table hoverable className="shadow-md">
          <TableHead>
            <TableRow>
              <TableHeadCell>Date Update</TableHeadCell>
              <TableHeadCell>Post image</TableHeadCell>
              <TableHeadCell>Post title</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Delete</TableHeadCell>
              <TableHeadCell>Edit</TableHeadCell>
            </TableRow>
          </TableHead>

          {/*  Single TableBody for all rows */}
          <TableBody className="divide-y">
            {userPosts.map((post) => (
              <TableRow
                key={post._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell>
                  {new Date(post.updatedAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Link to={`/post/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-10 object-cover bg-gray-500"
                    />
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    className="font-medium text-gray-900 dark:text-white"
                    to={`/post/${post.slug}`}
                  >
                    {post.title}
                  </Link>
                </TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>
                  <span className="font-medium text-red-500 hover:underline cursor-pointer">
                    Delete
                  </span>
                </TableCell>
                <TableCell>
                  <Link
                    className="text-teal-500 hover:underline"
                    to={`/update-post/${post._id}`}
                  >
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>{"You have not posts yet!"}</p>
      )}
    </div>
  );
};

export default DashPosts;
