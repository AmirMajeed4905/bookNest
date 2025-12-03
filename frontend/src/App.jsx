import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import AddProduct from './pages/AddProduct';
import Login from './pages/Login.jsx';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         <Route path="/add-product" element={<AddProduct />} />
         <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </Router>
  );
}
