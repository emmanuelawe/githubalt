import { useNavigate } from "react-router-dom";

const SearchBar = ({ handleSearch, searchTerm }) => {
  const navigate = useNavigate();
  const user = "emmanuelawe";

  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  const handleSubmit = () => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      const user = "emmanuelawe";
      navigate(`/repos/${user}/${searchTerm}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 pb-10 items-center justify-center mx-12 md:mx-96 "
    >
      <div className="relative w-full ">
        <input
          aria-label="Search repositories"
          onChange={handleChange}
          value={searchTerm}
          type="text"
          placeholder="Search repositories..."
          className="placeholder-gray-400 placeholder:italic focus:outline-none focus:ring-0 rounded-xl w-full h-14"
          style={{ padding: "1rem" }}
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
