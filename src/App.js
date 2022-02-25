import React from 'react';
import './App.css';
import PlanetsProvider from './context/provider';
import Home from './pages/Home';

function App() {
  return (
    <PlanetsProvider>
      <Home />
    </PlanetsProvider>
  );
}

export default App;
