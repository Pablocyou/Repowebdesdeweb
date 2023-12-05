import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Jijijaja from './components/jijijaja'; // Renamed to PascalCase
import Miranano from './components/miranano';
import Layout from './components/Layout';
import NotFound from './components/NotFound'; // Import NotFound if it's a component
import Header from './components/Header';
import Mansana from './components/Mansana';

function App() {
  // Define your state and useEffect here if needed

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Jijijaja />} />
          <Route path="Mansana" element={<Mansana />} />
          <Route path="miranano" element={<Miranano />} />
          <Route path="*" element={<NotFound />} /> {/* Ensure NotFound is a defined component */}
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
