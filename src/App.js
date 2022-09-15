import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";



import Home from "./pages/Home"
import Mission from './pages/Mission';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route strict exact path="/" element={<Home />} />
        <Route path="/:id" element={<Mission />} />
      </Routes>
    </div>
  )
}

export default App;
