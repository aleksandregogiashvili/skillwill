import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RandomFact({ facts }) {
  const [randomFact, setRandomFact] = useState(null);

  useEffect(() => {

    const randomIndex = Math.floor(Math.random() * facts.length);
    setRandomFact(facts[randomIndex]);
  }, [facts]);

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#dc3545' }}>Random Joker Fact</h2>
      {randomFact ? (
        <>
          <p style={{ fontSize: '1.2rem', margin: '2rem 0' }}>{randomFact.text}</p>
          <p><em>Source: {randomFact.source}</em></p>
        </>
      ) : (
        <p>Loading fact...</p>
      )}
      <div style={{ marginTop: '2rem' }}>
        <Link 
          to="/random-fact" 
          onClick={() => {
          
            const randomIndex = Math.floor(Math.random() * facts.length);
            setRandomFact(facts[randomIndex]);
          }}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          Get Another Random Fact
        </Link>
      </div>
    </div>
  );
}

export default RandomFact;