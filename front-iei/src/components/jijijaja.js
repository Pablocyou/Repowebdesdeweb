import { useState } from 'react';
import './jijijaja.css';

const Jijijaja = () => {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    // Implement the logic to search the location
    setResult(`Results for "${location}"`);
  };

  return (
    <div className="jiji">
      <header className="App-header">
        <h1>jijijaja 2</h1>
        <input
          type="text"
          placeholder="Enter location name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
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

export default Jijijaja;
