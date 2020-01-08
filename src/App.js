import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import {AppContext} from './AppContext'

function App() {
  const [username, setUsername] = useState('default');
  useEffect(() => {
    setTimeout(() => {
      setUsername('zhaoyu')
    }, 300)
  }, [username]);
  return (
    <AppContext.Provider value={{
      username
    }}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </AppContext.Provider>
  );
}

export default App;
