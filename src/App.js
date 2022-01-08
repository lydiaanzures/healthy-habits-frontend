import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import Button from "./components/button-style";
import buttonbox from "./components/button-box";

// Burger from https://www.youtube.com/watch?v=GGkBwpxV7AI
// Burger imports


// Import Auth0
import { Auth0Provider } from "@auth0/auth0-react";
import AuthenticationButton from "./components/authentication-button";


// Import React and Hooks
import React, { useState, useEffect, useRef } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";


function App(props) {
  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };


  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  //const url = "heroku url here";
  const url = 'http://localhost:3000/posts/'
  // State to hold the list of posts
  const [posts, setPosts] = useState([]);

  // An object that represents a null post
  const nullPost = {
    postname: "",
    posttype: "",
    lastCompleted: "",
    
  };

  // Const state to hold post to edit
  const [targetPost, setTargetPost] = useState(nullPost);

//////////////
  // Functions
  //////////////

// Function to get the list of posts from API
const getPosts = async () => {

  const response = await fetch(url)
  const data = await response.json()
  setPosts(data)
  console.log(getPosts)
  console.log(data)

  };

  // Function to add post from Form data
  const addPosts = async (newPost) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
          })
          console.log(newPost);

    // Get updated list of posts
    getPosts();
  };

  // Function to select post to edit
  const getTargetPost = (post) => {
    setTargetPost(post);
    props.history.push("/edit");
  };

  // Function to edit post on form submission
  const updatePost = async (post) => {
    const response = await fetch(url + post.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    // Get updated list of posts
    getPosts();
  };

  // Function to delete post
  const deletePost = async(post) => {
    const response = await fetch(url + post.id + "/", {
      method: "delete",
  });

  // Get updated list of posts
  getPosts();
  props.history.push("/");
};
  //////////////
  // useEffects
  //////////////

// useEffect to get list of posts when page loads
useEffect(() => {
  getPosts();
}, []);

  /////////////////////
  // returned JSX
  /////////////////////
// globalstyles goes in classname app div
// need to add const open, set open

  return (

    <div className="App">
  

 
      <h1 style={h1}>Habits</h1>
      <div style={buttonbox}>
      <Link to="/new"><button style={Button} >Create New habit</button></Link>
      </div>
      
      <Switch>
        {/* INDEX PAGE */}
        <Route 
        exact 
        path="/"
        render={(rp) => {
        return <AllPosts 
        {...rp} 
        posts={posts} />;
        
      }}
        />
        {/* SHOW PAGE */}
        <Route 
        path = "/posts/:id"
        render={(rp) => {
          return <SinglePost 
          {...rp} 
          posts={posts} 
          edit={getTargetPost}
          deletePost={deletePost}
          />;
        }}
        />
{/* NEW AND EDIT FORM PAGES */}
        <Route 
        path = "/new"
        render={(rp) => {
        return <Form {...rp}
        initialPost={nullPost}
        handleSubmit={addPosts}
        buttonLabel="Add Habit"
        />;
      }}
        />
        <Route 
        path = "/edit"
        render={(rp) => {
        return <Form 
        {...rp} 
        initialPost={targetPost}
        handleSubmit={updatePost}
        buttonLabel="Edit"
                />;
        }}
        />
      </Switch>
    </div>
  
// Closes the return
  ); 
// Closes the App
}

export default App;

