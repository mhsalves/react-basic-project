import React from 'react';
import logo from './logo.svg';
import './App.css';

import Section from './Section';
import Counter from './Counter';
import Select from './Select';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Section color="#7FFFD4">
        Olá Mundo !
      </Section>
      <Section color="#FFFFFF">
        <Select
          placeholder="Selecione uma opção"
          listItems={['PS3', 'Xbox 360', 'Nintendo Wii', 'PS4', 'Xbox One', 'Nintendo Switch']}
        />
      </Section>
      <Section color="lightblue">
        <Counter />
      </Section>
    </div>
  );
}

export default App;
