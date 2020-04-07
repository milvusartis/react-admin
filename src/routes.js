import React,{Component} from 'react';
import {BrowserRouter, Switch, Route,} from "react-router-dom"
import Pedidos from "./form/pedidos"
import CadastraProduto from "./form/cadastraproduto";
import Login from './login/login';
import PrivateRoute from './privateRoutes/PrivateRoutes';



export default class Routes extends Component {
    render() {
        return (

<BrowserRouter>
        
        <Switch>
            <PrivateRoute path="/cadastraproduto" exact component={CadastraProduto}/>
            <PrivateRoute path="/pedidos" exact component={Pedidos}/>  
            <Route  exact path="/" component={Login}/>
        </Switch>
        
</BrowserRouter>
        )
    }
}