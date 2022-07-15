import React from "react";
import { Routes,Route } from 'react-router-dom';
import CreatePost from "./pages/CreatePost/CreatePost";
import Form from "./pages/Form/Form";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes >
      <Route  path="/" element={<Form />} />
      <Route path="home" element={<Home  />} />
      <Route path="add-post" element={<CreatePost  />} />
    </Routes>
  );
}

export default App;
