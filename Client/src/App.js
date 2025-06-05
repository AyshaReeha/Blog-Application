import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AllBlogs from './components/AllBlogs';
import CreateBlog from './components/CreateBlog';
import './App.css';

function HomeButtons() {
  const navigate = useNavigate();

  return (
    
    <div className="home-buttons">
     
      <br/>
      <button onClick={() => navigate('/')}>View Posts</button>
      <button onClick={() => navigate('/create')}>Create Post</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <HomeButtons />
      <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
