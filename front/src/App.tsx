import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import MatchGenerator from "./components/MatchGenerator";
import MatchGenerator2 from "./components/copia";
import ToolbarComponent from "./components/ToolbarComponent";


function App() {
    return (
        <div className="App">
            <ToolbarComponent />
            <Routes>
                <Route path="/" element={<MatchGenerator2/>} />
                <Route path="/match" element={<MatchGenerator/>} />
            </Routes>
        </div>
  );
}

export default App;
