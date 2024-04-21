import { Octokit } from "octokit";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import LoadingUI from "./LoadingUI";

const octokit = new Octokit({
  auth: import.meta.env.VITE_TOKEN,
});

const RepoDetails = () => {
  const { name } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const { data } = await octokit.request("GET /repos/{owner}/{repo}", {
          owner: "emmanuelawe",
          repo: name,
        });
        setRepo(data);
        console.log(data)
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchRepo();
  }, [name]);

  // console.log(repo)

  if (!repo) {
    return (
      <LoadingUI />
    );
  }

  return (
    <>
      <header className="items-center justify-center flex font-semibold pt-20 bg-[#B3D5F2]/20 dark:bg-gray-700">
        <nav>
          <Link to="/">
            <button className="bg-[#4AA2D9] text-white font-semibold p-2 rounded-lg">
              Home
            </button>
          </Link>
        </nav>
      </header>
      <main className="flex flex-col h-screen items-center pt-5 bg-[#B3D5F2]/20 dark:bg-gray-700">
        <h2 className="text-3xl font-bold">{repo.name}</h2>
        <h2 className="text-xl font-medium">{repo.owner.login}</h2>
        <p>Default branch: {repo.default_branch}</p>
        <p>Forks: {repo.forks_count}</p>
        <p>Issues: {repo.open_issues_count}</p>
        <p>Description: {repo.description}</p>
        <p>Language: {repo.language}</p>
      </main>
    </>
  );
};

export default RepoDetails;
