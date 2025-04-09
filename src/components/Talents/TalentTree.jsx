

const TalentTree = ({ talents, specName, specIcon, specBackground, spentPoints  }) => (
  <div className="rounded-md w-72 flex-none lg:w-full lg:flex-auto">
    <div className="bg-slate-700 p-2 text-white flex gap-2.5 items-center text-lg">
      <img
        src={specIcon}
        width={32}
        height={32}
        className="rounded-full"
        alt={"talent icon"}
      />
      <b>{specName}</b>
      <span className="text-right flex-auto whitespace-nowrap font-bold">{spentPoints} / 41</span>
    </div>
    <div className={`${specBackground} bg-no-repeat relative  bg-cover flex flex-col h-[475px] px-4 py-1.5`}>
      {
        talents.map((talent, index) => (
          <div className={`absolute ${talent.position}`} key={index}>
            <div className="relative ">
              <img
                src={talent.source}
                alt={talent.name}
                width={42}
                height={42}
                className={`rounded-md  ${talent.rank ? "grayscale-0 border border-yellow-400" : "grayscale"}`}
              />
              { talent.rank && ( <span className="bg-gray-900 text-yellow-400 px-1 absolute -right-1 -bottom-2 text-xs z-0">{talent.rank}</span> ) }
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

export default TalentTree