import { useState, useEffect } from 'react'
import './App.css';
import SingleCard from './components/SingleCard';

const $ = q => document.querySelector(q)
const ipath = process.env.PUBLIC_URL

function App() {
  return (
    <div className="App">
      <SingleCard />
      
    </div>
  );
}

export default App;
