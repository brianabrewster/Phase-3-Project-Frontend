import React, { useState } from "react";

const UpdateDog = ({ dog, onUpdateDog, handleCancel }) => {
  const [name, setName] = useState(`${dog.name}`);
  const [image, setImage] = useState(`${dog.image}`);
  const [owner, setOwner] = useState(`${dog.owner}`);
  const [breed, setBreed] = useState(`${dog.breed}`);
  const [temperament, setTemperament] = useState(`${dog.temperament}`);
  const [age, setAge] = useState(`${dog.age}`);

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
    fetch(`http://localhost:9292/dogs/${dog.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newDog, age: parseInt(newDog.age) }),
    })
      .then((r) => r.json())
      .then((data) => onUpdateDog(data));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="updateForm">
        <label className="updateLabel">Name</label>
        <input
          className="formInput"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label className="updateLabel">Owner</label>
        <input
          className="formInput"
          value={owner}
          type="text"
          onChange={(e) => setOwner(e.target.value)}
        ></input>
        <label className="updateLabel">Breed</label>
        <input
          className="formInput"
          value={breed}
          type="text"
          onChange={(e) => setBreed(e.target.value)}
        ></input>
        <label className="updateLabel">Temperament</label>
        <input
          className="formInput"
          value={temperament}
          type="text"
          onChange={(e) => setTemperament(e.target.value)}
        ></input>
        <label className="updateLabel">Age</label>
        <input
          className="formInput"
          value={age}
          type="integer"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <label className="updateLabel">Image</label>
        <input
          className="formInput"
          value={image}
          type="text"
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <br />
        <button id="updateSubmit" type="submit">
          Update Dog
        </button>
      </form>
      <button id="cancelBtn" onClick={() => handleCancel()}>
        Cancel
      </button>
    </div>
  );
};

export default UpdateDog;
