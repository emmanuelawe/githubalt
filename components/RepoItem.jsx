import Right from "../src/assets/rightt.png";

const RepoItem = ({ repo }) => {
  return (
    <main className="flex items-center pr-10 bg-[#4AA2D9] text-white p-3 cursor-pointer rounded-xl">
      <div className="flex-1">
        <div className="font-bold text-xl">{repo.name}</div>
        <div>{repo.language}</div>
        <div>{repo.visibility}</div>
      </div>
      <img src={Right} alt="Next icon" className="w-4 h-4" />
    </main>
  );
};

export default RepoItem;
