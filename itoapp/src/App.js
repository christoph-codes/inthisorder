import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderNav from './marketing/components/navigation/HeaderNav/HeaderNav';


export default function App() {
  return (
    <div className="App">
      <HeaderNav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>inThisOrder Please.</p>
      </header>
    </div>
  );
}
