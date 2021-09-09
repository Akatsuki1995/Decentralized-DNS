import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import AddDomainPage from "views/AddDomain/AddDomainPage.js";
import ResolveDomainPage from "views/ResolveDomain/ResolveDomainPage";
import ManageDomainsPage from "views/ManageDomains/ManageDomainsPage";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/Comp" component={Components} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/add-domain" component={AddDomainPage} />
      <Route path="/resolve" component={ResolveDomainPage} />
      
      <Route path="/manage" component={ManageDomainsPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
