import React, { useContext } from "react";
import SkilloraContext from "../../Context/SkilloraContext";

const Search = () => {
  const { setSearch } = useContext(SkilloraContext);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <label className="input md:-ml-28">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        className=""
        onChange={handleSearchChange}
        type="search"
        required
        placeholder="Ex. Web Development."
      />
    </label>
  );
};

export default Search;
