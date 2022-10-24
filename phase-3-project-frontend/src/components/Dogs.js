import DogCard from "./DogCard";

function Dogs({ dogs }) {
  return dogs.map((dog) => {
    <DogCard key={dog.id} dog={dog} />;
  });
}

export default Dogs;
