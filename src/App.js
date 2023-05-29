import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList.js";
import DogDetails from "./DogDetails.js"
import Nav from "./Nav.js"


/**
 * Component for the App
 */
function App() {
  const [dogs, setDogs] = useState([]);

  /**
   * Saves the list of dogs
   */
  function saveDogs(doglist) {
    setDogs(dog => [...doglist]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogs.map(dog => dog.name)} />
        <Routes>
          <Route path="/dogs"
                 element={<DogList saveDogs={saveDogs} dogList={dogs} />}>
          </Route>
          <Route path="/dogs/:name" element={<DogDetails dogList={dogs}/>}  />
          <Route path="*" element={<Navigate to="/dogs" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
