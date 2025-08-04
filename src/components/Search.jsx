import { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search coins..."
        className="w-full px-4 py-2 border rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-600 transition"
      />
    </div>
  );
};

export default Search;
