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

  const [walkers, setWalkers] = useState([])


  useEffect(() => {
      fetch('http://localhost:9292/walkers')
      .then((res) => res.json())
      .then((data) => setWalkers(data))
  }, [])

  function onAddDog(newDog) {
    setDogs([...dogs, newDog]);
  }

  function onUpdateDog(updatedDog) {
    setDogs((dogs) => {
      return dogs.map((dog) => {
        return dog.id === updatedDog.id ? updatedDog : dog;
      });
    });
  }

  function onDeleteDog(dogId) {
    setDogs((dogs) => dogs.filter((dog) => dog.id !== dogId));
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
            <Dogs
              dogs={dogs}
              onUpdateDog={onUpdateDog}
              onDeleteDog={onDeleteDog}
            />
          </Route>
          <Route path="/walkers">
            <Walkers walkers={walkers}/>
          </Route>
          <Route path="/application">
            <Application onAddDog={onAddDog} />
          </Route>
          <Route path="/appointments">
            <Appointments walkers={walkers} dogs={dogs}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
