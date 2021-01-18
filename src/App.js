import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';

function App() {
  return (
    <div className="App">
      <h2>The Components way</h2>
      <Login />
      <br />
      <Logout />
      <h2>The Hooks way</h2>
      <LoginHooks />
      <LogoutHooks />
      <br />
      {' '}
      <a href="https://github.com/ramsoi/amplifyapp">
        Github Repo
      </a>{' '}
      ??
    </div>
  );
}

export default App;
