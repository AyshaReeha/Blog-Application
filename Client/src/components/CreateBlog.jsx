import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

function CreateBlog() {
  const [form, setForm] = useState({ title: '', description: '', author: '' });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('/create-blog', form)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Content" value={form.content} onChange={handleChange} rows="5" required />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateBlog;
