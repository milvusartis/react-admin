import React,{Component} from 'react';
import {BrowserRouter, Switch, Route,} from "react-router-dom"
import Pedidos from "./form/pedidos"
import CadastraProduto from "./form/cadastraproduto";
import Login from './login/login';
import PrivateRoute from './privateRoutes/PrivateRoutes';
import Produtos from './form/Produtos';
import EditarProduto from './form/EditarProduto';



export default class Routes extends Component {
    render() {
        return (

<BrowserRouter>
        
        <Switch>
            <PrivateRoute path="/cadastraproduto" component={CadastraProduto}/>
            <PrivateRoute path="/pedidos" component={Pedidos}/>  
            <Route  exact path="/" component={Login}/>
            <PrivateRoute path="/produtos" component={Produtos}/>
            <PrivateRoute path="/editarproduto" component={EditarProduto}/>
        </Switch>
        
</BrowserRouter>
        )
    }
}