import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import './App.css';
import Header from '../components/common/header';
import Body from '../components/common/body';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Router>
  );
}

export default App;
