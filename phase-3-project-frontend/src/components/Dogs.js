import DogCard from "./DogCard";

function Dogs({ dogs, onUpdateDog, onDeleteDog }) {
  const renderDogs = dogs.map((dog) => {
    return (
      <DogCard
        key={dog.id}
        dog={dog}
        onUpdateDog={onUpdateDog}
        onDeleteDog={onDeleteDog}
      />
    );
  });

  return <div class="dogsContainer">{renderDogs}</div>;
}

export default Dogs;
