import React from "react";
import { FcSearch } from "react-icons/fc";

import "./search.scss";

const Search = () => {
  return (
    <div className="search-container">
      <form method="post">
        <FcSearch />
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
