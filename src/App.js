import React, { Component } from 'react';
import Login from './login/login'
import Sidemenu from './app/Sidemenu';



import Routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="nav-md">
      <div className="container body">
      <div className="main_container">
        <div className="col-md-3 left_col">
          {
            (sessionStorage.getItem("token")  &&  < Sidemenu/>)
          }
         
          </div>
          
        <Routes />
        
        
        </div>
        </div>
        </div>


      
      
    );
  }
}

export default App;
