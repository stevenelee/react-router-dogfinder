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
      <img src={`./${dog.src}.jpg`} alt={dog.name} />
      <h2>Age: {dog.age}</h2>
      <ul>{dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}</ul>
    </div>
  );
}

export default DogDetails;