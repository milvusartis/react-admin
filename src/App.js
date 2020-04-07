import React, { Component } from 'react';
import Footer from './app/Footer';
import Sidemenu from './app/Sidemenu';


import Routes from './routes';


class App extends Component {
  render() {
    return (
      <div>
        <Sidemenu />
        <Routes />
        
        <Footer ></Footer>
      
        </div>
      
      
    );
  }
}

export default App;