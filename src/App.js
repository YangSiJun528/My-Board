import React, { useState } from 'react';
import { Header } from './components/Header.js';
import './App.css';

function App() {
  let [ login, setLogin] = useState(true);
  let [ user, setUser] = useState({
    name: 'user',
    password: 'password',
    logon_date: new Date(),
    likes: [1232131,123123123,213213,2]
  });
  return (
    <div className="App">
      <Header login={ login } user={ user }/>
    </div>
  );
}

export default App;
