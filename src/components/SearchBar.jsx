/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const SearchBar = ({ setQuery }) => {
  const [localQuery, setLocalQuery] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setQuery(localQuery);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [localQuery]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder="Search products..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
