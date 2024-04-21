import { useState } from "react";

const SearchBar = ({ handleSearch, searchTerm }) => {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <form className="flex pl-8 gap-4">
      <input
        aria-label="Search repositories"
        onChange={handleChange}
        value={searchTerm}
        type="text"
        placeholder="Search repositories..."
        className="placeholder-gray-600 placeholder:p-2 placeholder:italic rounded-lg"
      />
      <button
        type="submit"
        className="bg-[#4AA2D9] text-white font-semibold p-2 rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
