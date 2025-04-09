
const PanelTabs = ({ setIsActive }) => {
  return (
    <div className="flex flex-row gap-2 border-b border-gray-200 my-2.5">
      <button
        onClick={() => setIsActive((prevState) => !prevState)}
        className="bg-slate-700 px-4 py-2 block text-gray-200 rounded-t-md cursor-pointer hover:bg-slate-800"
      >
        Gear
      </button>
      <button
        onClick={() => setIsActive((prevState) => !prevState)}
        className=" bg-slate-700 px-4 py-2 text-gray-200 rounded-t-md cursor-pointer hover:bg-slate-800"
      >
        Talents
      </button>
    </div>
  )
}

export default PanelTabs