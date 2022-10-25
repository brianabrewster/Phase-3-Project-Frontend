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
    <div class="dogCard">
      <div class="nameImg">
        <h1 class="dogName">{dog.name}</h1>
        <img class="dogImg" src={dog.image} alt={dog.name} />
      </div>
      {isMainInfo ? (
        <div class="dogInfo">
          <p>Owner: {dog.owner}</p>
          <p>Breed: {dog.breed}</p>
          <p>Temperament: {dog.temperament}</p>
          <p>Age: {dog.age}</p>
          <div class="delEditContainer">
            <button
              class="delEditBtn"
              onClick={() => setIsMainInfo(!isMainInfo)}
            >
              ✎
            </button>
            <button class="delEditBtn" onClick={handleDeleteClick}>
              X
            </button>
          </div>
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
