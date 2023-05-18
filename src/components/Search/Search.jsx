import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search Here..." />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default Search;
