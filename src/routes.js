import React,{Component} from 'react';
import {BrowserRouter, Switch, Route,} from "react-router-dom"
import GerenciarPedidos from "./form/GerenciarPedidos"
import CadastraProduto from "./form/cadastraproduto";
import Login from './login/login';
import PrivateRoute from './privateRoutes/PrivateRoutes';

export default class Routes extends Component {
    render() {
        return (

<BrowserRouter>
        
        <Switch>
            <PrivateRoute path="/cadastraproduto" component={CadastraProduto}/>
            <PrivateRoute path="/gerenciarpedidos" component={GerenciarPedidos}/>
            <Route  exact path="/" component={Login}/>
        </Switch>
        
</BrowserRouter>
        )
    }
}