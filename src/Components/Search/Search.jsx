import React, { useContext } from "react";
import SkilloraContext from "../../Context/SkilloraContext";

const Search = ({sort,setSort}) => {
  const { setSearch } = useContext(SkilloraContext);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex justify-center items-center my-10 lg:max-w-3xl mx-auto gap-5">
      <label className="input w-full ">
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
              {/* Sort Dropdown */}
        <div className="flex justify-end mb-6 mt-5">
          <div className="relative w-full max-w-[220px]">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="block appearance-none w-full bg-base-100 border border-primary text-primary py-2 px-4 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:ring-2 focus:ring-primary transition"
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-primary">
              ▼
            </span>
          </div>
        </div>
    </div>
  );
};

export default Search;
