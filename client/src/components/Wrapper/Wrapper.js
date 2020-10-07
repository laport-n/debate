import React from 'react';

import Header from './../Header/Header';
import Content from './../Content/Content';
import Footer from './../Footer/Footer';

class App extends React.Component {
  constructor(){
    super();
    this.state = { isLogedIn: false };
    this.handleLogIn = this.handleLogIn.bind(this);
  }
  handleLogIn(){
    this.setState({
      isLogedIn: !this.state.isLogedIn
    });
  }

  render(){
    return (
      <>
      <Header handleLogIn={this.handleLogIn}/>
      <Content isLoggedIn={this.state.isLogedIn} />
      <Footer />
      </>
    );
  };
}

export default App;
