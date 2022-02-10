import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <header className="bg-gray-700 flex flex-col items-center justify-center min-h-screen text-white text-2xl">
        <img src={logo} className="h-96 pointer-events-none animate-spin-slow" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-cyan-400 underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
