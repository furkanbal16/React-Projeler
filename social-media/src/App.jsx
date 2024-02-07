import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
