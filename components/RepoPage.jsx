import React from "react";
import SearchBar from "./SearchBar";
import RepoList from "./RepoList";
import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import { useNavigate } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";
import ExistImg from "../src/assets/exist.png"
import LoadingUI from "./LoadingUI";

const octokit = new Octokit({
  auth: import.meta.env.VITE_TOKEN,
});

const RepoPage = () => {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();

  // Fetch repositories from Github API using Octokit.js
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const { data } = await octokit.request("GET /user/repos");
        setRepos(data);
        setFilteredRepos(data);
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to fetch repositories:", error.message);
        setIsLoading(false)
      }
    };

    fetchRepos();
  }, []);

  // Filter repositories based on search term
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = repos.filter((repo) =>
      repo.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredRepos(filtered);
  };

  if (isLoading) {
    return (
      <LoadingUI />
    );
  }

  const handle404Test = () => {
    navigate("/testing");
  };

  const handleErrorBoundaryTest = (error) => {
    showBoundary(error);
  };

  return (
    <main className="bg-[#B3D5F2]/20 dark:bg-gray-700">
      <section className="flex flex-col h-screen items-center pt-20 ">
        <SearchBar handleSearch={handleSearch} searchTerm={searchTerm}/>
        {filteredRepos.length === 0 && searchTerm && (
          <div className="h-screen justify-center items-center flex flex-col">
            <img src={ExistImg} alt="Does not exist" className="w-36 lg:w-48" />
          <p className="font-normal text-lg italic">Repository does not exist</p>
          </div>
        )}
        <RepoList repos={filteredRepos} />
      </section>
      <section className="flex items-center justify-evenly pt- dark:bg-gray-700 bg-[#B3D5F2]/208">
        <button
          onClick={handle404Test}
          className="bg-[#D9042B]/80 dark:bg-white dark:text-[#D9042B]/80 text-white font-semibold p-2 mb-20 rounded-lg"
          aria-label="Test 404 Page"
        >
          Test 404 Page
        </button>
        <button
          onClick={handleErrorBoundaryTest}
          className="bg-[#D9042B]/80 dark:bg-white dark:text-[#D9042B]/80 text-white font-semibold p-2 mb-20 rounded-lg"
          aria-label="Test Error Boundary"
        >
          Test Error Boundary
        </button>
      </section>
    </main>
  );
};

export default RepoPage;
