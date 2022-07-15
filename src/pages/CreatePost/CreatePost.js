import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../controls/Button";
import InputField from "../../controls/Input";
import useAlert from "../../hooks/useAlert";
import { addPost } from "../../redux/posts/action";
import "./index.css"
const CreatePost = () => {
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
  const addPostToRedux = () => {
    if (!post.body || !post.title) {
      return Alert("Please enter both title and body.", "error");
    } else {
     dispatch(addPost(post))
      navigate('/home')
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
      <div style={{marginTop:'10px'}}>
      <Button onClick={addPostToRedux} label="Save" />
      </div>
    </div>
  );
};

export default CreatePost;
