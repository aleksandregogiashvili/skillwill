import { Link } from 'react-router-dom';
import jokerImage from './joker.jpg';

function Home() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: 'Red' }}>The Joker</h1>
      <img 
        src={jokerImage} 
        alt="The Joker" 
        style={{ 
          width: '300px', 
          borderRadius: '8px', 
          margin: '1rem 0',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}
      />
      <div style={{ marginTop: '1rem' }}>
        <Link 
          to="/about" 
          style={{ 
            marginRight: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          About The Joker
        </Link>
        <Link 
          to="/random-fact"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          Random Fact
        </Link>
      </div>
    </div>
  );
}

export default Home;