import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/Application';
import { Skills } from "./components/skills/Skills"

function App() {
  return (
    <div className="App">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     <Application />
     <Skills skills={['HTML', 'CSS']} />
    </div>
  );
}

export default App;
