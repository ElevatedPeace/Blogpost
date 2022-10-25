import Navbar from './components/Navbar';
import React from 'react';
import BlogProvider from './context/BlogProvider';
import Post from './pages/Post';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <BlogProvider>
    <Box className="App">
      <Router>

      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:post.id" exact element={<Post />} />
      </Routes>


      </Router>

      
    </Box>
    </BlogProvider>
  );
}

export default App;
