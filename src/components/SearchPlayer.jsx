import { useSearchParams} from "react-router-dom"

const SearchPlayer  = ({ error }) => {

  const [searchParams, setSearchParams] = useSearchParams()
  const handelSearch = (player) => {
    const newSearchParams = new URLSearchParams(searchParams)
    if (player) {
      newSearchParams.set("player", player)
    } else {
      newSearchParams.delete("player")
    }

    setSearchParams(newSearchParams)
  }


  return (
    <div className="flex flex-col sm:w-1/2">
      <input
        className={`${error ? "border-red-400  focus:ring-red-400 focus:border-red-400" : "border-slate-900 focus:ring-blue-500 focus:border-blue-500"} border-0 text-gray-200 bg-slate-700 px-2 py-1 w-full rounded-md focus:outline-none focus:ring placeholder:text-gray-300 appearance-none`}
        defaultValue={searchParams.get("player")|| ""}
        maxLength={25}
        placeholder="Enter a player name"
        onChange={(e) => handelSearch(e.target.value)}
      />
      {
        error && (
          <span className="text-red-400 text-sm mt-1">Player not found</span>
        )
      }
    </div>
  )
}

export default SearchPlayer