import { useState, useEffect } from "react";
import RepoItem from "./RepoItem";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const RepoList = ({ repos }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const user = "emmanuelawe";

  // Define variables for pagination
  const perPage = 5;
  const offset = currentPage * perPage; // Calculate the offset based on the current page

  // Calculate the total number of pages needed for pagination
  const pageCount = Math.ceil(repos.length / perPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayedRepos = repos.slice(offset, offset + perPage);

  return (
    <main className="py-10 min-w-[80%] space-y-4 dark:bg-gray-900 bg-[#B3D5F2]/20 px-8 lg:px-44">
      {displayedRepos.map((repo) => (
        <div key={repo.name}>
          <Link to={`/repos/${user}/${repo.name}`}>
            <RepoItem repo={repo} />
          </Link>
        </div>
      ))}

      <nav
        role="navigation"
        aria-label="Pagination Navigation"
        className="md:mx-96 mx-40 flex justify-center items-center"
      >
        <ReactPaginate
          className="flex dark:text-white space-x-4"
          pageCount={pageCount}
          onPageChange={handlePageChange}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
        />
      </nav>
    </main>
  );
};

export default RepoList;
