import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.css';
import Seats from './pages/Seats/Seats';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/seats" element={<Seats />} />
            </Routes>
        </div>
    );
}

export default App;
