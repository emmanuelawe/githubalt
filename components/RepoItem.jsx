
const RepoItem = ({repo}) => {
  return (
    <div className="bg-[#4AA2D9] text-white p-3 cursor-pointer rounded-xl">
    <div className="font-bold text-xl">{repo.name}</div>
    <div>{repo.language}</div>
    <div>{repo.visibility}</div>
    </div>
  )
}

export default RepoItem