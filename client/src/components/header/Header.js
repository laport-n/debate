import React from 'react';
import './Header.css';

function App(props) {
  const handleLogIn = props.handleLogIn;
  return (
    <div className="HeaderContainer">
      <div className="NavItemContainer">
        <h2 className="Logo">Debate</h2>
      </div>
      <div className="NavItemContainer">
        <h4>A simple web application to show nodeJs/React skills</h4>
      </div>
      <div className="NavItemContainer">
        <button className="ButtonAction" onClick={handleLogIn}>log-in</button>
      </div>
    </div>
  );
}

export default App;
