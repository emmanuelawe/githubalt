import { useState } from "react";

const SearchBar = ({ handleSearch, searchTerm }) => {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <form className="flex gap-4 items-center justify-center mx-16 md:mx-96 ">
      <div className="relative w-full ">
        <input
          aria-label="Search repositories"
          onChange={handleChange}
          value={searchTerm}
          type="text"
          placeholder="Search repositories..."
          className="placeholder-gray-400 placeholder:p-2 placeholder:italic focus:outline-none focus:ring-0 rounded-xl w-full h-14"
          style={{ padding: "0.75rem" }}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 bg-[#4AA2D9] text-white font-semibold p-2 self-center rounded-xl my-4 mr-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
