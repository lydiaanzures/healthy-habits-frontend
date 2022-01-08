import React from "react";
import Post from "../components/post";

const AllPosts = (props) => {
  
    <h1>AllHabits</h1>;
    // For each post in the array, render a Post component
  return props.posts.map((post) => {
      return <Post key={post.id} post={post} />
  })
};

export default AllPosts;