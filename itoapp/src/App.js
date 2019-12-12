import React from 'react';
import './App.css';
import HeaderNav from './marketing/components/navigation/HeaderNav/HeaderNav';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import MarketingMain from './marketing/components/MarketingMain'


export default function App() {
  return (
    <Router>
      <div className="App">
        <HeaderNav />
        <MarketingMain />
      </div>
    </Router>
  );
}
