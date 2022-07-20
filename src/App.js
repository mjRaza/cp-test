import React from "react";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost/CreatePost";
import Form from "./pages/Form/Form";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./utils/routing/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route
        path="home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="add-post"
        element={
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
