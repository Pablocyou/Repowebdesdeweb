import React, { useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    // Implement the logic to search the location
    // For now, we'll just display the entered location
    setResult(`Results for "${location}"`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>jijijaja 2</h1>
        <input
          type="text"
          placeholder="Enter location name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div> 
          <input
          type="text"
          placeholder="Enter location name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSearch}>Search Location</button>
        </div>

        <div className="result-box">
          {result && <p>{result}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
