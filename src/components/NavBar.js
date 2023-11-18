import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div> <ul>
  <li>
    <NavLink to="/" exact activeClassName="active">
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to="/movies" activeClassName="active">
      Movies
    </NavLink>
  </li>
  <li>
    <NavLink to="/directors" activeClassName="active">
      Directors
    </NavLink>
  </li>
  <li>
    <NavLink to="/actors" activeClassName="active">
      Actors
    </NavLink>
  </li>
</ul></div>;
}

export default NavBar;
