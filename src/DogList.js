import React from "react"
import { Link } from "react-router-dom";



/**
 * Component to view all dogs
 *
 * Props:
 * - doglist : Array of dog objects
 *
 * App -> DogList -> DogDetails
 */
function DogList({ dogList }) {
  return (
    <div className="DogList">
    {
    dogList.map(dog => <div key={dog.name}>
      <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
      <br/>
      <img src={`/${dog.src}.jpg`} alt={dog.name}/>
      <br/>
      <br/>
    </div>)
    }
    </div>
  );
}

export default DogList;