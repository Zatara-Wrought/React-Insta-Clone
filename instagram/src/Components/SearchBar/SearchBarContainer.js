import React from "react";
import logo from "./img/instagram.png";
import "./SearchBar.css";
const SearchBar = props => {
  return (
    <div className="Fixed-navbar">
      <div className="Search-bar-container">
        <header>
          <i className="fab fa-instagram fa-2x icon" />
          <div className="divider" />
          <img src={logo} alt="Instagram logo" />
        </header>
        <input
          type="text"
          placeholder="&#61442; Search"
          onChange={props.searchPosts}
        />
        <div className="Menu">
          <i className="far fa-compass fa-lg icon" />
          <i className="far fa-heart fa-lg icon" />
          <i className="far fa-user fa-lg icon" />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
