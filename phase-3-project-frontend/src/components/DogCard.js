import { useState } from "react";
import UpdateDog from "./UpdateDog";

const DogCard = ({ dog, onUpdateDog, onDeleteDog }) => {
  const [isMainInfo, setIsMainInfo] = useState(true);

  function handleCancel() {
    setIsMainInfo((isMainInfo) => !isMainInfo);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:9292/dogs/${dog.id}`, {
      method: "DELETE",
    });
    onDeleteDog(dog.id);
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.image} alt={dog.name} />
      {isMainInfo ? (
        <div>
          <p>Owner: {dog.owner}</p>
          <p>Breed: {dog.breed}</p>
          <p>Temperament: {dog.temperament}</p>
          <p>Age: {dog.age}</p>
          <button onClick={() => setIsMainInfo(!isMainInfo)}>
            Update Info
          </button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      ) : (
        <UpdateDog
          dog={dog}
          onUpdateDog={onUpdateDog}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default DogCard;
