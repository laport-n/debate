import React from 'react';
import './Content.css';
import Debate from './../Debate/Debate';
import Home from './../Home/Home';

function App(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn){
    return (
      <div className="ContentContainer">
        <Debate />
      </div>
    );
  } else {
    return (
      <div className="ContentContainer">
        <Home />
      </div>
    );
  }
}

export default App;
