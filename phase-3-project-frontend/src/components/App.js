import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/dogs">
            <Dogs />
          </Route>
          <Route path="/walkers">
            <Walkers />
          </Route>
          <Route path="/application">
            <Application />
          </Route>
          <Route path="/appointments">
            <Appointments />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
