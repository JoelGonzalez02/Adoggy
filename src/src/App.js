import React, {  useEffect, createContext, useState } from 'react';
import Header from './components/Header';
import DogCards from './components/DogCards';
import SwipeButtons from './components/SwipeButtons';
import './App.css';



export const AuthContext = createContext();

function App() {

  return (
    <>
      
      <Header />
      <DogCards />
      <SwipeButtons />
    
   </>
    
  );
}

export default App;
