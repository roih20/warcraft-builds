import TalentTree from "./TalentTree.jsx";

const SpecializationPanel = ({ spentPoints, talents, specName, specTalents, specIcon, specBg }) => {


  const activeTalents = talents.map((talent) => {
    return {
      name: talent.spell_tooltip.spell.name,
      rank: talent.talent_rank
    }
  })

  const talentTree = specTalents.map((talent) => {
    return {
      ...talent,
      rank: activeTalents.find((activeTalent) => activeTalent.name === talent.name)?.rank || null
    }
  })


  return (
    <TalentTree
      spentPoints={spentPoints}
      talents={talentTree}
      specName={specName}
      specBackground={specBg}
      specIcon={specIcon}
    />
  )
}

export default SpecializationPanel

