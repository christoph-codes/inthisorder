import React from 'react';
import './App.css';
import HeaderNav from './marketing/components/navigation/HeaderNav/HeaderNav';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Main from './marketing/components/Main'


export default function App() {
  return (
    <Router>
      <div className="App">
        <HeaderNav />
        <Main />
      </div>
    </Router>
  );
}
