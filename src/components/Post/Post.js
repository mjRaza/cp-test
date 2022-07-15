import React from "react";
import "./index.css";
const Post = ({ body, title }) => {
  return (
    <div className="postContainer">
      <h3 style={{ fontSize: "22px" }}>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
