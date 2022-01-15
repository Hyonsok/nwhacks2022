import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;