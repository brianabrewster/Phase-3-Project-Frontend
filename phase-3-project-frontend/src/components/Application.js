import React, { useState } from "react";

function Application({ onAddDog }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [owner, setOwner] = useState("");
  const [breed, setBreed] = useState("");
  const [temperament, setTemperament] = useState("");
  const [age, setAge] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const newDog = {
      name: name,
      owner: owner,
      breed: breed,
      temperament: temperament,
      age: age,
      image: image,
    };
    fetch("http://localhost:9292/dogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newDog, age: parseInt(newDog.age) }),
    })
      .then((r) => r.json())
      .then((data) => onAddDog(data));

    setName("");
    setImage("");
    setOwner("");
    setBreed("");
    setTemperament("");
    setAge(0);
  }

  return (
    <div class="applicationFormContainer">
      <h1 class="applicationTitle">Register a Pet</h1>
      <form class="applicationForm" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          type="text"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Owner</label>
        <input
          value={owner}
          type="text"
          placeholder="Owner..."
          onChange={(e) => setOwner(e.target.value)}
        ></input>
        <label>Breed</label>
        <input
          value={breed}
          type="text"
          placeholder="Breed..."
          onChange={(e) => setBreed(e.target.value)}
        ></input>
        <label>Temperament</label>
        <input
          value={temperament}
          type="text"
          placeholder="Temperament..."
          onChange={(e) => setTemperament(e.target.value)}
        ></input>
        <label>Age</label>
        <input
          value={age}
          type="integer"
          placeholder="Age... (Numbers Only)"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <label>Picture</label>
        <input
          value={image}
          type="text"
          placeholder="Image URL..."
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <button type="submit">Register Dog</button>
      </form>
    </div>
  );
}

export default Application;
