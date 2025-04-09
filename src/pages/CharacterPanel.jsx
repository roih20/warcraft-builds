import PanelTabs from "../components/CharacterPanel/PanelTabs.jsx"
import GearPanel from "../components/CharacterPanel/GearPanel.jsx"
import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import TalentPanels from "../components/CharacterPanel/TalentsPanel.jsx";
import SearchPlayer from "../components/SearchPlayer.jsx";
import RealmSelector from "../components/RealmSelector.jsx";


const CharacterPanel = () => {
  const [errorFindingPlayer, setErrorFindingPlayer] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()
  const player = searchParams.get("player")?.trim().toLowerCase()|| "templo"
  const realm = searchParams.get("realm")?.trim().toLowerCase() || "pagle"

  useEffect(() => {
    document.title = `${player} - ${realm} - Warcraft Builds`
  }, [player, realm])

  return <>
    <div className="lg:max-w-4xl lg:w-full lg:mx-auto mt-8 mx-8">
      <div className="flex flex-col gap-y-1.5 sm:flex-row sm:gap-x-1 sm:gap-y-0 ">
        <SearchPlayer error={errorFindingPlayer} />
        <RealmSelector />
      </div>
      <div className="flex flex-col min-h-[700px]">
        <PanelTabs setIsActive={setIsActive} />
        {
          isActive ? (
            <GearPanel player={player} realm={realm} setError={setErrorFindingPlayer} />
          ) : (
            <TalentPanels player={player} realm={realm} setError={setErrorFindingPlayer} />
          )
        }
      </div>
  </div>
  </>
}


export default CharacterPanel