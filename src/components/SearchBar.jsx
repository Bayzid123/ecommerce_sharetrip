// src/components/SearchBar.jsx
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({ setProducts, setLoading }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query) {
        setLoading(true);
        axios
          .get(`https://dummyjson.com/products/search?q=${query}`)
          .then((response) => {
            setProducts(response.data.products);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      }
    }, 1000); // 1-second delay for debounce

    return () => clearTimeout(delayDebounce); // Clear timeout if query changes
  }, [query]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
