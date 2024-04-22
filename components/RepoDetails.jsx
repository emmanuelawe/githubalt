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
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchRepo();
  }, [name]);

  // console.log(repo)

  if (!repo) {
    return <LoadingUI />;
  }

  return (
    <main className="h-screen pt-10 dark:text-white bg-[#B3D5F2]/20 dark:bg-gray-900">
      <header className="items-center justify-center flex font-semibold pt-10 bg-[#B3D5F2]/20 dark:bg-gray-900">
        <nav>
          <Link to="/">
            <button className="bg-[#4AA2D9] text-white font-semibold p-2 px-4 rounded-xl">
              Home
            </button>
          </Link>
        </nav>
      </header>

      <section className="md:mx-40 mx-2 p-4 overflow-x-auto pt-10">
        <table className="flex flex-col border-collapse w-full  table-auto text-left">
          <thead className="bg-[#4AA2D9]">
            <tr>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Data</th>
            </tr>
          </thead>
          <tbody className="bg-[#4AA2D9]/50">
            <tr className="">
              <td className="py-2 px-4">Repo name</td>
              <td className="py-2 px-4">{repo.name}</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Owner</td>
              <td className="py-2 px-4">{repo.owner.login}</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Default branch</td>
              <td className="py-2 px-4">{repo.default_branch}</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Repo Description</td>
              <td className="py-2 px-4">{repo.description}</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Forks</td>
              <td className="py-2 px-4">{repo.forks_count}</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Issues</td>
              <td className="py-2 px-4">{repo.open_issues_count}</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Language</td>
              <td className="py-2 px-4">{repo.language}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* <main className="flex flex-col h-screen items-center pt-10 dark:text-white bg-[#B3D5F2]/20 dark:bg-gray-900">
        <div className="bg-[#4AA2D9] p-2 rounded-xl w-[80%] h-[50%] items-center flex flex-col">
        <h2 className="text-3xl font-bold">{repo.name}</h2>
        <h2 className="text-xl font-medium">{repo.owner.login}</h2>
        <p>Default branch: {repo.default_branch}</p>
        <p>Forks: {repo.forks_count}</p>
        <p>Issues: {repo.open_issues_count}</p>
        <p>Description: {repo.description}</p>
        <p>Language: {repo.language}</p>
        </div>
      </main> */}
    </main>
  );
};

export default RepoDetails;
