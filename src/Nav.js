import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

/**
 * Component to display Navbar
 *
 * Props:
 * - dogNames : Array of dog names
 *
 * App -> Nav -> DogDetails
 */
function Nav({ dogNames }) {
  return (
    <div className="Nav">
      {dogNames.map(name => <Link key={name} to={`/dogs/${name}`}>{name}</Link>)}
    </div>
  );
}

export default Nav;