import React from 'react';
import Header from './components/Header';
import DogCards from './components/DogCards';
import SwipeButtons from './components/SwipeButtons';
import './App.css';

function App() {
  return (
    <div className="app">

      <Header />
      <DogCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
