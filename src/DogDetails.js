import { useParams } from "react-router-dom"

/**
 * Component to view a single dog
 *
 * Props:
 * - doglist : Array of dog objects
 *
 * {DogList, Nav} -> DogDetails
 */
function DogDetails({ dogList }) {
  const params = useParams();
  const dog = dogList.filter(d => d.name === params.name)[0];
  console.log("dog=", dog)

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={`/${dog.src}.jpg`} alt={dog.name} />
      <h2>Age: {dog.age}</h2>
      {dog.facts.map((fact, idx) => <h3 key={idx}>{fact}</h3>)}
    </div>
  );
}

export default DogDetails;