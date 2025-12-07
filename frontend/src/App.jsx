import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import AddBook from './pages/AddBook.jsx';
import SingleBook from './pages/SingleBook.jsx';
import { AuthProvider } from './context/authContext.jsx';
import Footer from './components/Footer.jsx';
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/books/:id" element={<SingleBook />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}
