import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Count from './components/Count';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/count" element={<Count />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
