import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

const App = () => {
  return (
    <Router>
      <div id="page">
        <div id="content">
          <Header />
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/:tag" element={<BlogPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
