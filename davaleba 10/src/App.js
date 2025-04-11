import React from 'react';
import './App.css';
import profilePic from './download.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePic} className="profile-pic" alt="My Profile" />
        <h1>Aleqsandre Gogiashvili</h1>
        <p>Frontend Developer | React | JavaScript | CSS</p>

      </header>
    </div>
  );
}

export default App;
