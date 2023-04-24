import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2 className="headerTitle">Devmountain Eatery</h2>
      <nav className="navStyles">
        <Link to="" className="headerLinkOne">Home </Link>
        <Link to="/newRecipe" className="headerLinkTwo">Add Recipe</Link>
      </nav>
    </header>
  );
};

export default Header;
