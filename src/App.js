import React, { useState } from 'react';
import { Header } from './components/Header.js';
import { Search } from './components/Search.js';
import { Posts } from './components/Posts.js';
import { WriteBtn } from './components/WriteBtn.js';
import './App.css';
import { First } from 'react-bootstrap/esm/PageItem';

function App() {
  let [ login, setLogin] = useState(true);
  let [ page, setPage] = useState(1);
  let [ posts, setPosts] = useState([{
    number: 1,
    title: 'Firstaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    user: 'user',
    date: '21/09/13',
    likes: 15
  },{
    number: 2,
    title: 'First',
    user: 'user',
    date: '21/09/13',
    likes: 15
  },{
    number: 41,
    title: 'First',
    user: 'user',
    date: '21/09/13',
    likes: 15
  },{
    number: 53,
    title: 'First',
    user: 'user',
    date: '21/09/13',
    likes: 15
  },]);
  let [ user, setUser] = useState({
    name: 'user',
    password: 'password',
    logon_date: new Date(),
    likes: [1232131,123123123,213213,2]
  });
  return (
    <div className="App">
      <Header login={ login } user={ user }/>
      <Search/>
      <Posts posts={ posts } page={ page }></Posts>
      <WriteBtn/>
    </div>
  );
}

export default App;
