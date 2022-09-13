import React from "react";
import { useSearchParams } from "react-router-dom";
function SearchBar({ setSearchVal }) {
  const [searchparams, Setsearchparams] = useSearchParams();

  const searchterm = searchparams.get("query") || "";

  const HandleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    if (query) Setsearchparams({ query });
    else Setsearchparams({});
  };

  const WhenSearchClicked = () => {
    setSearchVal(searchterm);
    document.querySelector(".courses").scrollIntoView();
  };

  const keyboardPress = (event) => {
    if (event.key === "Enter") WhenSearchClicked();
  };

  return (
    <div className="search-bar-container" onKeyDown={keyboardPress}>
      <button
        className="search-icon-btn"
        type="submit"
        onClick={() => WhenSearchClicked()}
      >
        <img
          className="search-icon"
          src="../images/icons/search.png"
          alt=""
          height="15"
        />
      </button>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for anything"
        value={searchterm}
        onChange={HandleSearch}
      />
    </div>
  );
}

export default SearchBar;
