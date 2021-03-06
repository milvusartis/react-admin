import React,{Component} from 'react';
import {BrowserRouter, Switch, Route,Redirect} from "react-router-dom"
import GerenciarPedidos from "./form/GerenciarPedidos"
import CadastraProduto from "./form/cadastraproduto";
import Login from './login/login';
import PrivateRoute from './privateRoutes/PrivateRoutes';
import Home from './pages/home';

import Produtos from './form/Produtos';
import EditarProduto from './form/EditarProduto';
import ListarNF from "./form/ListarNF";

export default class Routes extends Component {
    render() {
        return (

<BrowserRouter>
        
        <Switch>
            <Route exact path="/" > {<Redirect to='/login'/>} </Route>
            <Route  path="/login" component={Login}/> 
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/cadastraproduto" component={CadastraProduto}/>
            <PrivateRoute path="/gerenciarpedidos" component={GerenciarPedidos}/>
            <PrivateRoute path="/produtos" component={Produtos}/>
            <PrivateRoute path="/editarproduto" component={EditarProduto}/>
            <PrivateRoute path="/listarnf" component={ListarNF}/>
        </Switch>
        
</BrowserRouter>
        )
    }
}