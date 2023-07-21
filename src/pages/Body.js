import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Body.css";

const Body = () => {
  return (
    <div className="body">
      <div className="header">
        <h2>Music Share</h2>
      </div>
      <div className="search">
        <input placeholder="Search for movies" />
        <SearchIcon />
      </div>
      <div className="text">
        <h3>New Releases</h3>
      </div>
      <div className="container">
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
      </div>
    </div>
  );
};

export default Body;
