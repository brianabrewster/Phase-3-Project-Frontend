import React from "react";

const DogCard = ({ dog }) => {
  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.image} alt={dog.name} />
      <p>Owner: {dog.owner}</p>
      <p>Breed: {dog.breed}</p>
      <p>Temperament: {dog.temperament}</p>
      <p>Age: {dog.age}</p>
    </div>
  );
};

export default DogCard;
