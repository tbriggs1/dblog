import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BlogList from './features/Blog/BlogList';
import { getBlogPosts } from './services/blogAPI';
import './App.css'
import Blog from './features/Blog/Blog';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then(setPosts);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={posts.length > 0 && <Homepage latestPost={posts[0]} />}
      />
      <Route
        path="/blog"
        element={<BlogList blogPosts={posts} />}
      />
      <Route path="/blog/:id" element={<Blog/>} />
    </Routes>
  );
}

export default App;