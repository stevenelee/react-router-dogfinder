import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DogList from "./DogList.js";
import DogDetails from "./DogDetails.js"
import Nav from "./Nav.js"


function App() {
  const [dogs, setDogs] = useState([]);

  function saveDogs(doglist) {
    setDogs(dog => [...doglist]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogs.map(dog => dog.name)} />
        <Routes>
          <Route path="/"
                 element={<DogList saveDogs={saveDogs} dogList={dogs} />}>
          </Route>
          <Route element= {<DogDetails dogList={dogs}/>} path="/dogs/:name" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
