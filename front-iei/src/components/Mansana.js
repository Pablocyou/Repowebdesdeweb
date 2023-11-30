import React, { useState } from 'react';
import './DataStore.css'; // Make sure to create a CSS file for styling

const Mansana = () => {
  const [selectedSources, setSelectedSources] = useState({
    selectAll: false,
    murcia: false,
    valencia: false,
    catalunya: false
  });
  const [loadResults, setLoadResults] = useState('');

  const handleSourceChange = (source) => {
    setSelectedSources(prevState => ({
      ...prevState,
      [source]: !prevState[source],
      selectAll: false // Reset select all if any individual checkbox is changed
    }));
  };

  const handleSelectAll = () => {
    const newState = !selectedSources.selectAll;
    setSelectedSources({
      selectAll: newState,
      murcia: newState,
      valencia: newState,
      catalunya: newState
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoadResults(`Results for: ${JSON.stringify(selectedSources)}`);
  };

  return (
    <div className="data-store">
      <h2>Carga del almacén de datos</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Seleccione fuente:</legend>
          <div>
          <label>
            <input
              type="checkbox"
              checked={selectedSources.selectAll}
              onChange={handleSelectAll}
            />
            Seleccionar todas
          </label>
          </div> <div>
          <label>
            <input
              type="checkbox"
              checked={selectedSources.murcia}
              onChange={() => handleSourceChange('murcia')}
            />
            Murcia
          </label>
          </div> <div>
          <label>
            <input
              type="checkbox"
              checked={selectedSources.valencia}
              onChange={() => handleSourceChange('valencia')}
            />
            Comunitat Valenciana
          </label>
          </div>
          <label>
            <input type="checkbox"
              checked={selectedSources.catalunya}
              onChange={() => handleSourceChange('catalunya')}
            />
            Catalunya
          </label>
        </fieldset>
        <button type="submit">Cargar Datos</button>
      </form>
      <div className="results">
        {loadResults && <p>{loadResults}</p>}
      </div>
    </div>
  );
};

export default Mansana;

