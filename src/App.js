import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList.js";
import DogDetails from "./DogDetails.js"
import Nav from "./Nav.js"
import axios from "axios";

const DOG_LIST_URL = "http://localhost:5001/dogs";

/**
 * Component for the App
 */
function App() {
  const [dogs, setDogs] = useState(null);

   /**
   * Makes a GET request to retrieve list of dogs
   */
   async function getDogs() {
    const response = await axios.get(DOG_LIST_URL);
    setDogs(response.data);
  }

  if (!dogs) {
    getDogs();
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogs.map(dog => dog.name)} />
        <Routes>
          <Route path="/dogs"
                 element={<DogList dogList={dogs} />}>
          </Route>
          <Route path="/dogs/:name" element={<DogDetails dogList={dogs}/>}  />
          <Route path="*" element={<Navigate to="/dogs" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
