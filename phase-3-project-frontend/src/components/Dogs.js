import DogCard from "./DogCard";

function Dogs({ dogs }) {
  const renderDogs = dogs.map((dog) => {
    return <DogCard key={dog.id} dog={dog}/>;
  });

  return(
    <div>
        {renderDogs}
    </div>
)
}

export default Dogs;
