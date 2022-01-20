import React, { FC } from "react";
import "./Search.css";

interface ComponentProps {
  handleSearchName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<ComponentProps> = ({ handleSearchName }) => {
  return (
    <>
      <div className="headerTItle">
        <h1>Search Github User</h1>
      </div>
      <form>
        <div className="searchContainer">
          <div className="searchInputContainer">
            <input
              onChange={(e) => handleSearchName(e)}
              type="text"
              placeholder="Enter username/name to search..."
              className="searchInput"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
