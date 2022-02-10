import React from 'react';
import './App.css';
import Bookshop from './components/bookshop';
import Hookbooklab from './components/Hookbooklab';
import User from './components/User';
import User1 from './components/User1';

function App() {
  return (
    <div className="App">
      <h1>Akash </h1>
      <Bookshop/>
      <hr/>
      <Hookbooklab/>
      <hr/>
      <User/>
      <hr/>
      <User1/>
    </div>
  );
}

export default App;
