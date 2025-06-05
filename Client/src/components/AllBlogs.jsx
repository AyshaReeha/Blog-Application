import { useEffect, useState } from 'react';
import axios from 'axios';
import './Blog.css';

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/get-all-blogs')
      .then(res => {
        setBlogs(Array.isArray(res.data.data) ? res.data.data : []);
      })
      .catch(err => {
        console.error(err);
        setBlogs([]);
      });
  }, []);

  return (
    <div className="blogs-container">
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogs.map(blog => (
          <div className="blog-card" key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <small>— {blog.author}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default AllBlogs;
