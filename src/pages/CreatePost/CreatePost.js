import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../controls/Button";
import InputField from "../../controls/Input";
import Loader from "../../controls/Loader";
import useAlert from "../../hooks/useAlert";
import { addPost } from "../../redux/posts/action";
import * as api from "../../redux/posts/api";

import "./index.css";
const CreatePost = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [post, setPost] = React.useState({ title: "", body: "" });
  const Alert = useAlert();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onChange = (name, e) => {
    let { value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  const addPostToRedux = async () => {
    if (!post.body || !post.title) {
      return Alert("Please enter both title and body.", "error");
    } else {
      const payload = {
        title: post.title,
        body: post.body,
        userId: 1,
      };

      try {
        setIsLoading(true);
        const res = await api.sendPostToApi(payload);
        if (res) {
          Alert("Post created.", "success");
        }

        dispatch(addPost(post));
        navigate("/home");
      } catch (error) {
        return Alert("Something went wrong.", "error");
      }
      setIsLoading(false);
    }
  };
  return (
    <div className="container">
      <InputField
        keys="title"
        placeholder="Enter Title"
        label="Title"
        onChange={onChange}
        value={post.title}
      />
      <InputField
        keys="body"
        placeholder="Enter Body"
        label="body"
        onChange={onChange}
        value={post.body}
      />
      <div style={{ marginTop: "10px" }}>
        <Button onClick={addPostToRedux} label="Save" />
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default CreatePost;
