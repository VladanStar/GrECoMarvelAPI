import React from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ searchHeroes }) => {
  const search = (event) => {
    const text = event.target.value;
    searchHeroes(text);
  };
  return (
    <>
      <div className={style.margin}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Type hero inside  searchbar"
          aria-label="Search"
          onChange={search}
        />
      </div>
    </>
  );
};

export { SearchBar };
