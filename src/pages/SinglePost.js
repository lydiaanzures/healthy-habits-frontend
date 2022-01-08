import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button-style";
import buttonbox from "../components/button-box";

const SinglePost = ({ posts, match, edit, deletePost }) => {
  const id = parseInt(match.params.id);
  const post = posts.find((post) => post.id === id);

  const div = {
    textAlign: "center",
    border: "5px solid blue",
    width: "80%",
    margin: "30px auto",
  };


  return (
  <div style={div}>
    <h1>Name: {post.postname}</h1>
    <h2>Habit Type: {post.posttype}</h2>
    <h2>Last Completed: {post.lastCompleted}</h2>
    <h6>User ID: {post.user_id}</h6>

<div style={buttonbox}>
    <button style={Button} onClick={(event) => edit(post)}>Edit</button>
    <button style={Button} onClick={(event) => deletePost(post)}>Delete</button>
    <Link to="/">
      <button style={Button}>Back to Habits</button>
    </Link>
    </div>

  </div>
);
};

export default SinglePost;