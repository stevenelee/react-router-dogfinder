import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogNames }) {
  return (
    <ul>
      {dogNames.map(name => <Link key={name} to={`/dogs/${name}`}>{name}</Link>)}
    </ul>
  );
}

export default Nav;