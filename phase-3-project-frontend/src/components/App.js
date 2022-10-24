import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Dogs from "./Dogs";
import Walkers from "./Walkers";
import Application from "./Application";
import Appointments from "./Appointments";

function App() {
  const [dogs, setDogs] = useState([]);

  function onAddDog(newDog) {
    setDogs([...dogs, newDog]);
  }

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
      .then((r) => r.json())
      .then((dogs) => setDogs(dogs));
  }, []);

  return (
    <div className="App">
      <header>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/dogs">
            <Dogs dogs={dogs} />
          </Route>
          <Route path="/walkers">
            <Walkers />
          </Route>
          <Route path="/application">
            <Application onAddDog={onAddDog} />
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
