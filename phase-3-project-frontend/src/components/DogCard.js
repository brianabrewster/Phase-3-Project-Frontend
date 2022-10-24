import React from "react";

const DogCard = ({ dog }) => {
  return (
    <div>
      <h1>{dog.name}</h1>
      <p>{dog.owner}</p>
      <p>{dog.breed}</p>
      <p>{dog.temperament}</p>
      <p>{dog.age}</p>
      <img src={dog.image} alt={dog.name} />
    </div>
  );
};

export default DogCard;
