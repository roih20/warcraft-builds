import {useState, useEffect } from "react"
import { getWoWAccessToken } from "../../lib/oauth.js"
import { fetchData } from "../../lib/utils.js";
import CharacterTalents from "../Talents/CharacterTalents.jsx";
import { characterTalents } from "../../lib/Talents/characterTalents.js";
import Loading from "../Loading.jsx";

const TalentPanels = ({ player, realm, setError}) => {

  const [activeSpecialization, setActiveSpecialization] = useState({
    specializations: [],
    glyphs: []
  })
  const [characterClass, setCharacterClass] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {

        setLoading(true)

        const accessToken = await getWoWAccessToken()

        const characterClassResponse = await fetchData(
          `https://us.api.blizzard.com/profile/wow/character/${realm}/${player}?namespace=profile-classic-us&locale=en_US`,
          accessToken
        )

        setCharacterClass(characterClassResponse.character_class.name)

        const characterTalents = await fetchData(
          `https://us.api.blizzard.com/profile/wow/character/${realm}/${player}/specializations?namespace=profile-classic-us&locale=en_US`,
          accessToken
        )

        const activeSpec = characterTalents.specialization_groups.find((spec) => spec.is_active === true)

        if (activeSpec) {
          setActiveSpecialization({
            specializations: activeSpec?.specializations || [],
            glyphs: activeSpec?.glyphs || [],
          })
        }

        setLoading(false)
        setError(false)
      } catch (e) {
        setLoading(false)
        setError(true)
      }
    }

    fetchCharacterData()
  }, [realm, player, setError])

  const currentClassTalents = characterTalents[characterClass]


  return <>
    {!loading ? (
      currentClassTalents && activeSpecialization.specializations.length > 0 ? (
        <CharacterTalents
          specializations={activeSpecialization.specializations}
          specializationPanels={characterTalents[characterClass]}
        />
      ) : (
        <div>Character does not exists</div>
        )
      ) : (
        <Loading />
      )
    }
  </>
}


export default TalentPanels