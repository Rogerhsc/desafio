import React from 'react';
import './App.css';
import Menu from './components/menu';
import HomeScreen from './components/homeScreen';

function App() {
  return (
    <div className="background">
      <div className="container">
        <div className="row">
          <div className="col">
            <Menu></Menu>
          </div>
          <div className="col">
            <HomeScreen></HomeScreen>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
