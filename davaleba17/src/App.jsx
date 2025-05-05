import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import RandomFact from './RandomFact';
import { facts } from './factsData';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#27AE60', color: 'white',textAlign: 'center',}}>
        <Link to="/" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About The Joker</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/random-fact" element={<RandomFact facts={facts} />} />
      </Routes>
    </Router>
  );
}

export default App;