import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ReadString from "./ReadString";
import AddDomain from "./AddDomain";


class App extends Component {
  state = { loading: true, drizzleState: null };


 componentDidMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
   this.unsubscribe = drizzle.store.subscribe(() => {

    // every time the store updates, grab the state from drizzle
    const drizzleState = drizzle.store.getState();

    // check to see if it's ready, if so, update local component state
    if (drizzleState.drizzleStatus.initialized) {
      this.setState({ loading: false, drizzleState });
    }
  });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    if (this.state.loading) return "Loading Drizzle...";
    return  <Router>
              <div>
                <Switch>
                  <Route exact path="/">
                    <ReadString
                      drizzle={this.props.drizzle}
                      drizzleState={this.state.drizzleState}
                    />
                  </Route>
                  <Route path="/add_domain">
                    <AddDomain />
                  </Route>
                </Switch>
              </div>
            </Router>
  }
}

export default App;
