import React,{Component} from 'react';
import {BrowserRouter, Switch, Route,Redirect} from "react-router-dom"
import Pedidos from "./form/pedidos"
import CadastraProduto from "./form/cadastraproduto";
import Login from './login/login';
import PrivateRoute from './privateRoutes/PrivateRoutes';
import Home from './pages/home';



export default class Routes extends Component {
    render() {
        return (

<BrowserRouter>
        
        <Switch>
            <PrivateRoute path="/cadastraproduto" component={CadastraProduto}/>
            <PrivateRoute path="/pedidos" component={Pedidos}/> 
            <Route exact path="/" > {<Redirect to='/login'/>} </Route>
            <Route  path="/login" component={Login}/>
            <PrivateRoute path="/home" component={Home} />
            
        </Switch>
        
</BrowserRouter>
        )
    }
}