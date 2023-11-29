import { useState } from 'react';
import './miranano.css';

const Miranano = () => {
  const [location, setLocation] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [province, setProvince] = useState('');
  const [type, setType] = useState('publico');
  const [result, setResult] = useState('');


  const handleSearch = (e) => {
    e.preventDefault();
    // Implement the logic to search the location
    setResult(`Results for "${location}, ${postalCode}, ${province}, ${type}"`);
  };

  return (
    <div className="miranano">
      <header className="App-header">
        <h1>Mira nano, yo no se para que pollas tenemos este grupo</h1>
        <div>
            <label htmlFor="locality">Localidad:</label>
            <input
                type="text"
                id='location'
                placeholder="explicamelo tontin"
                value={location}
                onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="postalCode">Cod. Postal:</label>
            <input
                type="text"
                id='postalCode'
                placeholder="codificame esta"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="province">Provincia:</label>
            <input
                type="text"
                id='province'
                placeholder="Que provincia"
                value={province}
                onChange={(e) => setProvince(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="type">Tipo:</label>
            <select id='type' value={type} onChange={(e) => setType(e.target.value)}>
                <option value="publico">público</option>
                <option value="privado">privado</option>
                <option value="concertado">concertado</option>  
                <option value="otro">no escojas este</option>  
            </select>            
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


export default Miranano;