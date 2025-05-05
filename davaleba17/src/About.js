function About() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <h2 style={{ color: '#dc3545' }}>About The Joker</h2>
      <p>
        The Joker is a supervillain appearing in American comic books published by DC Comics. 
        The character was created by Bill Finger, Bob Kane, and Jerry Robinson and first appeared 
        in the debut issue of the comic book Batman in 1940.
      </p>
      <h3 style={{ color: '#dc3545' }}>Character Traits</h3>
      <ul>
        <li>Chaotic and unpredictable nature</li>
        <li>Extremely intelligent but mentally unstable</li>
        <li>Known for his clown-like appearance</li>
        <li>Has a twisted sense of humor</li>
        <li>Batman's archenemy</li>
      </ul>
      <h3 style={{ color: '#dc3545' }}>Abilities and Skills</h3>
      <p>
        The Joker has no superhuman abilities, but he is a criminal mastermind with a knack for 
        engineering complex and deadly gadgets. He's highly skilled in chemistry, often using 
        various toxins and chemical weapons.
      </p>
      <h3 style={{ color: '#dc3545' }}>Notable Portrayals</h3>
      <ul>
        <li>Cesar Romero (1966 Batman TV series)</li>
        <li>Jack Nicholson (1989 Batman movie)</li>
        <li>Heath Ledger (2008 The Dark Knight)</li>
        <li>Jared Leto (2016 Suicide Squad)</li>
        <li>Joaquin Phoenix (2019 Joker)</li>
      </ul>
    </div>
  );
}

export default About;