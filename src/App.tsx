import React from 'react'
import './App.css'
import { Application } from './components/application/Application'
import { Skills } from './components/skills/Skills'
import { Counter } from './components/counter/Counter'
import { AppProviders } from './providers/AppProviders'
import { MuiMode } from './components/mui/MuiMode'
import { CounterTwo } from './components/counter-two/CounterTwo'
function App() {
  return (
    <AppProviders>
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
        <Counter />
        <MuiMode />
        <CounterTwo
          count={0}
          handleIncrement={() => {}}
          handleDecrement={() => {}}
        />
      </div>
    </AppProviders>
  )
}

export default App
