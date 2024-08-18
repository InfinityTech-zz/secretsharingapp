import React from 'react';
import logo from './logo.svg';
import AddSecret from './AddSecret';
import ShowSecret from './ShowSecret';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_API_BASE_URL);
  return (
    <div className="App">
      <AddSecret />
    </div>
  );
}

export default App;
