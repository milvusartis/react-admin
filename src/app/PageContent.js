import React from 'react';
import FormValidation from "../form/formValidation"

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
const PageContent = () => {
  return (
    <div>
      <Router>
        {/* page content */}
        <Switch>
          <Route path="/" exact component={FormValidation}></Route>
          <Route path="/formValidation" exact component={FormValidation}></Route>    
          <Redirect to="/"></Redirect>
        </Switch>
        {/* /page content */}
      </Router>
    </div>
  );
};

export default PageContent;