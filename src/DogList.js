import React, { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const DOG_LIST_URL = "http://localhost:5001/dogs";

/**
 * Component to view all dogs
 *
 * Props:
 * - saveDogs : function to setDogList
 * - doglist : Array of dog objects
 *
 * App -> DogList -> DogDetails
 */
function DogList({ saveDogs, dogList }) {

  const [loading, setLoading] = useState(true);

  /**
   * Makes a GET request to retrieve list of dogs
   */
  async function getDogs() {
    const response = await axios.get(DOG_LIST_URL);
    saveDogs(response.data);
    setLoading(false);
  }

  return (
    <div className="DogList">
    {!loading
    ?
    dogList.map(dog => <div key={dog.name}>
      <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
      <br/>
      <img src={`./${dog.src}.jpg`} alt={dog.name}/>
    </div>)
    :
    <button onClick={getDogs}>GET DOGS</button>
    }
    </div>
  );
}

export default DogList;