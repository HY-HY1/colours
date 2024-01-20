import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { Navbar } from './layout/Navbar';
import { Generate } from './pages/Generate';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/generate/:codes" element={<Generate />} />
        </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
