import React from 'react';
import './App.css';
import Menu from './components/menu';

function App() {
  return (
    <div className="background">
      <div className="container">
        <div className="row">
          <div className="col">
            <Menu></Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
