import React, { FC } from "react";
import "./Search.css";

interface ComponentProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSearchName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  user: string;
  isDisabled: boolean;
}

const Search: FC<ComponentProps> = ({
  handleSubmit,
  handleSearchName,
  user,
  isDisabled,
}) => {
  return (
    <>
      <div className="headerTItle">
        <h1>Search Github User</h1>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="searchContainer">
          <div className="searchInputContainer">
            <input
              value={user}
              onChange={(e) => handleSearchName(e)}
              type="text"
              placeholder="Enter username/name to search..."
              className="searchInput"
            />
          </div>
          <div className="searchButtonContainer">
            <button
              className={
                isDisabled && user === "" ? `searchButton2` : "searchButton"
              }
              type="submit"
              disabled={isDisabled && user === ""}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
