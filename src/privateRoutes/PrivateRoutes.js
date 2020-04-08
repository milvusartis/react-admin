import React from "react";
import { Route, Redirect} from "react-router-dom";
import { isLogged } from './PrivateLogin.js';


const PrivateRoute = props => isLogged () 
? <Route {...props}/>
: <Redirect to="/" />


export default PrivateRoute;