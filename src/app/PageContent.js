import React from 'react';
import Pedidos from "../form/pedidos";
import CadastraProduto from "../form/cadastraproduto";

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
const PageContent = () => {
  return (
    <div>
      <Router>
        {/* page content */}
        <Switch>
          <Route path="/" exact component={CadastraProduto}></Route>
          <Route path="/cadastraproduto" exact component={CadastraProduto}></Route>   
          <Route path="/pedidos" exact component={Pedidos}></Route>  
          <Redirect to="/"></Redirect>
        </Switch>
        {/* /page content */}
      </Router>
    </div>
  );
};

export default PageContent;