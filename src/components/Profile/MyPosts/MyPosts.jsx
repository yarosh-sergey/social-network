import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <Post message='Hi, how are you?' />
      <Post message='It`s my first post!' />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
