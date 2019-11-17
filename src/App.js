import React from "react";
import "./App.css";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import MainPage from "./Containers/MainPage/MainPage";
import About from "./Containers/About/About";
import Contacts from "./Containers/Contacts/Contacts";

function App() {
  return (
    <div>
      <Router>
        {/* <Route component={Navbar} /> */}
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
