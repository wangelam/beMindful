import React, { useState } from 'react';
import './App.css';
import WebcamCapture from './Webcam';

function App() {
  return (
    <div className="App">
<header className="App-header" style={{marginTop:"5px"}}>
  <div style={{ fontSize: "xxx-large" }}>BeReal.</div>
  <div style={{ marginTop: "20px" }}>
    <div style={{
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: "6px",
      padding: "5px",
      width: "300px"
    }}>
      <div className="prompt-text">Prompt: Enjoy the great outdoors</div>
    </div>
  </div>
  <WebcamCapture />
</header>

    </div>
  );
}

export default App;
