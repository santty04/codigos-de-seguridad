import { UseState } from './UseState.js'
import { ClassState } from './ClassState.js'
import React from 'react';
import { UseReducer } from './UseReducer';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <UseReducer name="UseReducer" />
    </div>
  );
}

export default App;
