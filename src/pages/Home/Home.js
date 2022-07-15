import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Post from "../../components/Post/Post";
import Button from "../../controls/Button";
import Loader from "../../controls/Loader";
import { getPosts } from "../../redux/posts/action";
import "./index.css";
const Home = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const {
    posts: { data, isLoading, error },
  } = useSelector(({ posts }) => posts);

  React.useEffect(() => {
    if (!data?.length) {
      dispatch(getPosts());
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1>Posts</h1>
      {data?.map((post, i) => (
        <Post key={i} body={post.body} title={post.title} />
      ))}
      <div className="btn">
        <Button label="Add Post" onClick={() => navigate("/add-post")} />
      </div>
    </div>
  );
};

export default Home;
